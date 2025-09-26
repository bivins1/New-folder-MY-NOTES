import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";


export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-amber-50 to-white px-4 py-12">
      
      <h1 className="text-4xl font-extrabold mb-4 text-center">
        Are you in need of support? Contact us through one of the handles below.
      </h1>

      <p className="text-center text-lg mb-6 max-w-2xl text-gray-700">
        Please make sure you are signed into your GitHub or email account before contacting us to provide the necessary information and ease communication.
      </p>

      <div className="flex space-x-8">
     
        <a
          href="https://github.com/your-github-username"
          className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          <FaGithub size={20} /> <span>GitHub</span>
        </a>

    
        <a
          href="mailto:support@yournotesapp.com"
          className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400 transition"
        >
          <FaEnvelope size={20} /> <span>Email</span>
        </a>
      </div>

    </div>
  );
}

