import Link from "next/link";

export default function CourseDevelopment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-6">
              FLAGSHIP SERVICE • COMING SOON
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Transform Your Message Into a Revenue-Generating Course
            </h1>
            <p className="text-2xl mb-8 text-primary-50 leading-relaxed">
              Your book reaches thousands. Your course transforms lives—and creates lasting, scalable income while you sleep.
            </p>
            <p className="text-xl mb-10 text-white/90">
              Professional course development and creation services that turn your expertise into comprehensive learning experiences—complete with workbooks, study guides, and all the tools your students need to succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-5 rounded-lg transition-colors duration-200 inline-block text-lg shadow-xl"
              >
                Join the Waitlist
              </Link>
              <Link
                href="#examples"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-5 rounded-lg transition-colors duration-200 inline-block text-lg"
              >
                See Course Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Courses Matter */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4">Why Every Author Needs a Course</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              You've written the book. You've shared your message. Now multiply your impact and income exponentially.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-100 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Scalable Revenue</h3>
                <p className="text-gray-700 leading-relaxed">
                  Books earn once per sale. Courses create recurring income streams. Your expertise works for you 24/7, generating revenue while you focus on what matters most.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-100 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Deeper Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reading changes minds. Courses change lives. Guide your audience through transformation with structured learning, practical application, and ongoing support.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border-2 border-primary-100 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">📈</div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Exponential Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your time is limited. Your course isn't. Reach thousands simultaneously, build community, and create a legacy of transformation that outlives any single speaking engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-16">But Creating a Course Feels Overwhelming...</h2>

            <div className="space-y-6">
              {[
                "You don't know where to start or how to structure your content",
                "You're unsure how to turn your book into an interactive learning experience",
                "Creating workbooks, study guides, and materials feels like a full-time job",
                "You're worried about the technical aspects and delivery platforms",
                "You want it done professionally, but hiring multiple people seems expensive and complicated"
              ].map((problem, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-lg border-l-4 border-red-500">
                  <div className="text-red-500 text-2xl flex-shrink-0">✗</div>
                  <p className="text-gray-700 text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-charcoal mb-4">
                That's exactly why we created this service.
              </p>
              <p className="text-xl text-gray-600">
                We handle everything, so you can focus on what you do best: teaching and transforming lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4">Complete Course Development & Creation</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              From concept to launch, we build everything you need for a professional, transformative learning experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Course Curriculum Design",
                  description: "We structure your content into a clear, progressive learning journey with modules, lessons, and learning objectives that drive real transformation."
                },
                {
                  title: "Comprehensive Workbooks",
                  description: "Professional workbooks with reflection questions, practical exercises, action steps, and space for notes that keep students engaged and accountable."
                },
                {
                  title: "Study Guides & Materials",
                  description: "Discussion questions, group study resources, leader guides, and supplementary materials that maximize learning and community engagement."
                },
                {
                  title: "Video Content Support",
                  description: "Video scripts, talking points, and content briefs that make recording your course simple and professional, even if you've never been on camera."
                },
                {
                  title: "Participant Resources",
                  description: "Downloadable resources, templates, checklists, and tools students can use immediately to apply what they're learning to their lives."
                },
                {
                  title: "Assessment & Certificates",
                  description: "Quizzes, knowledge checks, and completion certificates that validate learning and give students a sense of accomplishment and credibility."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                  <div className="text-primary text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-charcoal">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-10 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-4 text-white">Everything You Need. Nothing You Don't.</h3>
              <p className="text-xl text-primary-50 mb-6">
                We've created courses that have transformed hundreds of lives. Now we're bringing that expertise to help you create yours.
              </p>
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-lg transition-colors duration-200 inline-block text-lg"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Examples */}
      <section id="examples" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4">Proven Course Development Excellence</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              We don't just talk about course creation—we've built transformative courses that are changing lives right now. Here are three courses developed by our founder, Dr. Ivon L. Valerie:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trauma Detox Series Course */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 text-center">
                  <div className="text-6xl mb-4">💚</div>
                  <h3 className="text-2xl font-bold text-white">Trauma Detox Series Course</h3>
                </div>
                <div className="p-8">
                  <div className="bg-primary-50 px-4 py-2 rounded-full inline-block mb-4">
                    <span className="text-primary font-bold text-sm">30+ ACTIVE PARTICIPANTS</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A week-by-week healing program guiding participants through the complete journey from scarred to mended to blooming. Combines video teaching, workbook exercises, and community support for deep, lasting transformation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>12-Week Structured Program</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Comprehensive Workbook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Video Lessons & Group Discussions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Life-Changing Results</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Biblical Preaching Course */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold text-white">Biblical Preaching Course</h3>
                </div>
                <div className="p-8">
                  <div className="bg-primary-50 px-4 py-2 rounded-full inline-block mb-4">
                    <span className="text-primary font-bold text-sm">FOR PASTORS & LEADERS</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Master the art of Spirit-led preaching with practical modules on sermon preparation, biblical exegesis, delivery techniques, and anointed communication that transforms congregations and builds kingdom impact.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Biblical Hermeneutics Training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Sermon Structure & Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Practical Application Tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Anointed Communication Skills</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Writing Course */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 text-center">
                  <div className="text-6xl mb-4">✍️</div>
                  <h3 className="text-2xl font-bold text-white">Book Writing Course</h3>
                </div>
                <div className="p-8">
                  <div className="bg-primary-50 px-4 py-2 rounded-full inline-block mb-4">
                    <span className="text-primary font-bold text-sm">MESSAGE TO MANUSCRIPT</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Transform your God-given message into a published book. Step-by-step guidance through ideation, outlining, writing, editing, and publishing—taking aspiring authors from blank page to Amazon bestseller.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Complete Writing Framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Publishing Process Explained</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Author Platform Building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>From Idea to Published Book</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center bg-white p-10 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-charcoal mb-4">
                This is what professional course development looks like.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Structured. Transformative. Results-driven. And we can create this for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-16">How We Bring Your Course to Life</h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Strategy Session",
                  description: "We dive deep into your message, audience, and goals. What transformation do you want to create? Who needs this course? What outcomes will students achieve? We craft a custom strategy tailored to your vision."
                },
                {
                  step: "2",
                  title: "Curriculum Architecture",
                  description: "We design the complete course structure—modules, lessons, learning objectives, and progression. Every element is strategically planned to create maximum impact and student success."
                },
                {
                  step: "3",
                  title: "Content Development",
                  description: "Our team creates all course materials: workbooks, study guides, discussion questions, exercises, templates, and resources. Everything is professionally written, designed, and branded."
                },
                {
                  step: "4",
                  title: "Video Content Preparation",
                  description: "We provide complete video scripts, talking points, and content briefs that make recording simple and professional. You'll know exactly what to say and how to say it."
                },
                {
                  step: "5",
                  title: "Platform & Delivery Setup",
                  description: "We guide you through choosing the right platform and can assist with technical setup, ensuring your course is delivered professionally and your students have an excellent experience."
                },
                {
                  step: "6",
                  title: "Launch Support",
                  description: "You're not alone after creation. We provide launch strategy, marketing guidance, and ongoing support to help you fill your course and maximize impact and revenue."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-charcoal">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-xl border-l-8 border-primary">
              <div className="text-6xl mb-6 text-center">💬</div>
              <p className="text-2xl text-gray-700 italic text-center leading-relaxed mb-8">
                "The difference between a book and a course is the difference between telling someone what to do and walking with them until they've actually done it. That's where real transformation happens—and that's where real income is built."
              </p>
              <div className="text-center">
                <div className="font-bold text-xl text-charcoal">Apostle Dr. Ivon L. Valerie</div>
                <div className="text-gray-600">Founder, Sapiential Publishing House</div>
                <div className="text-gray-600 text-sm mt-2">Creator of 3 Transformative Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary px-6 py-2 rounded-full text-sm font-bold mb-6">
              LIMITED SPOTS AVAILABLE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Message Deserves More Than a Book.
            </h2>
            <p className="text-2xl mb-8 text-gray-300 leading-relaxed">
              It deserves a comprehensive course that transforms lives, builds community, and creates the income stream that funds your ministry and mission.
            </p>
            <p className="text-xl mb-10 text-gray-400">
              This service launches soon. Join the waitlist now to be among the first to access our flagship course development offering and secure priority scheduling.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white hover:bg-primary-600 font-bold px-12 py-5 rounded-lg transition-colors duration-200 inline-block text-lg shadow-2xl"
              >
                Join the Waitlist Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold px-12 py-5 rounded-lg transition-colors duration-200 inline-block text-lg"
              >
                View All Services
              </Link>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              Questions? <Link href="/contact" className="text-primary hover:text-primary-400">Contact us</Link> to learn more about course development pricing and availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
