import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Authors - Sapiential Publishing House",
  description: "Submit your Christian manuscript for publishing. Review submission guidelines, timeline, FAQs, and learn how we help authors bring their faith-based books to life.",
};

export default function AuthorsPage() {
  const faqs = [
    {
      question: "How much does it cost to publish with SPH?",
      answer: "Every manuscript is different, so we provide customized quotes based on your specific needs. Contact us with your project details for a free consultation and estimate.",
    },
    {
      question: "Do I retain the rights to my book?",
      answer: "Yes. You retain full ownership and copyright of your work. We provide publishing services; we don't take ownership of your intellectual property.",
    },
    {
      question: "How long does the publishing process take?",
      answer: "Timeline varies based on services needed. A complete publishing package typically takes 8 to 12 weeks from final manuscript to published book. Individual services have shorter turnaround times.",
    },
    {
      question: "Do you only publish Christian books?",
      answer: "We specialize in faith-based content including Christian living, spiritual growth, trauma healing, ministry development, and testimony. All manuscripts should align with biblical values.",
    },
    {
      question: "Can you help me if my manuscript isn't finished yet?",
      answer: "Absolutely. Our manuscript evaluation and developmental editing services can help you shape and strengthen your work in progress. We also offer coaching for authors who need guidance completing their first draft.",
    },
  ];

  const requirements = [
    "Completed manuscript (minimum 20,000 words) or detailed book proposal",
    "Synopsis (1 to 2 pages summarizing your book's content and purpose)",
    "Author bio (150 to 300 words about yourself and your qualifications)",
    "Target audience description (who is this book for?)",
    "Comparable titles (2 to 3 books similar to yours currently in the market)",
  ];

  const guidelines = [
    { label: "File format", value: "Microsoft Word (.doc or .docx)" },
    { label: "Font", value: "Times New Roman, 12pt" },
    { label: "Spacing", value: "Double-spaced" },
    { label: "Margins", value: "1 inch on all sides" },
    { label: "Minimum word count", value: "20,000 words" },
    { label: "Other", value: "Include page numbers and chapter headings" },
  ];

  const process = [
    {
      step: 1,
      title: "Submission Review",
      timeline: "1 to 2 weeks",
      description: "We review your submission and respond with initial feedback and fit assessment.",
    },
    {
      step: 2,
      title: "Consultation Call",
      timeline: "30 minutes",
      description: "If your manuscript aligns with our catalog, we schedule a call to discuss your vision, goals, and the best path forward.",
    },
    {
      step: 3,
      title: "Customized Proposal",
      timeline: "Within 3 days",
      description: "We provide a tailored service recommendation and quote based on your manuscript's needs.",
    },
    {
      step: 4,
      title: "Production",
      timeline: "Varies by service",
      description: "Once you approve the proposal, we begin the editing, design, and publishing process with regular updates along the way.",
    },
    {
      step: 5,
      title: "Launch",
      timeline: "Launch day",
      description: "Your book goes live on Amazon and other platforms, and we provide launch support to help you reach your first readers.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <h1 className="mb-6">For Authors</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Join our community of Christian authors and bring your God-given message to readers worldwide.
          </p>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Submission Guidelines</h2>

            {/* What We're Looking For */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-8">
              <h3 className="text-2xl mb-6">Submission Requirements</h3>
              <p className="text-gray-700 mb-6">To submit your manuscript for consideration, please provide:</p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manuscript Guidelines */}
            <div className="bg-white border rounded-lg p-8 mb-8">
              <h3 className="text-2xl mb-6">Manuscript Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start border-b pb-3">
                    <div className="font-semibold text-charcoal mr-3 min-w-[140px]">{guideline.label}:</div>
                    <div className="text-gray-700">{guideline.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Submit */}
            <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-8 mb-8">
              <h3 className="text-2xl mb-6">How to Submit</h3>
              <div className="bg-white rounded p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Email your submission to:</strong>
                </p>
                <a href="mailto:info@sapientialpublishing.com" className="text-2xl font-bold text-primary hover:text-primary-600">
                  info@sapientialpublishing.com
                </a>
                <p className="text-gray-600 mt-4">
                  Please include "Manuscript Submission" in the subject line, along with your book title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Process */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Timeline & Process</h2>
            <div className="space-y-6">
              {process.map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <div className="text-primary font-semibold">{item.timeline}</div>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-charcoal">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container text-center">
          <h2 className="mb-6 text-white">Ready to Submit Your Manuscript?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-50">
            Have questions before submitting? We're here to help. Reach out and let's start the conversation about your book.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:info@sapientialpublishing.com"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
            >
              Submit Your Manuscript
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
