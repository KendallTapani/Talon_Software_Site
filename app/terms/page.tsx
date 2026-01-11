import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Terms of Service
              </h1>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Talon Software is not a business entity. It is a personal brand
                  managed by Kendall Tapani. By accessing and using this website,
                  you agree to be bound by these Terms of Service.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Use of Website
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This website is provided for informational purposes only. You
                  may use this website for lawful purposes only and in a manner
                  that does not infringe upon the rights of others or restrict
                  or inhibit anyone else&apos;s use and enjoyment of the website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All content on this website, including but not limited to text,
                  graphics, logos, and software, is the property of Kendall
                  Tapani or its content suppliers and is protected by copyright
                  and other intellectual property laws.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Disclaimer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The information on this website is provided on an &quot;as is&quot; basis.
                  We make no representations or warranties of any kind, express or
                  implied, about the completeness, accuracy, reliability, or
                  suitability of the information contained on this website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In no event shall Kendall Tapani or Talon Software be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages arising out of your use of this website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We reserve the right to modify these Terms of Service at any
                  time. Your continued use of the website after any changes
                  constitutes your acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Contact
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please
                  contact us through the contact form on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
