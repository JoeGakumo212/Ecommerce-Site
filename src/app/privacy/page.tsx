import React from 'react';

const sections = [
  {
    title: 'What are cookies?',
    content: [
      `Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.`,
    ],
  },
  {
    title: 'Why do we use cookies?',
    content: [
      `We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our websites to operate, and we refer to these as "essential" or "strictly necessary" cookies.`,
      `Other cookies enable us to track and target the interests of our users to enhance the experience on our websites.`,
    ],
  },
  {
    title: 'Types of cookies we use:',
    list: [
      {
        label: 'Essential cookies:',
        description: 'Necessary for the website to function properly.',
      },
      {
        label: 'Performance cookies:',
        description: 'Help us understand how visitors interact with our site.',
      },
      {
        label: 'Functionality cookies:',
        description: 'Enhance functionality and personalization.',
      },
      {
        label: 'Targeting cookies:',
        description: 'Used to deliver content relevant to your interests.',
      },
    ],
  },
  {
    title: 'How can you control cookies?',
    content: [
      `You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.`,
      `If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.`,
    ],
  },
  {
    title: 'Where can I get more information?',
    content: [
      `If you have any questions about our use of cookies or other technologies, please email us at support@shopking.com.`,
    ],
  },
];

const CookiesPolicy = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-4 md:px-10">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Cookies Policy
        </h1>

        <p className="mb-6">
          This Cookies Policy explains how ShopKing (“we”, “our”, or “us”) uses
          cookies and similar technologies to recognize you when you visit our
          websites.
        </p>

        {/* Render Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>

            {/* Render paragraphs */}
            {section.content &&
              section.content.map((para, i) => (
                <p key={i} className="mb-4">
                  {para}
                </p>
              ))}

            {/* Render list if it exists */}
            {section.list && (
              <ul className="list-disc list-inside space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>
                    <strong>{item.label}</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiesPolicy;
