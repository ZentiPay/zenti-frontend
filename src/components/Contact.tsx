"use client"

import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'

const Contact = () => {

  return (
    <div id="contact" className="py-12 lg:py-24">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
        <div className="pt-4">
          <h1 className="antialiased text-5xl font-bold">Get in touch</h1>
          <p className="pt-4 text-base font-extralight subpixel-antialiased font-stretch-condensed">Have questions or want to be notified  when  we launch? <br/> Reach out to us!</p>
          <p className="pt-4 inline-flex items-center">
            <span><EnvelopeIcon className="w-4 h-4 mr-2"/></span> xxxxxxxxxx@gmail.com</p>
        </div>
        <div>
           <div className="mx-auto w-full lg:w-[600px]">
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md cursor-pointer bg-light-btn-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-light-btn-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send Email
          </button>
        </div>
      </div>
        </div>
      </div>
     
    </div>
  )
}
export default Contact;
