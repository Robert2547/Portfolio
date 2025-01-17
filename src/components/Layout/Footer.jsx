import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="#" icon={<Github />} />
          <SocialLink href="#" icon={<Linkedin />} />
          <SocialLink href="#" icon={<Mail />} />
        </div>
        <p className="text-center text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className="text-white/60 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;
