import React from 'react';

const FAQPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        {/* FAQ Section */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                How do I place an order?
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="text-base text-gray-500">
                To place an order, simply browse our catalog, select the items you want, add them to your cart, and proceed to checkout.
              </p>
            </div>
          </div>
          
          {/* Question 2 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                How can I track my order?
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="text-base text-gray-500">
                Once your order is processed, you will receive a tracking number via email. You can use this number to track your order on our website.
              </p>
            </div>
          </div>
          
          {/* Question 3 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="text-base text-gray-500">
                We accept easyPaisa, JazzCash, BankTransit and more. You can select your preferred payment method during checkout.
              </p>
            </div>
          </div>
          
          {/* Question 4 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                What is your return policy?
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="text-base text-gray-500">
                We offer a 5-day return policy. If you are not satisfied with your purchase, you can return it for a full refund or exchange.
              </p>
            </div>
          </div>
          
          {/* Question 5 */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                How do I contact customer support?
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <p className="text-base text-gray-500">
                You can reach our customer support team via email at zohaibimtiaz2007@gmail.com or by phone at +92 3706419327.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
