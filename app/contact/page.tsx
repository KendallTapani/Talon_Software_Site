import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h1>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
