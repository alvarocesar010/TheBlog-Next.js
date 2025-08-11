import { formatRelativeDate, formatDatetime } from "@/utils/format-datetime";
import PostHeading from "../PostHeading";

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
      <time
        className="text-slate-600 text-sm"
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostSumamry;
