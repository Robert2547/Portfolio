// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Get in Touch
        </h2>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-white">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-white">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-white">Message</label>
              <textarea className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none h-32 text-white" />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 py-2 rounded-lg transition-all duration-300 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
