import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logos/White.png"
                alt="Sapiential Publishing House"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-400 font-semibold text-lg mb-2 italic">
              "We Publish the Wise"
            </p>
            <p className="text-gray-300 mb-4">
              Bringing faith-based stories to life through professional Christian book publishing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-gray-300 hover:text-primary transition-colors">
                  Our Books
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-gray-300 hover:text-primary transition-colors">
                  For Authors
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:info@sapientialpublishing.com" className="hover:text-primary transition-colors">
                  info@sapientialpublishing.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:text-primary-400 transition-colors">
                  Contact Form
                </Link>
              </li>
              <li>
                <a href="https://facebook.com/sapientialpublishing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sapiential Publishing House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
