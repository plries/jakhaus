import { useState, useEffect } from "react";
import { UUIDTypes } from "uuid";
import { CreateAgentPropTypes } from "@/app/(dashboard)/admin/types";
import { supabase } from "@/utils/supabase/client";

export const useAgentsTable = () => {
  const [loading, setLoading] = useState(true);
  const [existingAgents, setExistingAgents] = useState<CreateAgentPropTypes[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<CreateAgentPropTypes | null>(null);

  const [inputValue, setInputValue] = useState('');
  const [showingAmount, setShowingAmount] = useState({from: 0, to: 10});

  const [success, setSuccess] = useState<boolean | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const showModal = !!selectedAgent;

  const toggleModal = ({agent = null}: {agent: CreateAgentPropTypes | null}) => {
    setSelectedAgent(agent);
  };

  const deleteAgent = async (agentId: UUIDTypes) => {
    setIsDeleting(true);
        
    try {
      // 1. prepare final data to send to the server
      const payload = {
        agentId: agentId, 
      };
  
      console.log("creating agent with payload:", payload);

      // 2. send to server
      const res = await fetch("/api/deleteAgent/", {
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
      toggleModal({agent: null});
    }, 3000)
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
        setLoading(false);
      }
    };
  
    fetchExistingAgents();
  }, []);

  return {
    existingAgents,
    selectedAgent,
    setSelectedAgent,
    
    inputValue,
    setInputValue,
    loading,

    showingAmount,
    setShowingAmount,

    deleteAgent,
    isDeleting,
    success,

    showModal,
    toggleModal,
   };
}