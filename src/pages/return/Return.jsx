import React from 'react';

const ReturnPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Return Policy
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              5-Day Return Policy
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="text-base text-gray-500">
              At E-Shop, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return your item within 5 days of delivery for a full refund or exchange.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Conditions for Returns</h2>
          <ul className="list-disc list-inside text-base text-gray-500">
            <li>Items must be unused and in the same condition that you received them.</li>
            <li>Items must be in their original packaging.</li>
            <li>Proof of purchase is required.</li>
            <li>Return shipping costs are the responsibility of the customer.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Initiate a Return</h2>
          <p className="text-base text-gray-500">
            To initiate a return, please contact our customer support team at zohaibimtiaz2007@gmail.com or call us at +92 3706419327. Provide your order number and reason for the return. Our team will guide you through the return process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
