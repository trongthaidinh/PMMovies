import Image from "next/image";
import { IMAGE_URL } from "@/constants/base";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

const MovieImage = ({ src, alt, className, ...props }: Props) => {
  const fullImageUrl = src.startsWith("http") ? src : `${IMAGE_URL}/${src}`;

  return (
    <div
      style={{
        lineHeight: 0,
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <Image
        src={fullImageUrl}
        alt={alt}
        className={className}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        quality={75}
        loading={props.priority ? "eager" : "lazy"}
        style={{
          display: "block",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        {...props}
      />
    </div>
  );
};

export default MovieImage;
