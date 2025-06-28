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
    street: "",
    unit: "",
    city: "",
    province: "",
    postal: "",
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
    logo: "",
    darkLogo: false,
    sub: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
  });

  const [agentLogo, setAgentLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
    uploadedUrl: null,
  });

  const [brokerage, setBrokerage] = useState<CreateBrokeragePropTypes>({
    title: "",
    address: "",
    logo: "",
  });

  const [brokerageLogo, setBrokerageLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
    uploadedUrl: null,
  });

  const id = uuidv4();

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // 1. upload all the images to Supabase storage (still using client-side supabase client)
      const uploadedFeaturedPhoto = await uploadFileToSupabase(featuredPhoto.file!, "featured-photos", id);
      setFeaturedPhoto({ ...featuredPhoto, uploadedUrl: uploadedFeaturedPhoto?.publicUrl || "" });

      const uploadedAgentLogo = await uploadFileToSupabase(agentLogo.file!, "logos/agents", id);
      setAgentLogo({ ...agentLogo, uploadedUrl: uploadedAgentLogo?.publicUrl || "" });

      const uploadedBrokerageLogo = await uploadFileToSupabase(brokerageLogo.file!, "logos/brokerages", id);
      setBrokerageLogo({ ...brokerageLogo, uploadedUrl: uploadedBrokerageLogo?.publicUrl || "" });

      const uploadedGallery = await Promise.all(photoGallery.map(async (photo) => {
        if (!photo.file) return null;
        const result = await uploadFileToSupabase(photo.file, "photo-gallery", id);
        return result?.publicUrl || "";
      }));

      const uploadedFloorPlans = await Promise.all(floorPlans.map(async (plan) => {
        if (!plan.file) return null;
        const result = await uploadFileToSupabase(plan.file, "floor-plans", id);
        return result?.publicUrl || "";
      }));

      // 2. prepare final data to send to the server
      const payload = {
        id,
        agent: {
          ...agent,
          logo_url: uploadedAgentLogo?.publicUrl || "", // or upload if needed
        },
        brokerage: {
          ...brokerage,
          brokerage_logo: uploadedBrokerageLogo?.publicUrl || "", // or upload if needed
        },
        dataToSubmit: {
          ...address,
          bedrooms,
          bathrooms,
          square_feet: squareFeet,
          video_link: videoLink,
          scan_link: scanLink,
          featured_photo: uploadedFeaturedPhoto?.publicUrl || "",
        },
        galleryUrls: uploadedGallery.filter(Boolean),
        floorPlanUrls: uploadedFloorPlans.filter(Boolean),
      };

      // 3. send to server
      const res = await fetch("/api/listings/", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to create listing");

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