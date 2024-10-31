// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center p-4">
      <div className="space-x-4">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">Instagram</a>
      </div>
      <p className="mt-2">&copy; 2024 Football Club | Contact: info@footballclub.com</p>
    </footer>
  );
};

export default Footer;
