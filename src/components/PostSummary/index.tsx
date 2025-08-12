import PostHeading from "../PostHeading";
import PostDate from "../PostDate";

type PostSummaryType = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

const PostSumamry = ({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryType) => {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate dateTime={createdAt} />

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostSumamry;
