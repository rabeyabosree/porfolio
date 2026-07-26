import React, { useRef } from "react";
import { FaEnvelope, FaUser, FaComments, FaPhoneAlt, FaMapMarkerAlt, } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_API_KEY
      ).then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      }).catch((error) => {
        toast.error("Failed to send message.");
      });
  };

  return (
    <section className="pt-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <p className="text-green-500 uppercase tracking-[4px] mb-2">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity?
            Feel free to contact me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* contact info */}
          <div className="bg-gray-900 text-white rounded-3xl p-10">
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaUser className="text-green-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p>Rabeya Bosri</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-green-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p>bosrirabeya924@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-green-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p>01927623786</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-green-400 text-2xl" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>Brahmanbaria, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="bg-white shadow-xl rounded-2xl border  p-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission"
              />

              <div>
                <label className="font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-50 outline-none focus:border-green-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-50 outline-none focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-2 border rounded-lg p-3 bg-gray-50 resize-none outline-none focus:border-green-500"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                onClick={sendEmail}
                className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;





