import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { booksData } from "@/lib/booksData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return booksData.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = booksData.find((b) => b.slug === slug);

  if (!book) {
    return {
      title: "Book Not Found - Sapiential Publishing House",
      description: "The requested book could not be found.",
    };
  }

  const fullTitle = book.subtitle ? `${book.title}: ${book.subtitle}` : book.title;
  return {
    title: `${fullTitle} - Sapiential Publishing House`,
    description: book.description,
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = booksData.find((b) => b.slug === slug);

  if (!book) {
    notFound();
  }

  const relatedBooks = booksData
    .filter((b) => b.id !== book.id && (b.authorSlug === book.authorSlug || b.series === book.series))
    .slice(0, 3);

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

      {/* Book Details */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 aspect-[2/3] rounded-lg flex items-center justify-center p-12 shadow-xl relative">
                  {book.status && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                      {book.status}
                    </div>
                  )}
                  {book.coverImage ? (
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      width={400}
                      height={600}
                      className="object-contain h-full w-auto rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-8xl mb-6">📖</div>
                      <div className="text-sm text-primary-700 font-semibold">
                        {book.series || book.category}
                      </div>
                    </div>
                  )}
                </div>

                {/* Purchase Buttons */}
                <div className="mt-8 space-y-3">
                  {/* Kindle Button */}
                  {book.kindle && (
                    book.kindleUrl ? (
                      <a
                        href={book.kindleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center block py-4 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <div className="text-lg">
                          {book.status === "Pre-Order" ? "Pre-order Kindle" : "Buy Kindle"}
                        </div>
                        <div className="text-sm opacity-90 mt-1">{book.kindle}</div>
                      </a>
                    ) : (
                      <div className="w-full text-center block py-4 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed">
                        <div className="text-lg font-semibold">Kindle</div>
                        <div className="text-sm mt-1">{book.kindle}</div>
                      </div>
                    )
                  )}

                  {/* Paperback Button */}
                  {book.paperback && (
                    book.paperbackUrl ? (
                      <a
                        href={book.paperbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white w-full text-center block py-4 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <div className="text-lg">Buy Paperback</div>
                        <div className="text-sm opacity-90 mt-1">{book.paperback}</div>
                      </a>
                    ) : (
                      <div className="w-full text-center block py-4 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed">
                        <div className="text-lg font-semibold">Paperback</div>
                        <div className="text-sm mt-1">{book.paperback}</div>
                      </div>
                    )
                  )}

                  {/* Hardcover Button */}
                  {book.hardcover && (
                    book.hardcoverUrl ? (
                      <a
                        href={book.hardcoverUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white w-full text-center block py-4 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <div className="text-lg">Buy Hardcover</div>
                        <div className="text-sm opacity-90 mt-1">{book.hardcover}</div>
                      </a>
                    ) : (
                      <div className="w-full text-center block py-4 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed">
                        <div className="text-lg font-semibold">Hardcover</div>
                        <div className="text-sm mt-1">{book.hardcover}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="lg:col-span-2">
              {book.series && (
                <div className="text-primary font-semibold mb-3">{book.series}</div>
              )}
              <h1 className="mb-3">{book.title}</h1>
              {book.subtitle && (
                <p className="text-2xl text-primary font-semibold mb-6">{book.subtitle}</p>
              )}

              <Link href={`/authors/${book.authorSlug}`}>
                <p className="text-xl text-gray-700 mb-6 hover:text-primary transition-colors cursor-pointer">
                  by {book.author}
                </p>
              </Link>

              {/* Book Meta */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
                <div>
                  <div className="text-sm text-gray-600">Publication Year</div>
                  <div className="font-semibold text-charcoal">{book.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Pages</div>
                  <div className="font-semibold text-charcoal">{book.pages}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Category</div>
                  <div className="font-semibold text-charcoal">{book.category}</div>
                </div>
                {book.rating && (
                  <div>
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="font-semibold text-charcoal">{book.rating}</div>
                  </div>
                )}
                {book.isbn && (
                  <div>
                    <div className="text-sm text-gray-600">ISBN</div>
                    <div className="font-semibold text-charcoal">{book.isbn}</div>
                  </div>
                )}
              </div>

              {book.releaseDate && (
                <div className="bg-primary-50 border-l-4 border-primary p-6 rounded mb-8">
                  <div className="font-bold text-primary text-lg mb-2">Upcoming Release</div>
                  <div className="text-charcoal">Available for pre-order - Releases {book.releaseDate}</div>
                </div>
              )}

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Book</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {book.fullDescription || book.description}
                </div>
              </div>

              {/* Features (if available) */}
              {book.features && book.features.length > 0 && (
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included:</h3>
                  <ul className="space-y-3">
                    {book.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-primary text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Get Your Copy Today</h3>
                <p className="text-primary-50 mb-6 text-lg">
                  Available now on Amazon in multiple formats
                </p>
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block text-lg"
                >
                  {book.status === "Pre-Order" ? "Pre-Order Now →" : "Buy on Amazon →"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Books */}
      {relatedBooks.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="section-container">
            <h2 className="mb-12">
              {book.series ? "More from this Series" : `More by ${book.author}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBooks.map((relatedBook) => (
                <Link
                  key={relatedBook.id}
                  href={`/books/${relatedBook.slug}`}
                  className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white group"
                >
                  <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-80 flex items-center justify-center p-8">
                    {relatedBook.coverImage ? (
                      <Image
                        src={relatedBook.coverImage}
                        alt={relatedBook.title}
                        width={200}
                        height={300}
                        className="object-contain h-full w-auto"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-6xl mb-4">📖</div>
                        <div className="text-sm text-primary-700 font-semibold">
                          {relatedBook.series || relatedBook.category}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedBook.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{relatedBook.author}</p>
                    <p className="text-gray-700 text-sm line-clamp-3">{relatedBook.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
