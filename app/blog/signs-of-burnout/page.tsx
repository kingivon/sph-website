import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Signs You're Experiencing Burnout (And What to Do About It) - Sapiential Publishing House",
  description: "Discover the warning signs of burnout for professional women and practical steps to move from exhaustion to sustainable purpose.",
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
                Author Insights
              </div>
              <h1 className="mb-6">5 Signs You're Experiencing Burnout (And What to Do About It)</h1>
              <div className="flex items-center text-gray-600 text-sm gap-4">
                <span>By Marcia J. Thompson, MBA, CPC</span>
                <span>•</span>
                <time>October 11, 2025</time>
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
                You've been running on empty for so long that you've forgotten what it feels like to be full. Burnout doesn't announce itself with a dramatic crash—it creeps in quietly, disguised as dedication, commitment, and sacrifice. Here are five warning signs that you're experiencing burnout and what you can do about it.
              </p>

              <h2>1. Physical Exhaustion That Sleep Doesn't Fix</h2>
              <p>
                You're getting seven or eight hours of sleep, but you wake up tired. Your body aches. You catch every cold that circulates through your office. This isn't just being busy—this is your body waving a red flag. Chronic exhaustion is one of the earliest and most persistent signs of burnout.
              </p>

              <p>
                <strong>What to do:</strong> Start small. Add one restorative practice to your daily routine—a 10-minute walk, five minutes of deep breathing, or an actual lunch break away from your desk.
              </p>

              <h2>2. Emotional Detachment and Cynicism</h2>
              <p>
                You used to care deeply about your work, your team, your impact. Now you feel numb. You're going through the motions. You've become cynical about things that once inspired you. This emotional flatness is your heart trying to protect itself from overload.
              </p>

              <p>
                <strong>What to do:</strong> Reconnect with your "why." Journal about what originally drew you to this work. Sometimes remembering your purpose is the first step toward reclaiming it.
              </p>

              <h2>3. Decreased Productivity Despite Working More Hours</h2>
              <p>
                You're working longer hours but accomplishing less. Tasks that used to take you 30 minutes now take two hours. You're constantly distracted, forgetful, unable to concentrate. This isn't a discipline problem—it's a depletion problem. You can't force an empty well to produce water.
              </p>

              <p>
                <strong>What to do:</strong> Quality over quantity. Instead of adding more hours, try working in focused 25-minute blocks with breaks in between. Rest isn't the reward for finishing your work; it's what makes your work sustainable.
              </p>

              <h2>4. Loss of Purpose and Meaning</h2>
              <p>
                You're questioning everything: Why does this matter? Am I making a difference? Is this all there is? When burnout sets in, we lose sight of the meaning behind our work. Everything feels pointless because exhaustion has eclipsed purpose.
              </p>

              <p>
                <strong>What to do:</strong> Take a sacred pause. Step back—not to quit, but to gain perspective. Ask God to restore your vision. Sometimes we need to stop doing in order to start seeing clearly again.
              </p>

              <h2>5. Neglecting Self-Care and Relationships</h2>
              <p>
                You skip meals. You cancel plans with friends. You snap at your family. You haven't done anything you enjoy in weeks—or is it months? Burnout makes self-care feel selfish and relationships feel like obligations. But neglecting yourself and the people you love is not a badge of honor; it's a warning sign.
              </p>

              <p>
                <strong>What to do:</strong> Start protecting one thing. Maybe it's dinner with your family. Maybe it's a Saturday morning to yourself. Choose one non-negotiable boundary and keep it.
              </p>

              <h2>You Were Made for More Than Exhaustion</h2>
              <p>
                Recognizing burnout is the first step toward breakthrough. You don't have to live this way. You were made for sustainable purpose, not constant depletion.
              </p>

              <p>
                If you're a professional woman struggling with burnout, <Link href="/books/from-burned-out-to-breakthrough" className="text-primary hover:text-primary-600 font-semibold">From Burned Out to Breakthrough: A 30-Day Devotional for Professional Women</Link> offers daily Scripture, practical wisdom, and guided reflection to help you move from exhaustion to renewal. Each day includes teaching, prayer, and actionable steps designed to help you rediscover rest, release control, and renew your God-given purpose.
              </p>

              <p>
                You deserve breakthrough. And it starts with acknowledging that you need it.
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
