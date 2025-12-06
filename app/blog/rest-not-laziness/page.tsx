import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Rest Is Not Laziness: A Biblical Perspective - Sapiential Publishing House",
  description: "Discover the biblical foundation for rest, including Sabbath principles and Jesus's example of withdrawing to pray. Rest is obedience, not weakness.",
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
                Faith & Work
              </div>
              <h1 className="mb-6">Why Rest Is Not Laziness: A Biblical Perspective</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>October 25, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Somewhere along the way, we internalized a lie: rest is laziness. Productivity is virtue. Exhaustion is proof of faithfulness. But Scripture tells a radically different story—one where rest isn't the opposite of work, but the foundation that makes our work sustainable, fruitful, and God-honoring.
              </p>

              <h2>God Modeled Rest From the Beginning</h2>
              <p>
                "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done." (Genesis 2:2-3, NIV)
              </p>

              <p>
                God didn't rest because He was tired. He rested to establish a rhythm. The Creator of the universe, who never sleeps or grows weary, chose to rest—not as an afterthought, but as the culmination of creation. Rest isn't what happens when all the work is done. Rest is woven into the fabric of how God designed life to function.
              </p>

              <h2>The Sabbath Is a Command, Not a Suggestion</h2>
              <p>
                "Remember the Sabbath day by keeping it holy. Six days you shall labor and do all your work, but the seventh day is a sabbath to the Lord your God." (Exodus 20:8-10, NIV)
              </p>

              <p>
                The Sabbath made it into the Ten Commandments. It's right there with "don't murder" and "don't steal." God didn't say, "Rest if you have time." He commanded it. Why? Because He knows us. He knows we'll work ourselves into the ground if left to our own devices. He knows we'll equate our worth with our output. The Sabbath is God's merciful intervention against our tendency toward self-destruction through relentless striving.
              </p>

              <h2>Jesus Withdrew to Pray</h2>
              <p>
                "Yet the news about him spread all the more, so that crowds of people came to hear him and to be healed of their sicknesses. But Jesus often withdrew to lonely places and prayed." (Luke 5:15-16, NIV)
              </p>

              <p>
                Notice the word "often." This wasn't a one-time retreat. Jesus, with crowds pressing in and urgent needs surrounding Him, regularly withdrew. He stepped away from the work, not because it wasn't important, but precisely because it was. If Jesus—the Son of God, perfect in every way—needed to withdraw and rest in the Father's presence, what makes us think we don't?
              </p>

              <h2>Rest Is Trust</h2>
              <p>
                When we refuse to rest, we're essentially saying, "God, I don't trust You to hold this together without me." We're operating as if the success of the kingdom depends on our constant effort. But the truth is, God is sovereign whether we're working or resting. In fact, our willingness to rest is an act of faith—a declaration that God is God, and we are not.
              </p>

              <p>
                "In vain you rise early and stay up late, toiling for food to eat—for he grants sleep to those he loves." (Psalm 127:2, NIV)
              </p>

              <p>
                God grants sleep to those He loves. Not productivity. Not performance. Not grinding until you break. Sleep. Rest. Renewal. These are gifts from a loving Father who knows what we need better than we do.
              </p>

              <h2>Rest Is Obedience</h2>
              <p>
                If God commands rest and models rest, then rest is obedience. When we prioritize constant productivity over rhythms of renewal, we're not being more faithful—we're being disobedient. We're rejecting the design of our Creator.
              </p>

              <p>
                Rest isn't earned. It's not a reward for finishing everything on your to-do list (which, let's be honest, never happens). Rest is a discipline, a spiritual practice, an act of worship that says, "God, You are enough. Your grace is sufficient. I don't have to prove my worth through exhaustion."
              </p>

              <h2>The Permission You've Been Waiting For</h2>
              <p>
                If you've been waiting for permission to rest, here it is: God Himself invites you. Jesus demonstrated it. The Sabbath commands it. You are not lazy for needing rest. You are human. And being human is not a design flaw—it's exactly how God made you.
              </p>

              <p>
                Rest is not the absence of productivity. It's the presence of trust. It's not weakness. It's wisdom. And it's not optional—it's essential.
              </p>

              <p>
                So close the laptop. Turn off the notifications. Take the nap. Keep the Sabbath. Not because you've earned it, but because you're loved.
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
