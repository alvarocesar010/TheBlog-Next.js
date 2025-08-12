import { findPostBySlugCached } from "@/lib/post/queries";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return (
    <div className="">
      <h1 className="text-5xl">{post.title}</h1>
    </div>
  );
};

export default PostSlugPage;
