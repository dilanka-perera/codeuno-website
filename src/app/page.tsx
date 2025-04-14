import PageLayout from "@/components/PageLayout";
import { getWebsiteData } from "@/lib/hygraph";

export default async function HomePage() {
  const { website } = await getWebsiteData();

  return <PageLayout page={website.homePage} />;
}
