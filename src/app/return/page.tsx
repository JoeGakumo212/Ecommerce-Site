import React from 'react';

const ReturnExchange = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-4 md:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Return & Exchange
        </h1>

        <p className="mb-4">
          If you’re not completely satisfied with your purchase, we’re here to
          help. Online purchases made through our website are valid for return
          within 30 days from the delivery date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Return Policy:</h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            Items must be unused and in the same condition that you received
            them.
          </li>
          <li>They must also be in the original packaging.</li>
          <li>
            To complete your return, we require a receipt or proof of purchase.
          </li>
          <li>
            Once your return is received and inspected, we will notify you of
            the approval or rejection of your refund.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Non-Returnable Items:
        </h2>
        <p className="mb-4">
          Several types of goods are exempt from being returned: gift cards,
          downloadable software, and some health/personal care items.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Return to: ShopKing Retail Store
        </h2>
        <p className="mb-4">
          You can also return your product in-store by presenting your order
          confirmation and the payment method used.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Exchanges:</h2>
        <p className="mb-4">
          We only replace items if they are defective or damaged. If you need to
          exchange an item, contact us and send your item to our return address.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          We’ll provide you with a return label if your return is eligible and
          cover the return shipping costs.
        </p>
      </div>
    </div>
  );
};

export default ReturnExchange;
