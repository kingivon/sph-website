import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Books - Sapiential Publishing House",
  description: "Discover our collection of faith-based Christian books including the Trauma Detox Series, The Knock, The Wilderness Season, and more. Books that heal, inspire, and equip believers.",
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
