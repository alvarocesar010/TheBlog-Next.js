import { findAllPublicPostsCached } from "../../lib/post/queries";
import PostCoverImage from "../PostCoverImage";
import PostSumamry from "../PostSummary";

const PostFeatured = async () => {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;
  return (
    <section
      className="
                    grid grid-cols-1 gap-8 mb-16
                    sm:grid-cols-2
                    group "
    >
      <PostCoverImage
        imageProps={{
          width: 1200,
          height: 720,
          alt: post.title,
          src: post.coverImageUrl,
          priority: true,
        }}
        linkProps={{ href: postLink }}
      />

      <PostSumamry
        postHeading="h1"
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        postLink={postLink}
        title={post.title}
      />
    </section>
  );
};

export default PostFeatured;
