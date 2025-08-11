import PostCoverImage from "../PostCoverImage";
import PostSumamry from "../PostSummary";
import { findAllPublicPosts } from "../../lib/post/queries";

const PostsList = async () => {
  const posts = await findAllPublicPosts();

  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              imageProps={{
                width: 1200,
                height: 720,
                alt: post.title,
                src: post.coverImageUrl,
              }}
              linkProps={{ href: postLink }}
            />
            <PostSumamry
              postHeading="h2"
              postLink={postLink}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
