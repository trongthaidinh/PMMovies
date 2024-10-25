import React from "react";

type Props = {
  alt?: string;
  src: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ src, alt, ...props }: Props) => {
  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      draggable="false"
      {...props}
    />
  );
};

export default Image;
