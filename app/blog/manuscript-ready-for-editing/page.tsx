import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Signs Your Manuscript Is Ready for Professional Editing - Sapiential Publishing House",
  description: "Learn the key indicators that your manuscript is ready for professional editing, from self-editing completion to beta reader feedback.",
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
                Writing Tips
              </div>
              <h1 className="mb-6">5 Signs Your Manuscript Is Ready for Professional Editing</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By SPH Editorial Team</span>
                <span>•</span>
                <time>August 2, 2025</time>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                One of the most common questions we hear from authors is: "How do I know when my manuscript is ready for a professional editor?" The answer isn't always straightforward, but there are clear indicators that signal you've done the necessary groundwork and are ready for the next step.
              </p>

              <h2>1. You've Completed Multiple Self-Editing Passes</h2>
              <p>
                If you're still catching plot holes, inconsistencies, or major structural issues on your own, you're not ready yet. Professional editing is most effective when you've already done the heavy lifting yourself. This means you've read through your manuscript multiple times, fixed obvious errors, tightened dialogue, and ensured your story flows logically from beginning to end.
              </p>
              <p>
                A good rule of thumb: if you can read through a chapter without finding anything significant to change, you're getting close.
              </p>

              <h2>2. Beta Readers Have Provided Feedback</h2>
              <p>
                Beta readers offer invaluable perspectives that you, as the author, simply can't have. They experience your story with fresh eyes and can identify confusing passages, pacing issues, or character inconsistencies you've become blind to. If you've received feedback from at least 3-5 trusted beta readers and implemented their suggestions, your manuscript is in much better shape for professional editing.
              </p>
              <p>
                The key is not just receiving feedback, but actually acting on it. If multiple beta readers point out the same issue, that's a clear sign something needs attention before you invest in editing.
              </p>

              <h2>3. Your Story Structure Is Clear and Solid</h2>
              <p>
                Professional editors can help with many things, but they shouldn't be the ones helping you figure out what your book is about or how it should be structured. By the time you reach out for editing, you should know your beginning, middle, and end. Your character arcs should be clear. Your themes should be intentional. Your plot should move forward with purpose.
              </p>
              <p>
                If you're still asking big-picture questions about your story's direction or purpose, you need more time in the drafting phase, not editing.
              </p>

              <h2>4. You've Found Your Voice and Maintained It</h2>
              <p>
                Consistency in voice and tone throughout your manuscript is a sign of maturity in your work. If the first three chapters feel like they were written by a different person than the last three, you need to keep working. When your voice is consistent, confident, and clear from start to finish, you're ready for an editor to polish it, not reshape it.
              </p>

              <h2>5. You're Ready to Let Go (At Least a Little)</h2>
              <p>
                Perhaps the most overlooked sign is emotional readiness. Professional editing means receiving critical feedback about something you've poured your heart into. If you're still too attached to every word, or if constructive criticism feels like personal attack, you might need a bit more time. The best editing relationships happen when authors are open to suggestions, willing to make changes, and humble enough to recognize that outside perspective makes their work stronger.
              </p>
              <p>
                Being ready doesn't mean you won't care about feedback—it means you're prepared to receive it professionally and use it to make your manuscript the best it can be.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-lg my-8">
                <p className="text-gray-700 mb-0">
                  <strong className="text-primary">Bottom Line:</strong> Professional editing is an investment. The more prepared your manuscript is before it reaches an editor, the more value you'll get from that investment. Take the time to do the foundational work. Your book—and your budget—will thank you.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready for Professional Editing?</h3>
              <p className="text-xl mb-6 text-primary-50">
                If you've checked all these boxes, it might be time to work with a professional editor who understands Christian publishing.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
