"use client";
import { useState, useEffect } from "react";

export const useCreateListing = () => {
  const [showCreateAgent, setShowCreateAgent] = useState<boolean>(false);
  const [showCreateBrokerage, setShowCreateBrokerage] = useState<boolean>(false);
  const [featuredImage, setFeaturedImage] = useState<{ file: File; url: string } | null>(null);
  const [address, setAddress] = useState<{ street?: string; unit?: string; city?: string; province?: string; postal?: string } | null>(null);
  const [brokerage, setBrokerage] = useState<{ name: string; } | null>(null);
  const [agentLogo, setAgentLogo] = useState<{ name: string; } | null>(null);
  const [agent, setAgent] = useState<{ name: string; } | null>(null);
  const [darkLogo, setDarkLogo] = useState<boolean>(false);

  const toggleShowCreateAgent = () => setShowCreateAgent(!showCreateAgent);
  const toggleShowCreateBrokerage = () => setShowCreateBrokerage(!showCreateBrokerage);

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
    showCreateBrokerage,
    toggleShowCreateBrokerage,
    featuredImage,
    setFeaturedImage,
    address,
    setAddress,
    brokerage,
    setBrokerage,
    agent,
    setAgent,
    agentLogo,
    setAgentLogo,
    darkLogo,
    setDarkLogo,
  };
}