"use client";

import { useState } from "react";

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
    <section className="w-full bg-neutral-50 py-20" id="contact">
      <div className="mx-auto max-w-[1440px]">
        {isSubmitted ? (
          <div className="p-8 text-center lg:px-32">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-950 tracking-tight">
              Talk to you soon!
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-gray-600">
              Your message has been sent successfully. We appreciate your
              interest and will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="p-8 text-center lg:px-32">
              <h2 className="text-6xl font-bold text-gray-950 tracking-tight">
                Ready to collaborate?
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Big idea or quick shoot, we're in.
              </p>
            </div>
            <div className="mx-auto max-w-2xl p-8">
              <form action="api/send" method="POST">
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-950" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-950"
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-950" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-950"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-950" htmlFor="email">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-950"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-950" htmlFor="message">
                    How can we help you? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-950"
                    id="message"
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex cursor-pointer items-center rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-700"
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
