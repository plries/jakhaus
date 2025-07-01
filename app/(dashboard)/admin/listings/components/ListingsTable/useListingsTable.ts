import { useState, useEffect } from "react";
import {CreateListingPropTypes } from "@/app/(dashboard)/admin/types";
import { supabase } from "@/utils/supabase/client";

export const useListingsTable = () => {
  const [loading, setLoading] = useState(true);
  const [existingListings, setExistingListings] = useState<CreateListingPropTypes[]>([]);
  const [existingAgents, setExistingAgents] = useState<{ id: string; NAME: string}[]>([]);
  const [showingAmount, setShowingAmount] = useState({from: 0, to: 10});
  const [inputValue, setInputValue] = useState('');
  
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
    setShowingAmount
  };
}