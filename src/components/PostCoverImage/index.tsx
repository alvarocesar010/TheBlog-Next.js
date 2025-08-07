import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

const PostCoverImage = ({ imageProps, linkProps }: PostCoverImageProps) => {
  return (
    <Link
      {...linkProps}
      className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className} `}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className={`w-full h-full group-hover:scale-105 transition object-cover object-center ${imageProps.className}`}
      />
    </Link>
  );
};

export default PostCoverImage;
