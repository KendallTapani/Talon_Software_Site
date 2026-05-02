import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products in development | Talon Software",
  description:
    "Office Assistant and other tools Talon Software is building—an autonomous desktop assistant with a tools-first, integrations-first design.",
};

export default function ProductsComingSoonPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Products in development
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are working on additional products every day. Check back periodically, or reach
                out if you have something in mind you would like to see built.
              </p>
            </div>

            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/50">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Office Assistant
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong className="text-slate-800">Office Assistant</strong> is a fully autonomous
                office assistant you download and run on your own computer. You interact with it in
                plain language—text it to carry out work on your behalf across the apps and files you
                already use.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The product is <strong className="text-slate-800">tools and integrations first</strong>
                : the design prioritizes a fast path for anyone to build or plug in a new capability
                for their assistant, so custom workflows and one-off integrations do not get stuck
                behind a vendor roadmap.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Use cases include checking email, looking up information, reading or updating files,
                consolidating data from different places, and similar office work—as the toolset
                grows, the assistant can take on more of the repetitive glue between your systems.
              </p>
            </article>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
