import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-12 text-center">Last Updated: March 14, 2025</p>

      {/* 1. Acceptance of Terms */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 dark:text-gray-300">By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree to these terms, you must not use this website.</p>
      </div>

      {/* 2. Website Use */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">2. Website Use</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>The content on this website is for general information and educational purposes only.</li>
          <li>We reserve the right to modify, suspend, or discontinue any part of the website at any time without prior notice.</li>
          <li>Unauthorized use of this website may result in a claim for damages and/or be a criminal offense.</li>
        </ul>
      </div>

      {/* 3. User Accounts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">3. User Accounts</h2>
        <p className="text-gray-700 dark:text-gray-300">If you create an account on our website:</p>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          <li>You agree to provide accurate and complete information when creating an account.</li>
          <li>We reserve the right to terminate your account if you violate these terms or misuse the platform.</li>
        </ul>
      </div>

      {/* 4. Intellectual Property */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 dark:text-gray-300">All content on this website, including text, graphics, logos, images, videos, and software, is the property of Quantum Martial Arts or its content suppliers. You may not reproduce, distribute, modify, or republish any content without prior written consent.</p>
      </div>

      {/* 5. Code of Conduct */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">5. Code of Conduct</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>Not to engage in any unlawful or harmful activity.</li>
          <li>Not to attempt to hack, disrupt, or interfere with the website's functionality.</li>
          <li>To communicate respectfully and avoid offensive or harmful language.</li>
        </ul>
      </div>

      {/* 6. Purchases and Payments */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">6. Purchases and Payments</h2>
        <p className="text-gray-700 dark:text-gray-300">All purchases made through our website are subject to our refund and return policies. Payment information is processed securely; we do not store sensitive payment details.</p>
      </div>

      {/* 7. Disclaimer of Liability */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">7. Disclaimer of Liability</h2>
        <p className="text-gray-700 dark:text-gray-300">We provide this website and its content on an "as is" and "as available" basis without any warranties of any kind. We are not responsible for any direct, indirect, incidental, or consequential damages resulting from your use of the website.</p>
      </div>

      {/* 8. Third-Party Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">8. Third-Party Links</h2>
        <p className="text-gray-700 dark:text-gray-300">Our website may contain links to third-party websites. We are not responsible for the content, security, or privacy practices of those websites. You acknowledge that you access any third-party websites at your own risk.</p>
      </div>

      {/* 9. Governing Law */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">9. Governing Law</h2>
        <p className="text-gray-700 dark:text-gray-300">These Terms and Conditions are governed by and interpreted in accordance with the laws of the state of [Your State], without regard to its conflict of law principles.</p>
      </div>

      {/* 10. Changes to Terms and Conditions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">10. Changes to Terms and Conditions</h2>
        <p className="text-gray-700 dark:text-gray-300">We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after any changes indicates your acceptance of the revised terms.</p>
      </div>

      {/* 11. Contact Us */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">11. Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">If you have any questions about these Terms and Conditions, you can contact us at:</p>
        <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:logankarate@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-yellow-500">logankarate@gmail.com</a></p>
        <p className="text-gray-700 dark:text-gray-300">Address: 917 W 600 N STE 109, Logan, UT 84321</p>
        <p className="text-gray-700 dark:text-gray-300">Phone: (435) 278-9272</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
