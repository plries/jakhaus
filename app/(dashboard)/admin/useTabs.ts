import { useEffect, useState } from "react"

export const useTabs = () => {
  const [currentTab, setCurrentTab] = useState("listings");

  const handleTabChange = (tab: "listings" | "agents") => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    console.log("currentTab", currentTab)
  })

  return {
    currentTab,
    setCurrentTab,
    handleTabChange
  };
}