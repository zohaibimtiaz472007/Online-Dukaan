import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Privacy Policy
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Information We Collect
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="text-base text-gray-500">
              At E-Shop, we collect personal information such as your name, email address, shipping address, and payment information. We use this information to process your orders and improve your shopping experience.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-base text-gray-500">
            Your information is used to:
          </p>
          <ul className="list-disc list-inside mt-3 text-base text-gray-500">
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you about your orders and account.</li>
            <li>Improve our products and services.</li>
            <li>Protect against fraud and unauthorized transactions.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sharing Your Information</h2>
          <p className="text-base text-gray-500">
            We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Security of Your Information</h2>
          <p className="text-base text-gray-500">
            We take reasonable precautions and follow industry best practices to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-base text-gray-500">
            If you have any questions about our privacy policy, please contact us at zohaibimtiaz2007@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
