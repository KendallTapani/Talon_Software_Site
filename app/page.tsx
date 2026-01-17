import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 flex-grow relative z-10">
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
              </div>
              <h1 className="text-7xl md:text-8xl font-extrabold text-blue-900 mb-6 leading-tight">
                Talon Software
              </h1>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-4 mb-16">
                <a
                  href="https://github.com/talonsoftware-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-6 h-6 mr-3 relative z-10 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold relative z-10 group-hover:text-white transition-colors">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/talonsoftware/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12">
                Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Service 1: Business Software Consulting */}
                <Link href="/contact?service=consulting" className="block">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-slate-700 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        Business Software Consulting & Integrations
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Expert guidance on software strategy and seamless integrations. We help connect your systems, streamline workflows, and optimize your business processes for maximum efficiency.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 2: Custom Website Features */}
                <Link href="/contact?service=website" className="block">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        Custom Website Features
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Enhance your website with custom functionality and features. We develop tailored solutions that integrate seamlessly with your existing platform and improve user experience.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 3: SaaS Applications */}
                <Link href="/contact?service=saas" className="block">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        Developing SaaS Applications
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        Build scalable, cloud-based software solutions tailored to your business needs. From concept to deployment, we create robust SaaS platforms that grow with your company.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* About Section */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-slate-200/50">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  About
                </h2>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Talon Software was founded in Vancouver Washington by <span className="font-semibold text-slate-900">Kendall Tapani</span>, delivering professional software solutions to businesses across the United States.
                  </p>
                  <p>
                    We currently operate multiple SaaS platforms and specialize in custom software integrations 
                    and website buildouts for a variety of businesses nationwide. We provide all the technical 
                    expertise and solutions your business needs to thrive in the digital landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Let&apos;s Build Something Useful
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Get in touch and let&apos;s discuss your next project.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-white text-slate-800 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
