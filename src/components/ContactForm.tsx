"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setStatus({ type: null, message: "" });
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function getEnvVariable(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
  }

  const EMAILJS_SERVICE_ID = getEnvVariable("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  const EMAILJS_TEMPLATE_ID = getEnvVariable("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
  const EMAILJS_PUBLIC_KEY = getEnvVariable("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "All fields are required",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "prathibhabilagi12@gmail.com",
        to_name: "Prathibha",
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);

    } catch (error) {
      console.error("Email send error:", error);
      let errorMessage = "Failed to send email. Please try again later.";
      if (error instanceof Error) {
        if (error.message.includes("Invalid service ID")) {
          errorMessage =
            "Email service configuration error. Please contact support.";
        } else if (error.message.includes("Invalid template ID")) {
          errorMessage =
            "Email template configuration error. Please contact support.";
        } else if (error.message.includes("Invalid public key")) {
          errorMessage =
            "Email service authentication error. Please contact support.";
        }
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full lg:w-[600px] pt-8 lg:pt-0">
      <div className="w-full grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-light-btn-primary-hover"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              disabled={isLoading}
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-light-btn-primary-hover"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              disabled={isLoading}
              required
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-light-btn-primary-hover"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      {status.type && (
        <div
          className={`pt-2 rounded-md text-sm font-medium ${
            status.type === "success" ? "text-green-800" : "text-red-800"
          }`}
        >
          <div className="flex items-center">
            {status.type === "success" ? (
              <CheckCircleIcon className="w-4 h-4 mr-2" />
            ) : (
              <ExclamationCircleIcon className="w-4 h-4 mr-2" />
            )}
            {status.message}
          </div>
        </div>
      )}
      <div className="mt-4">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={isLoading}
          className="block w-full rounded-md cursor-pointer bg-light-btn-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-light-btn-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}
