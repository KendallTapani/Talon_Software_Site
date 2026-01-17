import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

interface ContactPageProps {
  searchParams: Promise<{ service?: string }> | { service?: string };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const service = resolvedSearchParams?.service || null;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Free advice, freely given
              </h1>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Reach out to Talon Software
              </h2>
              <ContactForm selectedService={service} />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
