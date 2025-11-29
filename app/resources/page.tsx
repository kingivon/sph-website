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
      title: "5 Signs Your Manuscript Is Ready for Professional Editing",
      excerpt: "Learn the key indicators that your manuscript is ready for professional editing, from self-editing completion to beta reader feedback and knowing when to let go.",
      category: "Writing Tips",
      slug: "/blog/manuscript-ready-for-editing",
      date: "November 15, 2025",
    },
    {
      title: "Traditional vs. Self-Publishing: Which Path Is Right for You?",
      excerpt: "Compare the pros and cons of each publishing path, discover hybrid options, and learn how to decide based on your goals, timeline, and vision.",
      category: "Publishing 101",
      slug: "/blog/traditional-vs-self-publishing",
      date: "November 12, 2025",
    },
    {
      title: "How to Write a Book Description That Sells",
      excerpt: "Master the art of writing compelling book descriptions with proven techniques for hook writing, benefit-focused language, and genre expectations.",
      category: "Marketing",
      slug: "/blog/book-description-that-sells",
      date: "November 18, 2025",
    },
    {
      title: "The True Cost of Self-Publishing: A Realistic Budget Guide",
      excerpt: "Understand the real costs of self-publishing with a detailed breakdown of editing, cover design, formatting, marketing expenses, and where to save vs. invest.",
      category: "Publishing 101",
      slug: "/blog/self-publishing-budget-guide",
      date: "November 22, 2025",
    },
    {
      title: "Building Your Author Platform Before Your Book Launches",
      excerpt: "Learn how to build a strong author platform with social media, email lists, and website strategies to ensure a successful book launch.",
      category: "Author Tips",
      slug: "/blog/building-author-platform",
      date: "November 25, 2025",
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
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="inline-block bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 self-start">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="text-xs text-gray-500 mb-4">{post.date}</div>
                  <Link
                    href={post.slug}
                    className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2 mt-auto"
                  >
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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
