"use client";
import { useState, useEffect } from "react";
import { createListing } from "@/lib/listings";
import {
  CreateAddressPropTypes,
  CreateAgentPropTypes,
  CreateBrokeragePropTypes,
  CreateFeaturedPhotoPropTypes
} from "@/app/(dashboard)/admin/types";

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

  const [featuredPhoto, setFeaturedPhoto] = useState<CreateFeaturedPhotoPropTypes | null>(null);
  const [photoGallery, setPhotoGallery] = useState<string[]>([]);

  const [videoLink, setVideoLink] = useState<string>("");
  const [scanLink, setScanLink] = useState<string>("");
  const [floorPlans, setFloorPlans] = useState<string[]>([]);

  const [agent, setAgent] = useState<CreateAgentPropTypes>({
    id: "",
    logo: "",
    darkLogo: false,
    name: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
  });
  const [brokerage, setBrokerage] = useState<CreateBrokeragePropTypes>({
    title: "",
    address: "",
    logo: "",
  });

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  try {
    const dataToSubmit = {
      street: address.street,
      unit: address.unit,
      city: address.city,
      province: address.province,
      postal: address.postal,

      bedrooms: bedrooms,
      bathrooms: bathrooms,
      square_feet: squareFeet,

      video_link: videoLink,
      scan_link: scanLink,
      floor_plans: floorPlans,

      featured_photo: featuredPhoto,
      photos: photoGallery,

      agent_id: agent.id,
    };

    await createListing(dataToSubmit);

    alert("Listing created successfully!");
  } catch (error) {
    console.error("Error creating listing:", error);
    alert("Failed to create listing.");
  }
};

  useEffect(() => {
    return () => {
      if (featuredPhoto?.url) {
        URL.revokeObjectURL(featuredPhoto.url);
      }
    };
  }, [featuredPhoto]);

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
    brokerage,
    setBrokerage,

    handleSubmit,
  };
}