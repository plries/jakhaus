import { useState, useEffect } from "react";
import { CreateAgentPropTypes } from "@/app/(dashboard)/admin/types";
import { supabase } from "@/utils/supabase/client";

export const useAgentsTable = () => {
  const [loading, setLoading] = useState(true);
  const [existingAgents, setExistingAgents] = useState<CreateAgentPropTypes[]>([]);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
      const fetchExistingAgents = async () => {
        const {data, error} = await supabase
        .from("agents")
        .select("*");
        if (error) {
        console.error("Error fetching agents:", error);
      } else {
        setExistingAgents(data);
        setLoading(false);
      }
    };
  
    fetchExistingAgents();
  }, []);

  return {
    existingAgents,
    inputValue,
    setInputValue,
    loading,
   };
}