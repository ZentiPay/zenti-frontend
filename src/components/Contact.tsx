"use client";

import React from "react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="py-12 lg:py-24">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        <div className="pt-4">
          <h1 className="antialiased text-5xl font-bold">Get in touch</h1>
          <p className="pt-2 lg:pt-4 text-base font-extralight subpixel-antialiased font-stretch-condensed">
            Have questions or want to be notified when we launch? <br /> Reach
            out to us!
          </p>
          <p className="pt-2 lg:pt-4 inline-flex items-center">
            <span>
              <EnvelopeIcon className="w-4 h-4 mr-2" />
            </span>{" "}
            xxxxxxxxxx@gmail.com
          </p>
        </div>
        <div>
         <ContactForm/>
        </div>
      </div>
    </div>
  );
};
export default Contact;
