import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publishing Services - Sapiential Publishing House",
  description: "Comprehensive Christian book publishing services including editing, cover design, formatting, Amazon KDP setup, and complete publishing packages.",
};

export default function ServicesPage() {
  const flagshipService = {
    title: "Course Development & Creation",
    description: "Transform your book into a revenue-generating course with our flagship service. We create comprehensive learning experiences complete with curriculum design, professional workbooks, study guides, video content support, and all the resources your students need. From concept to launch, we handle everything so you can focus on teaching and transforming lives.",
    turnaround: "Coming Soon",
    isFlagship: true,
    link: "/course-development",
  };

  const services = [
    {
      title: "Manuscript Evaluation",
      description: "Receive a comprehensive assessment of your manuscript's strengths, areas for improvement, and market potential. Our evaluation covers structure, pacing, theological accuracy, target audience alignment, and publishing readiness. You'll receive a detailed written report with actionable recommendations to strengthen your work before moving forward.",
      turnaround: "2 to 3 weeks",
    },
    {
      title: "Developmental Editing",
      description: "Transform your manuscript from good to great with our developmental editing service. We work with you on the big picture elements: story structure, chapter organization, argument flow, theological depth, and reader engagement. This collaborative process ensures your message comes through with clarity and power.",
      turnaround: "4 to 6 weeks",
    },
    {
      title: "Copyediting & Proofreading",
      description: "Polish your manuscript to professional standards with our copyediting and proofreading service. We correct grammar, punctuation, spelling, and syntax while ensuring consistency in style, tone, and formatting. Your readers will experience a seamless, error-free read that reflects the quality of your message.",
      turnaround: "2 to 4 weeks",
    },
    {
      title: "Professional Cover Design",
      description: "Your book cover is your first impression. Our design team creates eye-catching, genre-appropriate covers that capture your book's essence and appeal to your target readers. Each design package includes multiple concepts, revisions, and final files optimized for both print and digital formats.",
      turnaround: "2 to 3 weeks",
    },
    {
      title: "Interior Layout & Formatting",
      description: "Give your readers a beautiful reading experience with professional interior formatting. We handle typography, chapter headers, page layout, margins, and all the details that make a book feel polished and professional. Delivered in print-ready PDF and eBook formats (ePub and Kindle).",
      turnaround: "1 to 2 weeks",
    },
    {
      title: "Amazon KDP Publishing Setup",
      description: "Navigate the publishing process with confidence. We handle your complete Amazon KDP setup including account configuration, book details optimization, category and keyword selection for maximum discoverability, pricing strategy, and successful file uploads. Launch your book the right way from day one.",
      turnaround: "3 to 5 business days",
    },
    {
      title: "ISBN & Copyright Registration",
      description: "Protect your work and establish your professional publishing presence. We assist with ISBN acquisition, copyright registration guidance, and Library of Congress registration. Your book will have all the proper identifiers needed for distribution and legal protection.",
      turnaround: "1 to 2 weeks",
    },
    {
      title: "Complete Publishing Package",
      description: "Our all-inclusive package takes your manuscript from final draft to published book. Includes developmental editing, copyediting, proofreading, cover design, interior formatting, ISBN registration, Amazon KDP setup, and launch consultation. The comprehensive solution for authors who want expert guidance every step of the way.",
      turnaround: "8 to 12 weeks",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <h1 className="mb-6">Publishing Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Comprehensive publishing services to bring your Christian book from manuscript to marketplace.
          </p>
        </div>
      </section>

      {/* Flagship Service - Featured */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-10 shadow-2xl border-4 border-primary-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-primary px-6 py-2 rounded-bl-xl font-bold text-sm">
                FLAGSHIP SERVICE
              </div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl">🎓</div>
                  <div>
                    <h3 className="text-4xl font-bold mb-3 text-white">{flagshipService.title}</h3>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {flagshipService.turnaround}
                    </div>
                  </div>
                </div>
                <p className="text-xl text-primary-50 mb-8 leading-relaxed">
                  {flagshipService.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={flagshipService.link}
                    className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors duration-200 inline-block text-lg shadow-xl"
                  >
                    Learn More & Join Waitlist
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg transition-colors duration-200 inline-block text-lg"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Services Grid */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-center mb-12">Publishing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>

                <div className="mb-6 pb-6 border-b">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Turnaround:</strong> {service.turnaround}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-charcoal">Contact for Quote</div>
                    <div className="text-sm text-gray-600">Custom pricing available</div>
                  </div>
                  <a href="/contact" className="btn-primary whitespace-nowrap">
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your publishing needs and receive a custom quote for your project.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
