import React, { useRef } from "react";
import { FaEnvelope, FaUser, FaComments } from "react-icons/fa";
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const form = useRef();
  // uncontrolledcomponent case state maintain outsite of react using useref

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,       // Service ID from .env
      import.meta.env.VITE_TEMPLATE_ID,      // Template ID from .env
      form.current,                          // Form reference
      import.meta.env.VITE_EMAIL_API_KEY     // Public Key from .env
    )
    .then(() => {
      alert("Message sent successfully");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send the message");
    });
  };

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="p-9 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Me</h1>

        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          
          {/* Hidden Subject Field */}
          <input type="hidden" name="subject" value="New Contact Form Submission" />

          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500 text-sm" />
            <input
              type="text"
              name="name"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500 text-sm" />
            <input
              type="email"
              name="email"
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Your email"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <FaComments className="text-gray-500 text-sm mt-2" />
            <textarea
              className="w-full text-sm p-2 border-b border-gray-300 focus:outline-none focus:border-gray-500 resize-none"
              rows="3"
              placeholder="Your message"
              name="message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;





