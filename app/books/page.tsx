"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { booksData, authorsData } from "@/lib/booksData";

export default function BooksPage() {
  const [selectedAuthor, setSelectedAuthor] = useState("all");

  const filteredBooks = selectedAuthor === "all"
    ? booksData
    : booksData.filter(book => {
        if (selectedAuthor === "ivon") return book.authorSlug === "ivon-valerie";
        if (selectedAuthor === "marcus") return book.authorSlug === "marcus-raymond";
        if (selectedAuthor === "marcia") return book.authorSlug === "marcia-thompson";
        return false;
      });

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <h1 className="mb-6">Our Books</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Discover our collection of faith-based books that heal, inspire, and equip believers to walk in their God-given purpose.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-8 bg-gray-50">
        <div className="section-container">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedAuthor("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedAuthor === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              All Books (9)
            </button>
            <button
              onClick={() => setSelectedAuthor("ivon")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedAuthor === "ivon"
                  ? "bg-primary text-white"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              Apostle Dr. Ivon L. Valerie (7)
            </button>
            <button
              onClick={() => setSelectedAuthor("marcus")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedAuthor === "marcus"
                  ? "bg-primary text-white"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              Marcus J. Raymond (1)
            </button>
            <button
              onClick={() => setSelectedAuthor("marcia")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedAuthor === "marcia"
                  ? "bg-primary text-white"
                  : "bg-white text-charcoal hover:bg-gray-100"
              }`}
            >
              Marcia J. Thompson (1)
            </button>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow bg-white flex flex-col">
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
                  <Link href={`/authors/${book.authorSlug}`}>
                    <p className="text-gray-600 mb-2 hover:text-primary transition-colors cursor-pointer">
                      {book.author}
                    </p>
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span>{book.year}</span>
                    <span>•</span>
                    <span>{book.pages} pages</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>

                  {/* Pricing */}
                  <div className="border-t pt-4 mb-4 mt-auto">
                    <div className="space-y-1 text-sm">
                      {book.kindle && <div><span className="text-gray-600">Kindle:</span> <span className="font-semibold">{book.kindle}</span></div>}
                      {book.paperback && <div><span className="text-gray-600">Paperback:</span> <span className="font-semibold">{book.paperback}</span></div>}
                      {book.hardcover && <div><span className="text-gray-600">Hardcover:</span> <span className="font-semibold">{book.hardcover}</span></div>}
                    </div>
                  </div>

                  {book.releaseDate && (
                    <div className="bg-primary-50 p-3 rounded mb-4">
                      <div className="text-sm font-semibold text-primary">Release Date: {book.releaseDate}</div>
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
                      {book.status === "Pre-Order" ? "Pre-Order" : "Buy on Amazon"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trauma Detox Series Highlight */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-white">The Trauma Detox Series</h2>
            <p className="text-xl mb-8 text-primary-50">
              You've been carrying these silent scars for too long. You've mastered survival. You've smiled through the pain, held it together for everyone else, and buried your trauma so deep that you sometimes wonder if healing is even possible.
            </p>
            <p className="text-lg text-primary-50 mb-8">
              The Trauma Detox Series is a lifeline: a raw, soul-stirring journey through the valleys of pain, into the steady work of healing, and toward the vibrant life waiting for you on the other side.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/books/scarred" className="bg-white text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book 1: Scarred
              </Link>
              <Link href="/books/mended" className="bg-white text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book 2: Mended
              </Link>
              <Link href="/books/bloom" className="bg-white text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book 3: Bloom
              </Link>
            </div>
            <p className="mt-8 text-2xl font-bold text-white">It's time to heal. It's time to bloom.</p>
          </div>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-center mb-12">Our Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {authorsData.map((author) => (
              <div key={author.slug} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Link href={`/authors/${author.slug}`}>
                  <h3 className="text-2xl mb-4 hover:text-primary transition-colors cursor-pointer">{author.name}</h3>
                </Link>
                <p className="text-gray-700 mb-4">{author.bio}</p>
                <div className="flex justify-between items-center">
                  <div className="text-primary font-semibold">{author.booksCount} Published Book{author.booksCount > 1 ? 's' : ''}</div>
                  <Link href={`/authors/${author.slug}`} className="text-primary hover:text-primary-600 font-semibold">
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
