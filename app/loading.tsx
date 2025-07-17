"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JakhausLogo } from "@/public/icons";

export default function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      {/* Logo */}
      <JakhausLogo width={800} />

      {/* Loading Bar Container */}
      <div className="mt-6 h-2 w-48 overflow-hidden bg-gray-200">
        {/* Loading Bar Animation */}
        <motion.div
          className="h-full bg-neutral-950"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
