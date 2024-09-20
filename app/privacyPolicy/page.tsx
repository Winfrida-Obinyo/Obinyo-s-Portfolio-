import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-5xl font-semibold mb-10 text-green-700 text-center"> {/* Changed to font-semibold */}
        Privacy Policy
      </h1>

      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Welcome to my personal portfolio! I respect your privacy and am committed to protecting any personal information you share with me when you explore my work or subscribe to my newsletter.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        1. Information I Collect
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        The only information I collect includes:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Email address: If you subscribe to my newsletter.</li>
        <li>Basic usage data: General stats on how you use my website, such as pages viewed and time spent here.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        2. How I Use Your Information
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        The information collected is only used for:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Sending you updates about my latest projects and content via my newsletter.</li>
        <li>Improving the user experience of this portfolio site.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        3. Sharing Your Information
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Rest assured, I do not sell or share your personal information with anyone. The only situations where your data might be shared include:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Using trusted service providers to manage my email newsletter.</li>
        <li>If legally required to do so, such as by law or court order.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        4. Data Security
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        While I use reasonable measures to protect your data, no system is foolproof. Always take care when sharing personal information online.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        5. Your Rights
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        You can request to access, update, or delete your personal information anytime by reaching out to me at <span className="font-semibold">[obinyowinfridaa@gmail.com]</span>.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        6. Cookies
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        I use basic cookies to understand how visitors interact with my portfolio. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        7. Changes to this Policy
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        I may occasionally update this Privacy Policy. Any changes will be posted here, so check back if you're interested.
      </p>

      <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-600"> {/* Changed to font-semibold */}
        8. Contact Me
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        If you have any questions or concerns about how your information is handled, feel free to reach out to me at <span className="font-semibold">[obinyowinfridaa@gmail.com]</span>.
      </p>

      <p className="text-center text-gray-500 mt-12">
        Last updated: [Date]
      </p>
    </div>
  );
}
