import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pb-4 pt-[140px] md:pt-[190px] bg-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-amber-100">
          {/* Updated Heading Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-amber-800">
              Privacy Policy
            </h1>
            <p className="text-amber-700 font-medium text-lg border-t border-amber-200 pt-4 mt-4">
              Effective Date: <span className="font-semibold">[5 February 2025]</span>
            </p>
          </div>

          <div className="space-y-8 text-amber-900">
            <section>
              <p className="text-lg leading-7 mb-6">
                BeWell is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website. This policy applies to all visitors of the Site, including users who access the Site from the UK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Information We Collect
              </h2>
              <p className="mb-4 leading-7">
                We may collect and process the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>
                  <strong className="text-amber-800">Personal Information:</strong> 
                  When you subscribe to our newsletter, or contact us, you may provide us with personal information, including but not limited to your name, email address, and phone number.
                </li>
                <li>
                  <strong className="text-amber-800">Usage Data:</strong> 
                  We may collect information on how you access and use the Site, such as IP address, browser type, operating system, and the pages you visit.
                </li>
                <li>
                  <strong className="text-amber-800">Cookies and Tracking Technologies:</strong> 
                  We use cookies and other tracking technologies to monitor and enhance user experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>To provide and maintain our Site</li>
                <li>To notify you about changes to our Site</li>
                <li>To allow you to participate in interactive features when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To improve the Site and gather analysis</li>
                <li>To monitor usage and detect issues</li>
                <li>To send you newsletters, marketing materials, and information that might interest you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Legal Basis for Processing Your Information
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Consent:</strong> We process your data based on your consent.</li>
                <li><strong>Contractual Necessity:</strong> For the performance of a contract with you.</li>
                <li><strong>Legal Obligation:</strong> We may process your data to comply with legal requirements.</li>
                <li><strong>Legitimate Interests:</strong> We process your data based on our legitimate interests, provided they do not override your rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Disclosure of Your Information
              </h2>
              <p className="mb-4 leading-7">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>With Service Providers:</strong> Third parties that help us operate the Site.</li>
                <li><strong>For Business Transfers:</strong> If we are involved in a merger or acquisition, your personal data may be transferred.</li>
                <li><strong>Legal Requirements:</strong> If required by law or government authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Data Security
              </h2>
              <p className="mb-4 leading-7">
                We implement security measures to protect your personal data, but no transmission over the Internet is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Your Rights
              </h2>
              <p className="mb-4 leading-7">
                You have the following rights under UK GDPR:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li>The right to access your personal data</li>
                <li>The right to rectify incorrect data</li>
                <li>The right to erase your data ("right to be forgotten")</li>
                <li>The right to restrict processing of your data</li>
                <li>The right to data portability</li>
                <li>The right to object to data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Links to Other Websites
              </h2>
              <p className="mb-4 leading-7">
                Our Site may contain links to other websites that are not operated by us. We are not responsible for the content or privacy policies of third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Changes to This Privacy Policy
              </h2>
              <p className="mb-4 leading-7">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page. Changes will take effect when they are posted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 border-l-4 border-amber-600 pl-3">
                Contact Us
              </h2>
              <div className="bg-amber-50 rounded-lg p-6 space-y-2">
                <p className="text-amber-800">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <p className="text-amber-700">Email: - info@bewelllocal.co.uk</p>
                <p className="text-amber-700">Phone: - 01245408003</p>
                <p className="text-amber-700">Address: - 7, 9 Broomfield Rd, Chelmsford CM1 1SY</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
