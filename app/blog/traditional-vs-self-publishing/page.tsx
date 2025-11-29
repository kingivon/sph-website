import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional vs. Self-Publishing: Which Path Is Right for You? - Sapiential Publishing House",
  description: "Compare traditional and self-publishing models to determine which path aligns with your goals, timeline, and vision for your book.",
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
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-12">
              <div className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Publishing 101
              </div>
              <h1 className="mb-6">Traditional vs. Self-Publishing: Which Path Is Right for You?</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>November 12, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                The question every author faces: traditional publishing or self-publishing? There's no one-size-fits-all answer, but understanding the key differences can help you make an informed decision that aligns with your goals, timeline, and vision for your book.
              </p>

              <h2>Traditional Publishing: The Gatekeeping Model</h2>
              <p>
                Traditional publishing involves securing a literary agent, submitting your manuscript to publishing houses, and hoping for an acceptance. If you're accepted, the publisher handles editing, design, printing, distribution, and marketing in exchange for the majority of royalties.
              </p>

              <h3>Pros of Traditional Publishing:</h3>
              <ul>
                <li><strong>No upfront costs:</strong> The publisher covers all production expenses</li>
                <li><strong>Professional team:</strong> Access to experienced editors, designers, and marketers</li>
                <li><strong>Distribution network:</strong> Your book can land in physical bookstores</li>
                <li><strong>Credibility:</strong> Being traditionally published still carries prestige in some circles</li>
                <li><strong>Advance payment:</strong> You may receive an advance (though often modest for first-time authors)</li>
              </ul>

              <h3>Cons of Traditional Publishing:</h3>
              <ul>
                <li><strong>Loss of creative control:</strong> Publishers make final decisions on titles, covers, and content</li>
                <li><strong>Lower royalties:</strong> Typically 10-15% compared to 70% in self-publishing</li>
                <li><strong>Long timeline:</strong> The process can take 2-3 years from acceptance to publication</li>
                <li><strong>Difficult to break in:</strong> Getting an agent and publisher is highly competitive</li>
                <li><strong>Rights limitations:</strong> You may not own all rights to your work</li>
              </ul>

              <h2>Self-Publishing: The Independent Model</h2>
              <p>
                Self-publishing puts you in the driver's seat. You hire professionals for editing and design, publish through platforms like Amazon KDP, and retain full creative control and rights to your work.
              </p>

              <h3>Pros of Self-Publishing:</h3>
              <ul>
                <li><strong>Full creative control:</strong> You make all decisions about your book</li>
                <li><strong>Higher royalties:</strong> Keep 35-70% of sales revenue</li>
                <li><strong>Faster timeline:</strong> Publish in months, not years</li>
                <li><strong>Retain all rights:</strong> You own your work completely</li>
                <li><strong>Direct reader connection:</strong> Build your audience on your terms</li>
              </ul>

              <h3>Cons of Self-Publishing:</h3>
              <ul>
                <li><strong>Upfront investment:</strong> You pay for editing, design, and marketing</li>
                <li><strong>Wear all the hats:</strong> You're responsible for quality control and marketing</li>
                <li><strong>Limited physical distribution:</strong> Getting into bookstores is challenging</li>
                <li><strong>Perceived stigma:</strong> Some readers still view self-published books skeptically</li>
                <li><strong>Learning curve:</strong> You need to understand the technical side of publishing</li>
              </ul>

              <h2>The Hybrid Approach</h2>
              <p>
                Many successful authors now use a hybrid model—self-publishing some books while seeking traditional deals for others. This approach allows you to maintain creative freedom while pursuing the benefits of traditional publishing when the right opportunity arises.
              </p>

              <h2>How to Decide</h2>
              <p>
                Ask yourself these questions:
              </p>
              <ul>
                <li><strong>What's your timeline?</strong> If you need to publish quickly, self-publishing is your path.</li>
                <li><strong>What's your budget?</strong> Self-publishing requires upfront investment; traditional doesn't.</li>
                <li><strong>How important is creative control?</strong> If it's non-negotiable, self-publish.</li>
                <li><strong>What are your revenue goals?</strong> Self-publishing offers higher per-book profit, but traditional publishing may sell more copies through wider distribution.</li>
                <li><strong>Are you willing to market yourself?</strong> Both paths require author involvement in marketing, but self-publishing demands it.</li>
              </ul>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg my-8">
                <p className="text-gray-700 mb-0">
                  <strong className="text-primary">Our Perspective:</strong> For faith-based authors with a message to share, self-publishing often provides the speed, control, and profit margins that allow your ministry to thrive. You don't need a publisher's permission to share what God has placed on your heart.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Self-Publish Your Book?</h3>
              <p className="text-xl mb-6 text-primary-50">
                We help Christian authors navigate the self-publishing journey with professional services and personalized guidance.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Start Your Publishing Journey
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
