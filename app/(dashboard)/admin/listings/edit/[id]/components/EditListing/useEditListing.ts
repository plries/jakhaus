"use client";
import { useRef, useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { UUIDTypes, v4 as uuidv4 } from "uuid";
import { CreateAddressPropTypes, CreateAgentPropTypes, UploadableImageTypes } from "@/app/(dashboard)/admin/types";
import { uploadFile, uploadMultipleFiles } from "@/lib/client";

export const useEditListing = () => {
  const phoneRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);

  const [success, setSuccess] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const [existingAgents, setExistingAgents] = useState<CreateAgentPropTypes[]>([]);

  const [showCreateAgent, setShowCreateAgent] = useState<boolean>(false);

  const [listingId, setListingId] = useState<UUIDTypes>("");

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
  const [deletedPhotoGallery, setDeletedPhotoGallery] = useState<string[]>([]);

  const [videoLink, setVideoLink] = useState<string>("");
  const [scanLink, setScanLink] = useState<string>("");

  const [floorPlans, setFloorPlans] = useState<UploadableImageTypes[]>([]);
  const [deletedFloorPlans, setDeletedFloorPlans] = useState<string[]>([]);

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

  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  
  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    return [match[1], match[2], match[3]]
      .filter(Boolean)
      .join('-');
  };

  const formatPostal = (value: string) => {
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    if (cleaned.length <= 3) return cleaned;

    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  };

  const agentId = showCreateAgent ? uuidv4() : agent.id;

  const extractFilePaths = (urls: string[]) => {
    return urls.map(url => {
      const parts = url.split("/media/");
      return parts.length > 1 ? parts[1] : url;
    });
  }
  
  let deletedPhotoPaths: string[] = [];
  if (deletedPhotoGallery.length > 0) deletedPhotoPaths = extractFilePaths(deletedPhotoGallery);

  let deletedFloorPlanPaths: string[] = [];
  if (deletedFloorPlans.length > 0) deletedFloorPlanPaths = extractFilePaths(deletedFloorPlans);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);
    
    try {
      // 1. upload all the images to supabase
      let uploadedFeaturedPhoto = null;
      if (featuredPhoto.file) uploadedFeaturedPhoto = await uploadFile(featuredPhoto.file, "featured-photos", listingId);

      let uploadedAgentLogo = null;
      if (agentLogo.file) uploadedAgentLogo = showCreateAgent && agentLogo.file
        ? await uploadFile(agentLogo.file, "logos/agents", agentId)
        : null;

      let uploadedBrokerageLogo = null;
      if (brokerageLogo.file) uploadedBrokerageLogo = showCreateAgent && brokerageLogo.file
        ? await uploadFile(brokerageLogo.file, "logos/brokerages", agentId)
        : null;

      const uploadedGallery = await uploadMultipleFiles(
        photoGallery.filter(img => img.file !== null).map(img => img.file!),
        "photo-gallery",
        listingId
      );
      
      const uploadedFloorPlans = await uploadMultipleFiles(
        floorPlans.filter(img => img.file !== null).map(img => img.file!),
        "floor-plans",
        listingId
      );

    // 2. prepare final data to send to the server
    const payload = {
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
        id: listingId,
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
        deletedPhotoPaths,
        deletedFloorPlanPaths,
      },
      photos: uploadedGallery,
      floor_plans: uploadedFloorPlans,
      touchedFields: Array.from(touchedFields),
    };

      console.log("creating listing with payload:", payload);

      // 3. send to server
      const res = await fetch("/api/editListing/", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!res.ok) throw new Error("failed to create listing");
      
      setSuccess(true);
      setShowModal(true);

    } catch (error) {
      setSuccess(false);
      setShowModal(true);
      console.log(error);
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    const fetchExistingAgents = async () => {
      const {data, error} = await supabase
      .from("agents")
      .select("*");
      if (error) {
      console.error("error fetching agents:", error);
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

    postalRef,
    formatPostal,
    
    showCreateAgent,
    toggleShowCreateAgent,

    listingId,
    setListingId,

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

    deletedPhotoGallery,
    setDeletedPhotoGallery,

    videoLink,
    setVideoLink,
    
    scanLink,
    setScanLink,

    floorPlans,
    setFloorPlans,

    deletedFloorPlans,
    setDeletedFloorPlans,

    agent,
    setAgent,

    agentLogo,
    setAgentLogo,

    brokerageLogo,
    setBrokerageLogo,

    handleSubmit,

    showModal,
    setShowModal,
    
    success,
    isSubmitting,

    touchedFields,
    setTouchedFields
  };
};