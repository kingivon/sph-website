import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authorsData, booksData } from "@/lib/booksData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return authorsData.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = authorsData.find((a) => a.slug === slug);

  if (!author) {
    return {
      title: "Author Not Found - Sapiential Publishing House",
      description: "The requested author could not be found.",
    };
  }

  return {
    title: `${author.name} - Sapiential Publishing House`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = authorsData.find((a) => a.slug === slug);

  if (!author) {
    notFound();
  }

  const authorBooks = booksData.filter((book) => book.authorSlug === author.slug);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <nav className="text-sm mb-6">
            <Link href="/books" className="text-primary hover:text-primary-600">
              ← Back to All Books
            </Link>
          </nav>
        </div>
      </section>

      {/* Author Profile */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              {/* Author Image */}
              <div className="flex-shrink-0">
                {author.photo ? (
                  <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={author.photo}
                      alt={author.name}
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-8xl">👤</span>
                  </div>
                )}
              </div>

              {/* Author Bio */}
              <div className="flex-1">
                <h1 className="mb-4">{author.name}</h1>
                <p className="text-xl text-primary font-semibold mb-6">{author.title}</p>

                <div className="prose prose-lg max-w-none mb-8">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {author.fullBio}
                  </div>
                </div>

                {/* Website & Social Links */}
                {(author.website || author.socials) && (
                  <div className="mb-8">
                    {author.website && (
                      <a
                        href={author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold mb-4"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Visit Website
                      </a>
                    )}

                    {author.socials && (
                      <div className="flex gap-4 mt-4">
                        {author.socials.facebook && (
                          <a
                            href={author.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                            aria-label="Facebook"
                          >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                        )}
                        {author.socials.instagram && (
                          <a
                            href={author.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                            aria-label="Instagram"
                          >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        )}
                        {author.socials.youtube && (
                          <a
                            href={author.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors"
                            aria-label="YouTube"
                          >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-6 pt-6 border-t">
                  <div>
                    <div className="text-sm text-gray-600">Published Books</div>
                    <div className="text-3xl font-bold text-primary">{author.booksCount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Latest Release</div>
                    <div className="text-lg font-semibold text-charcoal">
                      {authorBooks[0]?.year}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author's Books */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="mb-12">Books by {author.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorBooks.map((book) => (
              <div
                key={book.id}
                className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white flex flex-col"
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-96 flex items-center justify-center p-8 relative">
                  {book.status && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      {book.status}
                    </div>
                  )}
                  {book.coverImage ? (
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      width={250}
                      height={375}
                      className="object-contain h-full w-auto"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-6xl mb-4">📖</div>
                      <div className="text-sm text-primary-700 font-semibold">
                        {book.series || book.category}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {book.series && (
                    <div className="text-xs text-primary font-semibold mb-2">{book.series}</div>
                  )}
                  <Link href={`/books/${book.slug}`}>
                    <h3 className="text-xl font-bold mb-1 hover:text-primary transition-colors cursor-pointer">
                      {book.title}
                    </h3>
                  </Link>
                  {book.subtitle && (
                    <p className="text-primary text-sm font-semibold mb-2">{book.subtitle}</p>
                  )}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span>{book.year}</span>
                    <span>•</span>
                    <span>{book.pages} pages</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>

                  {/* Pricing */}
                  <div className="border-t pt-4 mb-4 mt-auto">
                    <div className="space-y-1 text-sm">
                      {book.kindle && (
                        <div>
                          <span className="text-gray-600">Kindle:</span>{" "}
                          <span className="font-semibold">{book.kindle}</span>
                        </div>
                      )}
                      {book.paperback && (
                        <div>
                          <span className="text-gray-600">Paperback:</span>{" "}
                          <span className="font-semibold">{book.paperback}</span>
                        </div>
                      )}
                      {book.hardcover && (
                        <div>
                          <span className="text-gray-600">Hardcover:</span>{" "}
                          <span className="font-semibold">{book.hardcover}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {book.releaseDate && (
                    <div className="bg-primary-50 p-3 rounded mb-4">
                      <div className="text-sm font-semibold text-primary">
                        Release Date: {book.releaseDate}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Link href={`/books/${book.slug}`} className="flex-1 btn-secondary text-center">
                      View Details
                    </Link>
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center"
                    >
                      {book.status === "Pre-Order" ? "Pre-Order" : "Buy"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-12 text-center">
            <h2 className="mb-6 text-white">Connect with {author.name.split(" ")[author.name.split(" ").length - 1]}</h2>
            <p className="text-xl mb-8 text-primary-50">
              Explore all books and stay updated on new releases
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/books"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                View All Books
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
