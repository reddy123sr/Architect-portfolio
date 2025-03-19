import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white flex flex-col items-center shadow-lg">
      {/* Contact Header */}
      <div className="text-center w-full mb-12">
        <h2 className="text-4xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-lg mt-2 text-gray-300">We would love to hear from you!</p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Address */}
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-teal-400 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">Our Office</h3>
            <p className="text-gray-300">Sai Architect & Designer, Ongole, India</p>
          </div>
          
        </div>
        
        {/* Phone */}
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md">
          <FaPhone className="text-teal-400 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-300">+91 9676507502
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md">
          <FaEnvelope className="text-teal-400 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-300">saikummitha7502@gmail.com
            </p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md">
          <FaGlobe className="text-teal-400 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">Visit Our Website</h3>
            <p className="text-gray-300">www.saiarchitects.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
