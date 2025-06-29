import React from "react";
import { FaEnvelope, FaUser, FaComments } from "react-icons/fa"; // Icons for email, name, and message

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 h-screen">
      <div className="p-10 rounded-2xl  bg-white">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">Contact Me</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Feel free to reach out for any project inquiries or collaborations. I'll get back to you as soon as possible!
        </p>
        <div className="p-6 border rounded-lg ">
          <form className="space-y-6">
            {/* Name Field */}
            <div className="flex items-center  pb-2">
              <FaUser className="text-blue-500 mr-3 text-xl" />
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex items-center  pb-2">
              <FaEnvelope className="text-blue-500 mr-3 text-xl" />
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex items-center  pb-2">
              <FaComments className="text-blue-500 mr-3 text-xl" />
              <div className="w-full">
                <label className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700"
                  rows="1" // Increased height of the textarea
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition ease-in-out duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


