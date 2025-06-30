import { useState } from "react";

export const useInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    showPassword,
    toggleShowPassword,
  };
}