import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `localhost:3000/post/${post.slug}` },
  };
}

export const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div className="">
      <h1 className="text-5xl">{post.title}</h1>
    </div>
  );
};

export default PostSlugPage;
