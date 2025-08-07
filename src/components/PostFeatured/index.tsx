import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

const PostFeatured = () => {
  const postLink = "/#";
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
          alt: "Uma bela imagem",
          src: "/images/bryen_4.png",
          priority: true,
        }}
        linkProps={{ href: postLink }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm" dateTime="2025-04-20">
          20/04/205 10:00
        </time>
        <PostHeading as="h1" url={postLink}>
          Maiores quod repudiandae velit quo
        </PostHeading>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          harum voluptates ipsa, repellendus pariatur nam nemo illum nobis
          deserunt recusandae porro repellat fugiat doloribus ut! Maiores quod
          repudiandae velit quo.
        </p>
      </div>
    </section>
  );
};

export default PostFeatured;
