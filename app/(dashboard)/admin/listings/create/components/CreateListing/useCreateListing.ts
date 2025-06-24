"use client";
import { useState, useEffect } from "react";

export const useCreateListing = () => {
  const [showCreateAgent, setShowCreateAgent] = useState<boolean>(false);
  const [featuredImage, setFeaturedImage] = useState<{ url: string } | null>(null);
  const [address, setAddress] = useState<{
    street?: string;
    unit?: string;
    city?: string;
    province?: string;
    postal?: string }
  | null>(null);
  const [agent, setAgent] = useState<{
    id?: string;
    logo?: string;
    darkLogo?: boolean;
    name?: string;
    email?: string;
    phone?: string;
    website?: string;
    instagram?: string;
  }>({
    id: "",
    logo: "",
    darkLogo: false,
    name: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
  });
  const [brokerage, setBrokerage] = useState<{
    id?: string;
    title?: string;
    address?: string;
    logo?: string
  }>({
    id: "",
    title: "",
    address: "",
    logo: "",
  });

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);

  useEffect(() => {
    return () => {
      if (featuredImage?.url) {
        URL.revokeObjectURL(featuredImage.url);
      }
    };
  }, [featuredImage]);

  return {
    showCreateAgent,
    toggleShowCreateAgent,
    featuredImage,
    setFeaturedImage,
    address,
    setAddress,
    brokerage,
    setBrokerage,
    agent,
    setAgent,
  };
}