import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Products | Talon Software",
  description:
    "The Talon Software home for useful products and business systems—practical resources you can download, adapt, and use in real work.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-grow">
          <div className="max-w-4xl mx-auto">
            <section className="text-center mb-14 max-w-2xl mx-auto">
              <h1 className="text-5xl font-bold text-blue-900 mb-6">Products</h1>
              <p className="text-slate-600 leading-relaxed">
                This is the Talon Software home for useful products, business systems, and other
                practical resources you can adopt in your professional and personal life. We focus on productivity tools,
                that are stable and genuinely helpful.
              </p>
            </section>

            <div
              className="my-10 h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent"
              aria-hidden="true"
            />

            <article className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Talon Obsidian Setup
                </h2>
                <a
                  href="https://github.com/TalonSoftware-llc/Talon-Obsidian-Setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
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
                  View on GitHub
                </a>
              </div>
              <p className="mt-6 text-slate-600 leading-relaxed">
                A ready-to-use{" "}
                <a
                  href="https://obsidian.md/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-medium hover:underline"
                >
                  Obsidian
                </a>{" "}
                vault template built to tie together daily planning, active projects, and
                reference notes for serious personal productivity: three dashboards—
                <strong className="text-slate-800">Agenda</strong>,{" "}
                <strong className="text-slate-800">Projects</strong>, and{" "}
                <strong className="text-slate-800">Repository</strong>—powered by{" "}
                <strong className="text-slate-800">Dataview</strong> and{" "}
                <strong className="text-slate-800">Templater</strong>.
              </p>
            </article>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
