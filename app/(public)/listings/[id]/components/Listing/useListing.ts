"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import { ListingPropTypes } from "@/app/types";

export const useListing = () => {
  const params = useParams();
  const slug = params.id;

  const [listing, setListing] = useState<ListingPropTypes>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchListing = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", slug)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setListing(data);
      }

      setLoading(false);
    };

    fetchListing();
  }, [slug]);

  return { listing, loading, error };
};
