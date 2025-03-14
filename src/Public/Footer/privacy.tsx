export default function PrivacyPolicy() {
    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 custom-bg custom-dark transition-colors duration-300"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
        >

            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight transition-colors">
                    Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Last Updated: March 14, 2025
                </p>
            </div>

            <div className="w-full max-w-4xl space-y-8">
                {/* 1. Information We Collect */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We collect both personal and non-personal information to improve our services and provide a better user experience.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Personal Information:</strong> Full Name, Email Address, Phone Number, Payment Information, Login Credentials.</li>
                        <li><strong>Non-Personal Information:</strong> IP Address, Browser Type and Version, Device Information, Website Usage Data, Location Data.</li>
                    </ul>
                </div>

                {/* 2. How We Use Your Information */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>To provide and improve our services.</li>
                        <li>To personalize user experience.</li>
                        <li>To process payments and transactions.</li>
                        <li>To respond to inquiries and provide customer support.</li>
                        <li>To monitor website performance and security.</li>
                        <li>To comply with legal requirements and enforce our terms of service.</li>
                    </ul>
                </div>

                {/* 3. How We Share Your Information */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        3. How We Share Your Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We do not sell or trade your personal information. However, we may share your information with:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li><strong>Service Providers:</strong> Third-party vendors that help us operate our website and services.</li>
                        <li><strong>Legal Obligations:</strong> If required by law or to protect our legal rights.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, sale, or acquisition.</li>
                        <li><strong>Consent:</strong> With your explicit consent.</li>
                    </ul>
                </div>

                {/* 4. Data Security */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        4. Data Security
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or destruction. These include:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>Encryption of sensitive data.</li>
                        <li>Secure data storage.</li>
                        <li>Restricted access to personal data.</li>
                        <li>Regular security audits.</li>
                    </ul>
                </div>

                {/* 5. Your Rights and Choices */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        5. Your Rights and Choices
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>Access and Correction – You may request access to your personal data and correct any inaccuracies.</li>
                        <li>Deletion – You may request that we delete your personal data, subject to legal obligations.</li>
                        <li>Opt-Out – You may opt out of receiving promotional communications.</li>
                        <li>Data Portability – You have the right to receive a copy of your personal data in a structured format.</li>
                    </ul>
                </div>

                {/* 6. Cookies and Tracking Technologies */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        6. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We use cookies and similar tracking technologies to enhance your experience. You can adjust your browser settings to disable cookies, but this may affect the functionality of our website.
                    </p>
                </div>

                {/* 7. Children's Privacy */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        7. Children's Privacy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our services are not directed toward children under 13. If we learn that we have collected information from a child under 13, we will delete it promptly.
                    </p>
                </div>

                {/* 8. Changes to This Policy */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        8. Changes to This Policy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this policy reflects the date of the latest revision.
                    </p>
                </div>

                {/* 9. Contact Us */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        9. Contact Us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions about this Privacy Policy, you may contact us at:
                    </p>
                    <ul className="list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li><p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> <a href="mailto:logankarate@gmail.com" className="text-blue-500 dark:text-blue-400 hover:text-yellow-500">logankarate@gmail.com</a></p></li>
                        <li><strong>Phone:</strong> (435) 278-9272</li>
                        <li><strong>Address:</strong> 917 W 600 N STE 109, Logan, UT 84321</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
