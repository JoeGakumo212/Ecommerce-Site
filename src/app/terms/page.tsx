import React from 'react';

const termsData = [
  {
    title: 'Acceptance of the Terms of Use',
    content: [
      'By accessing and/or using the ShopKing website, you accept and agree to be bound by these Terms and Conditions of Use.',
    ],
  },
  {
    title: 'Modifications to Terms',
    content: [
      'ShopKing reserves the right to update these Terms at any time without notice. Continued use of the website following any changes constitutes your acceptance of the new Terms.',
    ],
  },
  {
    title: 'User Responsibilities',
    content: [
      'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.',
      'You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of, restrict or inhibit anyone else’s use and enjoyment of the site.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'ShopKing is not liable for any damages of any kind related to your use of this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms and Conditions are governed by and construed in accordance with the laws of the country in which ShopKing operates.',
    ],
  },
];

const TermsConditions = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-4 md:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Terms & Conditions
        </h1>

        {/* Map each section dynamically */}
        {termsData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>
            {section.content.map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
