import { IMAGE_URL } from "@/constants/base";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

const MovieImage = ({ src, alt, className }: Props) => {
  const fullImageUrl = src.startsWith("http") ? src : `${IMAGE_URL}/${src}`;

  return (
    <img
      src={fullImageUrl}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default MovieImage;
