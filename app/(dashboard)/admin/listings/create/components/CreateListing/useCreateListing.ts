"use client";
import { useState, useEffect, useRef } from "react";
import {
  CreateAddressPropTypes,
  CreateAgentPropTypes,
  UploadableImageTypes,
} from "@/app/(dashboard)/admin/types";
import { uploadFileToSupabase } from "@/lib/uploadFileToSupabase";
import { supabase } from "@/utils/supabase/client";
import {v4 as uuidv4} from 'uuid';

export const useCreateListing = () => {
  const phoneRef = useRef<HTMLInputElement>(null);

  const [existingAgents, setExistingAgents] = useState<CreateAgentPropTypes[]>([]);

  const [showCreateAgent, setShowCreateAgent] = useState<boolean>(false);

  const [address, setAddress] = useState<CreateAddressPropTypes>({
    STREET: "",
    UNIT: "",
    CITY: "",
    PROVINCE: "BC",
    POSTAL_CODE: "",
  });

  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [squareFeet, setSquareFeet] = useState<number>(0);

  const [featuredPhoto, setFeaturedPhoto] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
  });
  const [photoGallery, setPhotoGallery] = useState<UploadableImageTypes[]>([]);

  const [videoLink, setVideoLink] = useState<string>("");
  const [scanLink, setScanLink] = useState<string>("");

  const [floorPlans, setFloorPlans] = useState<UploadableImageTypes[]>([]);

  const [agent, setAgent] = useState<CreateAgentPropTypes>({
    id: "",
    LOGO_URL: "",
    LOGO_DARK: false,
    SUBTITLE: "",
    NAME: "",
    EMAIL: "",
    PHONE: "",
    WEBSITE: "",
    INSTAGRAM: "",
    BROKERAGE_NAME: "",
    BROKERAGE_ADDRESS: "",
    BROKERAGE_LOGO: "",
  });

  const [agentLogo, setAgentLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
  });

  const [brokerageLogo, setBrokerageLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
  });

  const listingId = uuidv4();
  const agentId = uuidv4();

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    return [match[1], match[2], match[3]]
      .filter(Boolean)
      .join('-');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      // 1. upload all the images to Supabase storage (still using client-side supabase client)
      const uploadedFeaturedPhoto = await uploadFileToSupabase(featuredPhoto.file!, "featured-photos", listingId);

      const uploadedAgentLogo = await uploadFileToSupabase(agentLogo.file!, "logos/agents", listingId);

      const uploadedBrokerageLogo = await uploadFileToSupabase(brokerageLogo.file!, "logos/brokerages", listingId);

      const uploadedGallery = (await Promise.all(photoGallery.map(async (photo) => {
        if (!photo.file) return null;
        const result = await uploadFileToSupabase(photo.file, "photo-gallery", listingId);
        return result?.publicUrl || null;
      }))).filter(Boolean);

      const uploadedFloorPlans = (await Promise.all(floorPlans.map(async (plan) => {
        if (!plan.file) return null;
        const result = await uploadFileToSupabase(plan.file, "floor-plans", listingId);
        return result?.publicUrl || null;
      }))).filter(Boolean);

    // 2. prepare final data to send to the server
    const payload = {
      id: listingId,
      agent: {
        id: agentId, 
        NAME: agent.NAME,
        LOGO_URL: uploadedAgentLogo?.publicUrl || "",
        LOGO_DARK: agent.LOGO_DARK,
        SUBTITLE: agent.SUBTITLE,
        EMAIL: agent.EMAIL,
        PHONE: agent.PHONE,
        WEBSITE: agent.WEBSITE,
        INSTAGRAM: agent.INSTAGRAM,
        BROKERAGE_NAME: agent.BROKERAGE_NAME,
        BROKERAGE_ADDRESS: agent.BROKERAGE_ADDRESS,
        BROKERAGE_LOGO: uploadedBrokerageLogo?.publicUrl || "",
      },
      dataToSubmit: {
        STREET: address.STREET,
        UNIT: address.UNIT,
        CITY: address.CITY,
        PROVINCE: address.PROVINCE,
        POSTAL_CODE: address.POSTAL_CODE,
        BEDROOMS: bedrooms,
        BATHROOMS: bathrooms,
        SQUARE_FEET: squareFeet,
        FEATURED_PHOTO: uploadedFeaturedPhoto?.publicUrl || "",
        VIDEO_LINK: videoLink,
        SCAN_LINK: scanLink,
      },
      photos: uploadedGallery,
      floor_plans: uploadedFloorPlans,
      };

      console.log("creating listing with payload:", payload);

      // 3. send to server
      const res = await fetch("/api/listings/", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", res);
      if (!res.ok) throw new Error("Failed to create listing");

      const text = await res.text();
      console.log("response body:", text);

      alert("Listing created successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    const fetchExistingAgents = async () => {
      const {data, error} = await supabase
      .from("agents")
      .select("*");
      if (error) {
      console.error("Error fetching agents:", error);
    } else {
      setExistingAgents(data);
    }
  };

    fetchExistingAgents();
  }, []);

  useEffect(() => {
    return () => {
      if (featuredPhoto?.previewUrl) {
        URL.revokeObjectURL(featuredPhoto.previewUrl);
      }
    };
  }, [featuredPhoto]);

  useEffect(() => {
    return () => {
      if (agentLogo?.previewUrl) URL.revokeObjectURL(agentLogo.previewUrl);
    };
  }, [agentLogo]);

  useEffect(() => {
    return () => {
      if (brokerageLogo?.previewUrl) URL.revokeObjectURL(brokerageLogo.previewUrl);
    };
  }, [brokerageLogo]);

  useEffect(() => {
    return () => {
      photoGallery.forEach((img) => img.previewUrl && URL.revokeObjectURL(img.previewUrl));
    };
  }, [photoGallery]);

  useEffect(() => {
    return () => {
      floorPlans.forEach((plan) => plan.previewUrl && URL.revokeObjectURL(plan.previewUrl));
    };
  }, [floorPlans]);

  useEffect(() => {
    const phone = phoneRef.current;

    if (!phone) return;

    const handlePhoneInput = (event: KeyboardEvent) => {
      const input = event.target as HTMLInputElement;

      if (
        event.key !== 'Backspace' &&
        (input.value.length === 3 || input.value.length === 7)
      ) {
        input.value += '-';
      }
    };

    phone.addEventListener('keydown', handlePhoneInput);

    return () => {
      phone.removeEventListener('keydown', handlePhoneInput);
    };
  }, []);

  return {
    existingAgents,
    
    phoneRef,
    formatPhone,
    
    showCreateAgent,
    toggleShowCreateAgent,

    address,
    setAddress,

    bedrooms,
    setBedrooms,
    bathrooms,
    setBathrooms,
    squareFeet,
    setSquareFeet,

    featuredPhoto,
    setFeaturedPhoto,

    photoGallery,
    setPhotoGallery,

    videoLink,
    setVideoLink,
    
    scanLink,
    setScanLink,

    floorPlans,
    setFloorPlans,

    agent,
    setAgent,

    agentLogo,
    setAgentLogo,

    brokerageLogo,
    setBrokerageLogo,

    handleSubmit,
  };
}