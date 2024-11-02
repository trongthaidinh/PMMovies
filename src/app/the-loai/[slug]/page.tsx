import { axiosServer } from "@/config/axios";
import { Metadata } from "next";
import CategoryPageClient from "../_components/CategoryPageClient";
import { use } from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const { data } = await axiosServer.get(`/the-loai/${resolvedParams.slug}`);
    const seoData = data?.data?.seoOnPage;

    return {
      title: seoData?.titleHead || "Phim theo thể loại",
      description: seoData?.descriptionHead,
      openGraph: {
        title: seoData?.titleHead,
        description: seoData?.descriptionHead,
        images: seoData?.og_image,
        type: seoData?.og_type,
        url: seoData?.og_url,
      },
    };
  } catch {
    return {
      title: "Phim theo thể loại",
      description: "Danh sách phim theo thể loại",
    };
  }
}

export default function CategoryPage({ params }: Props) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  return (
    <div className="container py-[calc(var(--header-height))]">
      <CategoryPageClient slug={slug} />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const { data } = await axiosServer.get("/the-loai");
    return (data?.data || []).map((category: any) => ({
      slug: category.slug,
    }));
  } catch {
    return [];
  }
}
