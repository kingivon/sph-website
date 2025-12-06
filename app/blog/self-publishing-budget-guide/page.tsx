import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The True Cost of Self-Publishing: A Realistic Budget Guide - Sapiential Publishing House",
  description: "Understand the real costs of self-publishing your book with a detailed breakdown of editing, design, formatting, and marketing expenses.",
};

export default function BlogPost() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <nav className="text-sm mb-6">
            <Link href="/resources" className="text-primary hover:text-primary-600">
              ← Back to Resources
            </Link>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <div className="mb-12">
              <div className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Publishing 101
              </div>
              <h1 className="mb-6">The True Cost of Self-Publishing: A Realistic Budget Guide</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>September 13, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:leading-tight
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:leading-snug
              [&>p]:text-base [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6
              [&>ul]:my-6 [&>ul]:space-y-3 [&>ul>li]:text-base [&>ul>li]:text-gray-700 [&>ul>li]:leading-relaxed
              [&>ol]:my-6 [&>ol]:space-y-3 [&>ol>li]:text-base [&>ol>li]:text-gray-700 [&>ol>li]:leading-relaxed
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_em]:italic
              [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:my-6 [&>blockquote]:italic [&>blockquote]:text-gray-600
            ">
              <p className="text-xl text-gray-700 mb-8">
                One of the biggest misconceptions about self-publishing is that it's free. While you can technically upload a book to Amazon for nothing, publishing a professional, competitive book requires investment. Here's a realistic breakdown of what self-publishing actually costs and where you can save versus where you should invest.
              </p>

              <h2>Editing: $500 - $3,000+</h2>
              <p>
                Editing is non-negotiable if you want your book taken seriously. The cost depends on the type of editing, word count, and the editor's experience.
              </p>

              <ul>
                <li><strong>Developmental Editing:</strong> $0.05 - $0.15 per word ($2,500 - $7,500 for a 50,000-word book)</li>
                <li><strong>Copyediting:</strong> $0.02 - $0.05 per word ($1,000 - $2,500 for 50,000 words)</li>
                <li><strong>Proofreading:</strong> $0.01 - $0.03 per word ($500 - $1,500 for 50,000 words)</li>
              </ul>

              <p>
                <strong>Where to save:</strong> Do thorough self-editing before hiring professionals. Use beta readers to catch big issues early. You might skip developmental editing if your manuscript is already solid structurally.
              </p>

              <p>
                <strong>Where to invest:</strong> Don't skip copyediting or proofreading. Typos and grammar errors kill credibility instantly.
              </p>

              <h2>Cover Design: $200 - $2,000</h2>
              <p>
                Your cover is the single most important marketing tool your book has. Readers judge books by their covers, and a cheap-looking cover screams "amateur."
              </p>

              <ul>
                <li><strong>Pre-made covers:</strong> $50 - $200 (limited customization)</li>
                <li><strong>Custom professional design:</strong> $300 - $800 (most common)</li>
                <li><strong>High-end agency design:</strong> $1,500 - $3,000+ (for competitive genres)</li>
              </ul>

              <p>
                <strong>Where to save:</strong> If you're on a tight budget, a well-chosen pre-made cover from a reputable site is better than a cheap custom design from an inexperienced designer.
              </p>

              <p>
                <strong>Where to invest:</strong> For fiction and competitive non-fiction markets, a custom cover is worth it. Your cover needs to stand out in thumbnail size on Amazon.
              </p>

              <h2>Interior Formatting: $50 - $500</h2>
              <p>
                Interior formatting ensures your book looks professional inside, with proper chapter headings, margins, page numbers, and typography.
              </p>

              <ul>
                <li><strong>DIY using templates:</strong> Free - $50</li>
                <li><strong>Professional formatting (eBook only):</strong> $100 - $200</li>
                <li><strong>Professional formatting (print + eBook):</strong> $200 - $500</li>
              </ul>

              <p>
                <strong>Where to save:</strong> For straightforward books (standard chapters, no images), you can use free templates or tools like Vellum (Mac only, $250 one-time fee) or Atticus.
              </p>

              <p>
                <strong>Where to invest:</strong> If your book has images, tables, special formatting, or you're not tech-savvy, hire a professional.
              </p>

              <h2>ISBN and Copyright: $0 - $295</h2>
              <ul>
                <li><strong>Free ISBN from Amazon KDP:</strong> $0 (but limits distribution options)</li>
                <li><strong>Single ISBN from Bowker:</strong> $125</li>
                <li><strong>10-pack ISBNs from Bowker:</strong> $295 (best value if publishing multiple books)</li>
                <li><strong>Copyright registration:</strong> $65 (through the U.S. Copyright Office)</li>
              </ul>

              <p>
                <strong>Where to save:</strong> If you're only publishing on Amazon, the free ISBN works fine. Copyright protection exists automatically when you create the work; official registration is optional but recommended.
              </p>

              <p>
                <strong>Where to invest:</strong> Buy your own ISBNs if you plan to distribute beyond Amazon or publish multiple books.
              </p>

              <h2>Marketing and Launch: $100 - $2,000+</h2>
              <p>
                Marketing can be the biggest variable. Many authors spend nothing; others invest thousands.
              </p>

              <ul>
                <li><strong>Author website:</strong> $50 - $200/year</li>
                <li><strong>Email marketing platform:</strong> Free - $50/month</li>
                <li><strong>Book launch ads (Amazon, Facebook):</strong> $200 - $1,000+</li>
                <li><strong>Book reviews (NetGalley, BookSirens):</strong> $0 - $500</li>
                <li><strong>Virtual book tour or PR:</strong> $500 - $2,000+</li>
              </ul>

              <p>
                <strong>Where to save:</strong> Start with free marketing—social media, email list building, guest blogging, podcast interviews. Organic growth is slow but sustainable.
              </p>

              <p>
                <strong>Where to invest:</strong> Once you have a solid product, test small ad campaigns to find what works. A website and email list are foundational for long-term author success.
              </p>

              <h2>Realistic Total Cost Breakdown</h2>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <p><strong>Bare-Bones Budget (DIY Maximum):</strong><br />
                Proofreading: $500<br />
                Pre-made cover: $100<br />
                DIY formatting: $0<br />
                Free ISBN: $0<br />
                Minimal marketing: $100<br />
                <strong className="text-primary">Total: ~$700</strong></p>

                <p className="mt-6"><strong>Professional Budget (Recommended):</strong><br />
                Copyediting + Proofreading: $2,000<br />
                Custom cover: $500<br />
                Professional formatting: $300<br />
                ISBN + Copyright: $250<br />
                Launch marketing: $500<br />
                <strong className="text-primary">Total: ~$3,550</strong></p>

                <p className="mt-6"><strong>Premium Budget (Competitive Market):</strong><br />
                Developmental + Copyediting + Proofreading: $5,000<br />
                High-end cover: $1,200<br />
                Professional formatting: $500<br />
                ISBN + Copyright: $250<br />
                Comprehensive marketing: $2,000<br />
                <strong className="text-primary">Total: ~$8,950</strong></p>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg my-8">
                <p className="text-gray-700 mb-0">
                  <strong className="text-primary">Bottom Line:</strong> Quality self-publishing requires investment, but it's an investment in your message, your credibility, and your ministry. The question isn't whether to spend money—it's where to spend it wisely.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Get a Custom Quote for Your Book</h3>
              <p className="text-xl mb-6 text-primary-50">
                We offer transparent pricing and customized publishing packages to fit your budget and goals.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
