import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Difference Between Your Gifts and Your Assignments - Sapiential Publishing House",
  description: "Understand why gifts are permanent but assignments are seasonal, and why clinging to expired assignments leads to exhaustion.",
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
                Purpose & Calling
              </div>
              <h1 className="mb-6">The Difference Between Your Gifts and Your Assignments</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>November 8, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                You have gifts that will follow you your entire life. But the assignments where you use those gifts? Those are seasonal. And one of the most exhausting mistakes you can make is clinging to an expired assignment simply because you're good at it.
              </p>

              <h2>Gifts Are Permanent</h2>
              <p>
                "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." (1 Peter 4:10, NIV)
              </p>

              <p>
                Your gifts are permanent deposits from God. If you're a teacher, that gift doesn't expire. If you're a leader, you'll always have the capacity to lead. If you're a writer, encourager, administrator, or creative, those gifts are part of your spiritual DNA. They're "irrevocable," as Romans 11:29 reminds us. God doesn't take back what He gives.
              </p>

              <p>
                But here's the key: the <em>how</em>, <em>where</em>, and <em>with whom</em> you use those gifts changes. That's where assignments come in.
              </p>

              <h2>Assignments Are Seasonal</h2>
              <p>
                An assignment is a specific application of your gifts in a particular time, place, and context. You might have the gift of teaching, but you're assigned to lead a women's Bible study for two years. You might have the gift of leadership, but you're assigned to launch a nonprofit for a season. You might be a writer, but your current assignment is to finish <em>this</em> book.
              </p>

              <p>
                Assignments have beginnings and endings. They have expiration dates. And that's not a flaw in the design—it's part of the design.
              </p>

              <p>
                "There is a time for everything, and a season for every activity under the heavens." (Ecclesiastes 3:1, NIV)
              </p>

              <h2>Why We Cling to Expired Assignments</h2>
              <p>
                So why do we stay in assignments long after God has released us? A few reasons:
              </p>

              <ul>
                <li><strong>Identity confusion:</strong> We confuse what we do with who we are. "I'm the youth pastor" becomes our identity, not just our assignment.</li>
                <li><strong>Fear of disappointing others:</strong> People are counting on us. What will they think if we step down?</li>
                <li><strong>Guilt:</strong> We believe that if we're good at something, we're obligated to keep doing it forever.</li>
                <li><strong>Lack of clarity about what's next:</strong> We cling to the familiar because we can't see what God has waiting on the other side.</li>
              </ul>

              <p>
                But here's the truth: staying in an expired assignment doesn't just drain you—it also blocks someone else from stepping into theirs.
              </p>

              <h2>The Exhaustion of Overstaying</h2>
              <p>
                When you cling to an assignment past its season, exhaustion is inevitable. What once energized you now depletes you. What once flowed naturally now feels forced. You're pushing a door that God has already closed, wondering why it's so hard.
              </p>

              <p>
                It's not hard because you're failing. It's hard because you're finished. There's a difference.
              </p>

              <p>
                Moses led Israel out of Egypt, but he didn't lead them into the Promised Land. That assignment belonged to Joshua. David was anointed king, but he didn't build the temple. That assignment belonged to Solomon. John the Baptist prepared the way for Jesus, but he didn't start the church. That assignment belonged to the apostles.
              </p>

              <p>
                Each of these leaders had permanent gifts. But they had seasonal assignments. And they had to trust God with the transition.
              </p>

              <h2>How to Discern When an Assignment Has Ended</h2>
              <p>
                Ask yourself these questions:
              </p>

              <ul>
                <li>Does this assignment still energize me, or does it primarily drain me?</li>
                <li>Am I doing this out of calling or out of obligation?</li>
                <li>Is God opening new doors while I'm holding tightly to old ones?</li>
                <li>Have I been sensing an inner restlessness or a prompting to release this?</li>
                <li>Am I staying because God wants me here, or because I'm afraid to leave?</li>
              </ul>

              <p>
                If you're feeling stuck, exhausted, or increasingly aware that something has shifted, it might not be burnout. It might be a transition. And transitions require trust.
              </p>

              <h2>Your Gifts Will Follow You</h2>
              <p>
                Here's the good news: when you release an expired assignment, you don't lose your gifts. They follow you into the next season. The teacher who steps down from leading Sunday school doesn't stop being a teacher—she just teaches in a new context. The leader who leaves one organization doesn't stop leading—he leads in a new capacity.
              </p>

              <p>
                God doesn't waste what He's given you. He refines it, redirects it, and redeploys it according to His timing and purposes.
              </p>

              <p>
                So if you're holding onto something that's draining you dry, ask God: "Is this still my assignment, or is this a gift I'm meant to carry somewhere else?"
              </p>

              <p>
                The answer might just set you free.
              </p>
            </div>

            {/* Back to Resources */}
            <div className="mt-12 pt-8 border-t">
              <Link href="/resources" className="text-primary hover:text-primary-600 font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
