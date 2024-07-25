import { Img } from "react-image";
import { twMerge } from "tailwind-merge";
import Skeleton from "react-loading-skeleton";

export const useImg = () => {
  return ({ src, alt, style, circle, height, width }) => (
    <Img
      loader={<Skeleton circle={circle} height={height} width={width} />}
      src={src}
      alt={alt}
      className={twMerge(style)}
    />
  );
};
