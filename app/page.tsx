import Link from "next/link";
import { booksData } from "@/lib/booksData";

export default function Home() {
  // Featured books - Latest releases first (already ordered in booksData)
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="mb-6">
              Bringing Your Faith-Based Stories to Life
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Professional Christian book publishing services that help authors share their God-given message with the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/books" className="btn-secondary">
                View Our Books
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="flex justify-between items-center mb-12">
            <h2>Latest Releases</h2>
            <Link href="/books" className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2">
              View All Books
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white group flex flex-col"
              >
                <Link href={`/books/${book.slug}`}>
                  <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-64 flex items-center justify-center p-6 relative cursor-pointer">
                    {book.status && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        {book.status}
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-5xl mb-3">📖</div>
                      <div className="text-xs text-primary-700 font-semibold">{book.category}</div>
                    </div>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/books/${book.slug}`}>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {book.title}
                    </h3>
                  </Link>
                  <Link href={`/authors/${book.authorSlug}`}>
                    <p className="text-gray-600 text-sm mb-3 hover:text-primary transition-colors cursor-pointer">
                      {book.author}
                    </p>
                  </Link>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2 flex-1">
                    {book.description.substring(0, 120)}...
                  </p>
                  {book.releaseDate && (
                    <div className="text-xs text-primary font-semibold mb-3">
                      Releasing {book.releaseDate}
                    </div>
                  )}
                  <div className="flex gap-2 mt-auto">
                    <Link href={`/books/${book.slug}`} className="flex-1 btn-secondary text-center text-sm py-2">
                      Details
                    </Link>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      {book.status === "Pre-Order" ? "Pre-Order" : "Buy Now"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-12">Our Publishing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Professional Editing", desc: "Developmental editing, copyediting, and proofreading to perfect your manuscript" },
              { title: "Book Design", desc: "Eye-catching cover design and professional interior formatting" },
              { title: "Amazon Publishing", desc: "Complete KDP setup, ISBN registration, and distribution" },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary hover:text-primary-600 font-semibold">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-center mb-12">What Our Authors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "I had a message burning in my heart for years but didn't know how to get it into the world. Sapiential Publishing House guided me through every step with patience and professionalism. They treated my manuscript like it mattered because to them, it did. My book is now reaching people I never could have reached on my own."
              </p>
              <div className="font-semibold text-charcoal">Pastor Michael Thompson</div>
              <div className="text-gray-600 text-sm">Author of Grace for the Broken Road</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "As a first-time author, I was overwhelmed by the publishing process. SPH made it simple. Their developmental editing transformed my rough draft into something I'm truly proud of, and the cover design exceeded my expectations. I felt supported and informed every step of the way."
              </p>
              <div className="font-semibold text-charcoal">Denise Carter</div>
              <div className="text-gray-600 text-sm">Author of Finding My Voice Again</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "What sets Sapiential apart is that they understand ministry. They didn't just edit my book—they helped me sharpen my message for maximum kingdom impact. The team genuinely cares about the authors they work with and the readers who will be touched by these books."
              </p>
              <div className="font-semibold text-charcoal">Rev. Angela Brooks</div>
              <div className="text-gray-600 text-sm">Author of Leading from the Wilderness</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="mb-6 text-white">Ready to Publish Your Book?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you share your faith-based message with the world through professional publishing services.
          </p>
          <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
