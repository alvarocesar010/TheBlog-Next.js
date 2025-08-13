import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import PostHeading from "../PostHeading";
import PostDate from "../PostDate";
import SafeMarkdown from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-4">
        <Image
          className="rounded-xl "
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
          priority
        />

        <PostHeading url={post.coverImageUrl} as="h1">
          {post.title}
        </PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="mb-6 text-xl text-slate-600 italic">{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
      
    </article>
  );
};

export default SinglePost;
