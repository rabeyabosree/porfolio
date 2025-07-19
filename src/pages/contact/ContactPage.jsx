import React from "react";
import { FaEnvelope, FaUser, FaComments } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-gray-800 flex items-center justify-center">
      <div className="p-6 rounded-2xl bg-white shadow-md mt-16">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-500">Contact Me</h1>
        <p className="text-sm mb-6 text-center text-gray-500">
          Reach out for any collaboration or project. I’ll respond as soon as I can.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500 text-sm" />
            <input
              type="text"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500 text-sm" />
            <input
              type="email"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your email"
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-2">
            <FaComments className="text-gray-500 text-sm mt-2" />
            <textarea
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 resize-none"
              rows="3"
              placeholder="Your message"
            />
          </div>

          {/* Submit Button */}
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





