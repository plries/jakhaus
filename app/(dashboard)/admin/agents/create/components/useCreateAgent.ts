"use client";
import { useState } from "react";

export const useCreateAgent = () => {
    const [agentLogo, setAgentLogo] = useState<{ name: string; } | null>(null);
    const [darkLogo, setDarkLogo] = useState<boolean>(false);
  
    return {
      agentLogo,
      setAgentLogo,
      darkLogo,
      setDarkLogo
    }
};