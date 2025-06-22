import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

function Footer() {
  return (
    <div className="px-4 md:px-16 lg:px-28 pb-10 bg-gray-50 pt-16 border-t border-gray-200">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-8">
        {/* Logo + Description */}
        <div>
          <h1 className="font-bold text-4xl md:text-5xl text-indigo-950 mb-4">Jadoo.</h1>
          <p className="text-gray-500 text-sm">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Support Column */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-black mb-3">Support</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Help Center</li>
            <li>Account Information</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Help and Solution Column */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-black mb-3">Help & Solution</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Talk to Support</li>
            <li>Support Docs</li>
            <li>System Status</li>
            <li>Covid Response</li>
          </ul>
        </div>

        {/* Product Column */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-black mb-3">Product</h2>
          <ul className="text-gray-500 space-y-2 text-sm">
            <li>Updates</li>
            <li>Security</li>
            <li>Beta Test</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-black mb-3">Contact</h2>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <HiPhone className="text-lg text-indigo-600" /> +91 12345 67890
            </li>
            <li className="flex items-center gap-2">
              <HiEnvelope className="text-lg text-indigo-600" /> support@jadoo.co
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <p className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Jadoo. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
