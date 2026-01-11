import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Privacy Policy
              </h1>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Talon Software is not a business entity. It is a personal brand
                  managed by Kendall Tapani. This privacy policy describes how
                  information is collected and used when you interact with this
                  website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When you use the contact form on this website, we collect the
                  following information:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your message content</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The information you provide through the contact form is used
                  solely to respond to your inquiry. We do not share, sell, or
                  distribute your personal information to third parties.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Data Storage
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Contact form submissions are processed and may be stored
                  temporarily for the purpose of responding to your inquiry. We
                  take reasonable measures to protect your information, but
                  please be aware that no method of transmission over the
                  internet is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  Contact
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy, please
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
