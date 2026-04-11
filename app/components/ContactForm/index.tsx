"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "@/app/(public)/listings/[id]/const";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Server returned an error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto grid min-h-[401px] max-w-[1440px] grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12 lg:pb-16">
        {isSubmitted ? (
          <div className="col-span-full m-auto flex flex-col text-center">
            <motion.h2
              initial={MOTION_CONFIG.DEFAULT.INITIAL}
              whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
              transition={MOTION_CONFIG.DEFAULT}
              className="text-2xl font-medium tracking-tighter md:text-[2rem]"
            >
              Talk to you soon!
            </motion.h2>
            <motion.p
              initial={MOTION_CONFIG.DEFAULT.INITIAL}
              whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
              transition={MOTION_CONFIG.DEFAULT}
              className="mt-4 text-neutral-600"
            >
              <span className="font-medium text-neutral-950">
                Your message has been sent successfully.
              </span>
              <br />
              We appreciate your interest and will get back to you as soon as
              possible.
            </motion.p>
          </div>
        ) : (
          <>
            <div className="col-span-full md:col-span-4">
              <motion.h2
                initial={MOTION_CONFIG.LEFT.INITIAL}
                whileInView={MOTION_CONFIG.LEFT.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.DEFAULT}
                className="text-2xl font-medium tracking-tighter md:col-span-4 md:text-[2rem] lg:text-4xl"
              >
                Ready when you are.
              </motion.h2>
              <motion.p
                initial={MOTION_CONFIG.DEFAULT.INITIAL}
                whileInView={MOTION_CONFIG.DEFAULT.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.DEFAULT}
                className="mt-1 text-neutral-600"
              >
                Big idea or quick shoot, we're in!
              </motion.p>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-span-8">
              <form action="api/send" method="POST">
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-1 font-medium text-neutral-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="relative flex w-full flex-row items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm outline-2 outline-transparent transition-all duration-150 ease-in-out required:!border-red-400 focus-within:shadow-md focus-within:outline-2 focus-within:outline-neutral-950/10"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 font-medium text-neutral-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="relative flex w-full flex-row items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm outline-2 outline-transparent transition-all duration-150 ease-in-out required:!border-red-400 focus-within:shadow-md focus-within:outline-2 focus-within:outline-neutral-950/10"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="mb-1 font-medium text-neutral-700"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="relative flex w-full flex-row items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm outline-2 outline-transparent transition-all duration-150 ease-in-out focus-within:shadow-md focus-within:outline-2 focus-within:outline-neutral-950/10"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="mb-1 font-medium text-neutral-700"
                    htmlFor="message"
                  >
                    How can we help you? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="relative flex w-full flex-row items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 shadow-sm outline-2 outline-transparent transition-all duration-150 ease-in-out focus-within:shadow-md focus-within:outline-2 focus-within:outline-neutral-950/10"
                    id="message"
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex h-11 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-neutral-950 px-4 py-2 text-nowrap text-neutral-50 shadow-md transition-all duration-150 ease-in-out hover:bg-neutral-800 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
