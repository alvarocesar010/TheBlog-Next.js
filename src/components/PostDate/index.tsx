import { formatRelativeDate, formatDatetime } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

const PostDate = ({ dateTime }: PostDateProps) => {
  return (
    <time
      className="text-slate-600 text-sm"
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
};

export default PostDate;
