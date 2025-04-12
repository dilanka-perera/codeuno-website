"use client";

import PageLayout from "@/components/PageLayout";
import { useData } from "@/context/DataContext";

export default function HomePage() {
  const { website } = useData();

  if (!website) return <p>Loading...</p>;

  console.log(website);

  return <PageLayout page={website.homePage} />;
}
