import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Sapiential Publishing House",
  description: "Free guides, templates, and insights for Christian authors. Publishing tips, manuscript formatting templates, and author resources to help you on your publishing journey.",
};

export default function ResourcesPage() {
  const downloads = [
    {
      title: "The First-Time Author's Publishing Checklist",
      description: "A comprehensive PDF guide covering everything you need before, during, and after publishing your first book. Includes manuscript preparation, editing stages, cover design tips, and launch strategies.",
      type: "PDF Guide",
      requiresForm: true,
    },
    {
      title: "Book Launch Timeline Template",
      description: "A 90-day countdown planner to help you prepare for a successful book launch. Includes weekly tasks, marketing milestones, and pre-launch promotion ideas.",
      type: "PDF Template",
      requiresForm: false,
    },
    {
      title: "Self-Editing Checklist for Authors",
      description: "Polish your manuscript before sending it to a professional editor. This checklist covers common errors, pacing issues, dialogue tips, and structural elements to review.",
      type: "PDF Checklist",
      requiresForm: false,
    },
  ];

  const blogPosts = [
    {
      title: "5 Signs Your Book Idea Is Ready to Become a Manuscript",
      excerpt: "Not every idea is ready to be a book. Learn the five key indicators that your concept has the substance, clarity, and impact needed to transform into a full manuscript.",
      category: "Writing Tips",
    },
    {
      title: "Traditional vs. Self-Publishing: Which Path Is Right for Your Book?",
      excerpt: "Understanding the pros and cons of each publishing model to make an informed decision that aligns with your goals, budget, and vision for your book.",
      category: "Publishing 101",
    },
    {
      title: "How to Write a Book While Working Full-Time in Ministry",
      excerpt: "Practical strategies for busy ministry leaders who want to write a book without sacrificing their calling or burning out in the process.",
      category: "Author Tips",
    },
    {
      title: "The Anatomy of a Book Cover That Sells",
      excerpt: "Your cover is your first impression. Discover what makes a book cover effective, from design principles to genre expectations.",
      category: "Design",
    },
    {
      title: "Why Every Pastor Should Write a Book (And How to Start)",
      excerpt: "Your sermons reach your congregation, but a book can reach the world. Learn why writing a book is one of the most strategic ministry decisions you can make.",
      category: "Ministry",
    },
    {
      title: "Common Mistakes First-Time Authors Make (And How to Avoid Them)",
      excerpt: "Learn from the mistakes of others. We break down the most common pitfalls new authors face and how to navigate around them.",
      category: "Author Tips",
    },
    {
      title: "How to Turn Your Testimony Into a Transformative Book",
      excerpt: "Your story has power, but turning personal experience into a book that transforms readers requires intentionality. Here's how to do it well.",
      category: "Writing Tips",
    },
    {
      title: "Understanding Amazon Categories and Keywords for Christian Books",
      excerpt: "Maximize your book's discoverability on Amazon with the right categories and keywords. A strategic guide for Christian authors.",
      category: "Marketing",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <h1 className="mb-6">Resources</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Free guides, templates, and insights to help you on your publishing journey.
          </p>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Free Downloads for Authors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical resources to help you navigate your publishing journey with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 hover:border-primary rounded-lg p-8 hover:shadow-xl transition-all flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="inline-block text-xs text-white bg-primary px-3 py-1 rounded-full font-semibold mb-4">{download.type}</div>
                  <h3 className="text-xl mb-3 font-bold">{download.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{download.description}</p>
                </div>
                <Link
                  href="/contact?resource=download"
                  className="btn-primary w-full text-center block mt-auto"
                >
                  Request This Resource
                </Link>
                {download.requiresForm && (
                  <p className="text-xs text-gray-500 text-center mt-3">
                    We'll email you the download link
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-primary-50 border-l-4 border-primary p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-700">
              <strong className="text-primary">Note:</strong> To request any of these free resources, please contact us with the resource name. We'll send you the download link via email.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="mb-12">Publishing Insights & Author Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                <div className="p-6">
                  <div className="inline-block bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                  <button className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-12 text-center text-white">
            <h2 className="mb-4 text-white">Stay Connected</h2>
            <p className="text-xl mb-8 text-primary-50">
              Subscribe to our newsletter for publishing tips, industry insights, and exclusive resources delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-primary-100 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="section-container text-center">
          <h2 className="mb-6">Ready to Start Your Publishing Journey?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you have a completed manuscript or you're just getting started, we're here to help you bring your book to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/authors" className="btn-primary">
              Submission Guidelines
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
