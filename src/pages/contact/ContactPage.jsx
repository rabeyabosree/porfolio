import React from "react";
import { FaEnvelope, FaUser, FaComments } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="p-9 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Me</h1>

        <form className="space-y-6">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500 text-sm" />
            <input
              type="text"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your name"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500 text-sm" />
            <input
              type="email"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your email"
            />
          </div>

          <div className="flex items-start gap-2">
            <FaComments className="text-gray-500 text-sm mt-2" />
            <textarea
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 resize-none"
              rows="3"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gray-500 text-white text-sm font-semibold rounded-md hover:bg-gray-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;





