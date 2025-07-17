import { useState, useEffect } from "react";
import {CreateListingPropTypes } from "@/app/(dashboard)/admin/types";
import { supabase } from "@/utils/supabase/client";
import { UUIDTypes } from "uuid";

export const useListingsTable = () => {
  const [loading, setLoading] = useState(true);
  const [existingListings, setExistingListings] = useState<CreateListingPropTypes[]>([]);
  const [existingAgents, setExistingAgents] = useState<{ id: string; NAME: string}[]>([]);
  const [selectedListing, setSelectedListing] = useState<CreateListingPropTypes | null>(null);

  const [showingAmount, setShowingAmount] = useState({from: 0, to: 10});
  const [inputValue, setInputValue] = useState('');

  const [isDeleting, setIsDeleting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const showModal = !!selectedListing;

  const toggleModal = ({listing = null}: {listing: CreateListingPropTypes | null}) => {
    setSelectedListing(listing);
  };

  const deleteListing = async (listingId: UUIDTypes) => {
      setIsDeleting(true);
          
      try {
        // 1. prepare final data to send to the server
        const payload = {
          listingId: listingId, 
        };
    
        console.log("deleting listing with payload:", payload);
  
        // 2. send to server
        const res = await fetch("/api/deleteListing/", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!res.ok)  throw new Error("failed to delete listing");
  
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
        console.log(error);
      }
  
      setIsDeleting(false);
      
      setTimeout(() => {
        toggleModal({listing: null});
      }, 3000)
    };
  
  useEffect(() => {
    const fetchExistingListings = async () => {
      const {data, error} = await supabase
        .from("listings")
        .select("*");
        if (error) {
        console.error("error fetching listings:", error);
    } else {
      setExistingListings(data);
      setLoading(false);
    }
  };
  
    fetchExistingListings();
  }, []);

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

  return {
    existingListings,
    existingAgents,

    inputValue,
    setInputValue,
    loading,

    showingAmount,
    setShowingAmount,

    selectedListing,
    deleteListing,
    isDeleting,
    success,

    showModal,
    toggleModal
  };
}