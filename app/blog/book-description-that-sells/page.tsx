import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Book Description That Sells - Sapiential Publishing House",
  description: "Master the art of writing compelling book descriptions that hook readers and drive sales with proven techniques and examples.",
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
                Marketing
              </div>
              <h1 className="mb-6">How to Write a Book Description That Sells</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>November 18, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Your book description is your sales pitch. It's the text that appears on Amazon, the back cover, and everywhere potential readers decide whether to buy. Yet many authors rush through it, treating it as an afterthought. Here's how to write a description that actually sells books.
              </p>

              <h2>Start With a Hook That Grabs Attention</h2>
              <p>
                Your opening line needs to stop the scroll. It should be provocative, relatable, or intriguing enough to make a reader want to know more. Avoid generic statements like "This is a story about..." Instead, lead with the problem, the promise, or the question your book addresses.
              </p>

              <p><strong>Weak opening:</strong> "This book tells the story of a woman overcoming trauma."</p>
              <p><strong>Strong opening:</strong> "You've been carrying these silent scars for too long."</p>

              <p>
                The second version speaks directly to the reader, acknowledges their pain, and implies the book has answers. That's what hooks look like.
              </p>

              <h2>Focus on Benefits, Not Just Features</h2>
              <p>
                Readers don't buy books because of what's in them—they buy because of what they'll get out of them. Instead of listing what your book contains, describe how it will transform the reader.
              </p>

              <p><strong>Feature-focused:</strong> "Includes 12 chapters on prayer strategies."</p>
              <p><strong>Benefit-focused:</strong> "Learn prayer strategies that will deepen your relationship with God and bring breakthrough in areas where you've felt stuck."</p>

              <p>
                See the difference? One tells. The other sells.
              </p>

              <h2>Understand Your Genre's Expectations</h2>
              <p>
                Book descriptions follow genre conventions. Christian non-fiction tends to be more direct and promise-driven. Fiction leans into story tension and character stakes. Memoir balances personal story with universal themes.
              </p>

              <p>Study the top sellers in your genre on Amazon. Notice patterns in length, tone, and structure. You don't need to copy them, but you should understand what readers in your space expect and respond to.</p>

              <h2>Use the Three-Part Structure</h2>
              <p>
                An effective book description typically follows this structure:
              </p>

              <ol>
                <li><strong>The Hook (1-2 sentences):</strong> Grab attention with a compelling opening that speaks to the reader's pain or desire.</li>
                <li><strong>The Promise (2-3 paragraphs):</strong> Explain what the book offers, what the reader will gain, and why it matters. This is where you build desire.</li>
                <li><strong>The Credentials (1-2 sentences):</strong> Briefly establish your authority or unique perspective. Why should they trust you to deliver on the promise?</li>
              </ol>

              <p>
                Keep the entire description between 150-250 words. Any longer, and you lose readers. Any shorter, and you haven't built enough desire.
              </p>

              <h2>Write in Second Person (You)</h2>
              <p>
                Talk directly to the reader. Instead of "Readers will discover," use "You'll discover." This creates intimacy and makes the reader feel like you're speaking to them specifically. It's more engaging and more persuasive.
              </p>

              <h2>End With a Clear Call to Action</h2>
              <p>
                Don't assume readers know what to do next. Tell them. End with language like:
              </p>
              <ul>
                <li>"If you're ready to [outcome], this book is for you."</li>
                <li>"Start your journey toward [benefit] today."</li>
                <li>"Your [transformation] begins here."</li>
              </ul>

              <h2>Examples of Effective Descriptions</h2>
              <p>
                Here's a before-and-after example for a Christian non-fiction book on healing from trauma:
              </p>

              <p><strong>Before (weak):</strong><br />
              "This book is about healing from trauma. It includes biblical teaching, practical exercises, and personal stories. The author shares from 20 years of ministry experience helping people find freedom."
              </p>

              <p><strong>After (strong):</strong><br />
              "You've been carrying these silent scars for too long. You've mastered survival, smiled through the pain, and buried your trauma so deep you wonder if healing is even possible. But what if freedom isn't just a dream?<br /><br />
              This raw, soul-stirring guide walks you through the valleys of pain, into the steady work of healing, and toward the vibrant life waiting on the other side. You'll discover how to name what broke you, process what you've buried, and rebuild with God's grace as your foundation.<br /><br />
              Written by a pastor and trauma coach with two decades of ministry experience, this isn't theory—it's a roadmap from someone who's walked the path and helped hundreds do the same."
              </p>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg my-8">
                <p className="text-gray-700 mb-0">
                  <strong className="text-primary">Pro Tip:</strong> Read your description out loud. If it sounds stiff or salesy, rewrite it. The best descriptions feel like a conversation, not a pitch.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Need Help With Your Book Marketing?</h3>
              <p className="text-xl mb-6 text-primary-50">
                From book descriptions to launch strategies, we help Christian authors present their message professionally and persuasively.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Get Professional Support
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
