"use client";
import { useState, useEffect } from "react";
import {
  CreateAddressPropTypes,
  CreateAgentPropTypes,
  CreateBrokeragePropTypes,
  UploadableImageTypes,
} from "@/app/(dashboard)/admin/types";
import { uploadFileToSupabase } from "@/lib/uploadFileToSupabase";
import {v4 as uuidv4} from 'uuid';

export const useCreateListing = () => {
  const [showCreateAgent, setShowCreateAgent] = useState<boolean>(false);

  const [address, setAddress] = useState<CreateAddressPropTypes>({
    STREET: "",
    UNIT: "",
    CITY: "",
    PROVINCE: "",
    POSTAL_CODE: "",
  });

  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [squareFeet, setSquareFeet] = useState<number>(0);

  const [featuredPhoto, setFeaturedPhoto] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
    uploadedUrl: null,
  });
  const [photoGallery, setPhotoGallery] = useState<UploadableImageTypes[]>([]);

  const [videoLink, setVideoLink] = useState<string>("");
  const [scanLink, setScanLink] = useState<string>("");

  const [floorPlans, setFloorPlans] = useState<UploadableImageTypes[]>([]);

  const [agent, setAgent] = useState<CreateAgentPropTypes>({
    id: "",
    LOGO_URL: "",
    DARK_LOGO: false,
    SUBTITLE: "",
    NAME: "",
    EMAIL: "",
    PHONE: "",
    WEBSITE: "",
    INSTAGRAM: "",
  });

  const [agentLogo, setAgentLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
    uploadedUrl: null,
  });

  const [brokerage, setBrokerage] = useState<CreateBrokeragePropTypes>({
    TITLE: "",
    ADDRESS: "",
    LOGO: "",
  });

  const [brokerageLogo, setBrokerageLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
    uploadedUrl: null,
  });

  const listingId = uuidv4();
  const agentId = uuidv4();

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      // 1. upload all the images to Supabase storage (still using client-side supabase client)
      const uploadedFeaturedPhoto = await uploadFileToSupabase(featuredPhoto.file!, "featured-photos", listingId);
      setFeaturedPhoto({ ...featuredPhoto, uploadedUrl: uploadedFeaturedPhoto?.publicUrl || "" });

      const uploadedAgentLogo = await uploadFileToSupabase(agentLogo.file!, "logos/agents", listingId);
      setAgentLogo({ ...agentLogo, uploadedUrl: uploadedAgentLogo?.publicUrl || "" });

      const uploadedBrokerageLogo = await uploadFileToSupabase(brokerageLogo.file!, "logos/brokerages", listingId);
      setBrokerageLogo({ ...brokerageLogo, uploadedUrl: uploadedBrokerageLogo?.publicUrl || "" });

      const uploadedGallery = await Promise.all(photoGallery.map(async (photo) => {
        if (!photo.file) return null;
        const result = await uploadFileToSupabase(photo.file, "photo-gallery", listingId);
        return result?.publicUrl || "";
      }));

      const uploadedFloorPlans = await Promise.all(floorPlans.map(async (plan) => {
        if (!plan.file) return null;
        const result = await uploadFileToSupabase(plan.file, "floor-plans", listingId);
        return result?.publicUrl || "";
      }));

    // 2. prepare final data to send to the server
    const payload = {
      id: listingId,
      agent: {
        id: agentId, 
        NAME: agent.NAME,
        LOGO_URL: uploadedAgentLogo?.publicUrl || "",
        DARK_LOGO: agent.DARK_LOGO,
        SUBTITLE: agent.SUBTITLE,
        EMAIL: agent.EMAIL,
        PHONE: agent.PHONE,
        WEBSITE: agent.WEBSITE,
        INSTAGRAM: agent.INSTAGRAM,
        BROKERAGE_NAME: brokerage.TITLE,
        BROKERAGE_ADDRESS: brokerage.ADDRESS,
        BROKERAGE_TITLE: brokerage.TITLE,
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

  return {
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

    brokerage,
    setBrokerage,

    brokerageLogo,
    setBrokerageLogo,

    handleSubmit,
  };
}