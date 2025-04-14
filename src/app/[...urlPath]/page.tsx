import PageLayout from "@/components/PageLayout";
import { getWebsiteData } from "@/lib/hygraph";
import { notFound } from "next/navigation";

interface StaticPageParams {
  urlPath: string[];
}

export async function generateStaticParams(): Promise<
  { params: StaticPageParams }[]
> {
  const { website } = await getWebsiteData();

  const paths = website.pages.map((page) => ({
    params: { urlPath: page.urlPath.split("/").filter(Boolean) },
  }));

  return paths;
}

export default async function StaticPage({
  params,
}: {
  params: Promise<StaticPageParams>;
}) {
  const data = await params;

  const { website } = await getWebsiteData();
  const urlPath = "/" + data.urlPath.join("/");

  const page = website.pages.find((p) => p.urlPath === urlPath);

  if (!page) {
    return notFound();
  }

  return <PageLayout page={page} />;
}
