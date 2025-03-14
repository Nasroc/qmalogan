export default function CookiesPolicy() {
    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 custom-bg custom-dark transition-colors duration-300"
            style={{ minHeight: 'calc(100vh - 5rem)' }}
        >
            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight transition-colors">
                    Cookies Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Last Updated: March 14, 2025
                </p>
            </div>

            <div className="w-full max-w-4xl space-y-8">
                {/* 1. What Are Cookies? */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        1. What Are Cookies?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow websites to remember information about your visit, such as your preferences and login status.
                    </p>
                </div>

                {/* 2. How We Use Cookies */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        2. How We Use Cookies
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Quantum Martial Arts uses cookies to enhance your experience and improve the functionality of our website. Specifically, we use cookies to:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>Remember your preferences and settings.</li>
                        <li>Keep you logged in to your account.</li>
                        <li>Analyze website traffic and usage patterns.</li>
                        <li>Deliver targeted advertisements and measure their effectiveness.</li>
                        <li>Ensure website security and prevent fraudulent activity.</li>
                    </ul>
                </div>

                {/* 3. Types of Cookies We Use */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        3. Types of Cookies We Use
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We use the following types of cookies:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as user login and security.
                        </li>
                        <li>
                            <strong>Performance Cookies:</strong> These cookies collect information about how you use the website, such as which pages you visit most often. This helps us improve site performance.
                        </li>
                        <li>
                            <strong>Functionality Cookies:</strong> These cookies allow the website to remember your preferences and provide enhanced features (e.g., language or region settings).
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> These cookies are used to deliver relevant ads based on your browsing history and preferences.
                        </li>
                        <li>
                            <strong>Third-Party Cookies:</strong> Some third-party services that we use (e.g., YouTube, social media platforms) may set their own cookies when you use our site.
                        </li>
                    </ul>
                </div>

                {/* 4. How to Manage Your Cookies */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        4. How to Manage Your Cookies
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        You can manage or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of the website.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>Google Chrome:</strong> Go to Settings &gt; Privacy and Security &gt; Cookies and Other Site Data.
                        </li>
                        <li>
                            <strong>Mozilla Firefox:</strong> Go to Options &gt; Privacy & Security &gt; Cookies and Site Data.
                        </li>
                        <li>
                            <strong>Safari:</strong> Go to Preferences &gt; Privacy &gt; Cookies and Website Data.
                        </li>
                        <li>
                            <strong>Microsoft Edge:</strong> Go to Settings &gt; Privacy, Search, and Services &gt; Cookies and Site Permissions.
                        </li>
                    </ul>
                </div>

                {/* 5. Third-Party Cookies */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        5. Third-Party Cookies
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We may allow third-party service providers to set cookies on our website for analytics, advertising, and other purposes. We have no control over these cookies and their usage is governed by the third party’s privacy policy.
                    </p>
                </div>

                {/* 6. Consent */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        6. Consent
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        By continuing to use our website, you consent to the use of cookies in accordance with this policy. If you do not agree, please disable cookies through your browser settings.
                    </p>
                </div>

                {/* 7. Changes to This Policy */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        7. Changes to This Policy
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We may update this Cookies Policy from time to time. The "Last Updated" date at the top reflects the date of the latest revision.
                    </p>
                </div>

                {/* 8. Contact Us */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        8. Contact Us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions about this Cookies Policy, you may contact us at:
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
