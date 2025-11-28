import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Sapiential Publishing House",
  description: "Get in touch with Sapiential Publishing House. Contact us about manuscript submissions, publishing services, or general inquiries. We're here to help bring your book to life.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
