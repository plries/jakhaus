"use client";
import { useState, useRef } from "react";
import { CreateAgentPropTypes, UploadableImageTypes } from "@/app/(dashboard)/admin/types";
import { uploadFile } from "@/lib/client";

export const useEditAgent = () => {  
  const phoneRef = useRef<HTMLInputElement>(null);

  const [success, setSuccess] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [agent, setAgent] = useState<CreateAgentPropTypes>({
    id: "",
    LOGO_URL: "",
    LOGO_DARK: false,
    SUBTITLE: "",
    NAME: "",
    EMAIL: "",
    PHONE: "",
    WEBSITE: "",
    INSTAGRAM: "",
    BROKERAGE_NAME: "",
    BROKERAGE_ADDRESS: "",
    BROKERAGE_LOGO: "",
  });

  const [agentLogo, setAgentLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
  });

  const [brokerageLogo, setBrokerageLogo] = useState<UploadableImageTypes>({
    file: null,
    previewUrl: null,
  });

  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    return [match[1], match[2], match[3]]
      .filter(Boolean)
      .join('-');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);
    
    try {

      let uploadedAgentLogo = null;
      if (agentLogo.file) uploadedAgentLogo = await uploadFile(agentLogo.file, "logos/agents", agent.id);
      
      let uploadedBrokerageLogo = null;
      if (brokerageLogo.file) uploadedBrokerageLogo = await uploadFile(brokerageLogo.file, "logos/brokerages", agent.id);
  
      // 2. prepare final data to send to the server
      const payload = {
        agent: {
          id: agent.id, 
          NAME: agent.NAME,
          LOGO_URL: uploadedAgentLogo?.publicUrl || "",
          LOGO_DARK: agent.LOGO_DARK,
          SUBTITLE: agent.SUBTITLE,
          EMAIL: agent.EMAIL,
          PHONE: agent.PHONE,
          WEBSITE: agent.WEBSITE,
          INSTAGRAM: agent.INSTAGRAM,
          BROKERAGE_NAME: agent.BROKERAGE_NAME,
          BROKERAGE_ADDRESS: agent.BROKERAGE_ADDRESS,
          BROKERAGE_LOGO: uploadedBrokerageLogo?.publicUrl || "",
        },
        touchedFields: Array.from(touchedFields),
      };
  
        console.log("creating listing with payload:", payload);
  
        // 3. send to server
        const res = await fetch("/api/editAgent/", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!res.ok)  throw new Error("failed to create listing");
  
        setSuccess(true);
        setShowModal(true);

      } catch (error) {
        setSuccess(false);
        setShowModal(true);
        console.log(error);
      }

    setIsSubmitting(false);
  };

  return {
    phoneRef,
    formatPhone,

    agent,
    setAgent,

    agentLogo,
    setAgentLogo,

    brokerageLogo,
    setBrokerageLogo,

    showModal,
    setShowModal,

    success,
    isSubmitting,

    handleSubmit,

    touchedFields,
    setTouchedFields
  }
}