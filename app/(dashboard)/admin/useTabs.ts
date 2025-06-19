import { useState } from "react"

export const useTabs = () => {
  const [currentTab, setCurrentTab] = useState("listings");

  const handleTabChange = (tab: "listings" | "agents") => {
    setCurrentTab(tab);
  };

  return {
    currentTab,
    setCurrentTab,
    handleTabChange
  };
}