import React from 'react';

const ShippingInfoPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Shipping Information
        </h1>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Shipping Options
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <p className="text-base text-gray-500">
              We offer several shipping options to ensure your order arrives on time:
            </p>
            <ul className="list-disc list-inside mt-3 text-base text-gray-500">
              <li>Standard Shipping: 3-5 business days</li>
              <li>Expedited Shipping: 1-2 business days</li>
              <li>International Shipping: Delivery times vary by destination</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Rates</h2>
          <p className="text-base text-gray-500">
            Shipping rates are calculated based on the weight and destination of your order. Rates will be displayed during checkout before you finalize your purchase.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tracking Your Order</h2>
          <p className="text-base text-gray-500">
            Once your order is processed and shipped, you will receive a tracking number via email. You can use this number to track the status of your shipment on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
