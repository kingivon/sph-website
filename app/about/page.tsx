import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sapiential Publishing House",
  description: "Learn about Sapiential Publishing House, our mission to equip authors to share wisdom that transforms lives, and our commitment to excellence in Christian book publishing.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Author-Centered Approach",
      description: "We've been in your shoes. Our team understands the creative process, the vulnerability of sharing your story, and the practical challenges of publishing. You're not just a client; you're a partner in ministry.",
      icon: "🤝",
    },
    {
      title: "Excellence with Integrity",
      description: "We believe your message deserves professional presentation. Every book we publish meets high standards of editorial quality, design, and production because excellence honors both the author and the readers.",
      icon: "⭐",
    },
    {
      title: "Faith-Rooted Foundation",
      description: "We specialize in Christian content that makes a difference. Our team understands theological nuance, ministry context, and the unique needs of faith-based authors and readers.",
      icon: "✝️",
    },
    {
      title: "Personalized Guidance",
      description: "No cookie-cutter packages here. We tailor our services to your specific manuscript, goals, and budget, ensuring you get exactly what you need to succeed.",
      icon: "💎",
    },
  ];

  const genres = [
    "Christian Living & Spiritual Growth",
    "Trauma Healing & Recovery",
    "Prayer & Devotional",
    "Ministry & Leadership Development",
    "Biblical Teaching & Exposition",
    "Testimony & Memoir",
    "Purpose & Identity",
    "Mental Health & Wholeness (Faith-Based)",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-16">
        <div className="section-container">
          <h1 className="mb-6">About Sapiential Publishing House</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Equipping and empowering authors to share wisdom that transforms lives.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-primary rounded-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Sapiential Publishing House exists to equip and empower authors to share wisdom that transforms lives, bringing faith-filled messages from the heart to the page and into the hands of readers who need them most.
              </p>
            </div>
            <div className="bg-white border-2 border-primary rounded-lg p-8">
              <div className="text-4xl mb-4">🔭</div>
              <h2 className="mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a leading voice in Christian publishing, known for producing books that heal, inspire, and equip believers to walk in their God-given purpose. We envision a global community of authors whose words bring hope to the broken, clarity to the confused, and strength to the weary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-8 text-center">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Sapiential Publishing House was born from a simple conviction: <strong>every God-given message deserves to be heard.</strong> The name "Sapiential" comes from the Latin word for wisdom, reflecting our commitment to publishing books that carry transformative truth and practical insight for everyday life.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded by Dr. Ivon Valerie, an author of multiple books on faith, trauma healing, and spiritual growth, SPH understands the author's journey firsthand. We know what it's like to carry a message that burns in your heart, to wrestle with getting it onto the page, and to navigate the complex world of publishing. That experience shapes everything we do.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Today, SPH serves authors across the Caribbean, North America, and beyond, helping them bring their manuscripts to life with excellence and integrity. Whether you're a first-time author with a testimony to share or an experienced writer expanding your catalog, we're here to walk alongside you from concept to completion.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ABOUT PAGE IMAGE.png"
                  alt="Sapiential Publishing House"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genres We Publish */}
      <section className="py-16 bg-primary-50">
        <div className="section-container">
          <h2 className="mb-12 text-center">Genres & Topics We Publish</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <p className="text-gray-700 font-medium">{genre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-center">Meet Our Founder</h2>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <Image
                      src="/images/ivon-valerie.png"
                      alt="Apostle Dr. Ivon L. Valerie"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-2">Apostle Dr. Ivon L. Valerie</h3>
                  <p className="text-primary font-semibold mb-4">Founder & Senior Pastor, Faith & Works Ministries</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Apostle Dr. Ivon Valerie is a pastor, author, certified coach, and mental health advocate with over 20 years of experience in ministry and leadership. As the senior pastor of Faith & Works Ministries, he empowers individuals through faith, trauma healing, and personal development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With certifications in education, counseling, psychology, and leadership and as a Certified Mental Health Christian Coach, Dr. Valerie inspires transformation through his writing, speaking, and mentorship. He helps others rebuild, thrive, and fulfill their God-given potential. He resides in Sint Maarten with his wife, Jeanetta Valerie, and their two children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-12 text-center">
            <h2 className="mb-6 text-white">Join Our Community</h2>
            <p className="text-xl mb-8 text-primary-50">
              Whether you're an author ready to publish or a reader looking for faith-based literature that transforms,
              we invite you to be part of the Sapiential Publishing House family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/authors" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block">
                For Authors
              </Link>
              <Link href="/books" className="bg-charcoal text-white hover:bg-charcoal-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block">
                Browse Our Books
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
