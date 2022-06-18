import React from "react";
import { default as NextImage, ImageProps } from "next/image";
import { SkeletonLoader } from "./skeletonLoader";
import { ImageWrapper, Wrapper } from "./styles";

type ImageWithStateProps = ImageProps & {
  fallback: string;
  enableSkeleton?: boolean;
  debug?: string;
};

function Image({
  alt,
  src,
  enableSkeleton = false, // if false, next/image, if true, image with skeleton lader
  ...props
}: ImageWithStateProps): JSX.Element {
  const [loading, setLoading] = React.useState(true);
  const [onErrorSrc, setOnErrorSrc] = React.useState<string | undefined>(
    undefined
  );

  function handleOnError(
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void {
    console.log("handle on error");
    if (e?.currentTarget?.src !== props.fallback) {
      setOnErrorSrc(props.fallback);
    }
  }

  return enableSkeleton ? (
    <Wrapper>
      <SkeletonLoader
        style={{
          position: "absolute",
          zIndex: props.debug === "true" ? 99 : "auto",
          top: "-2px",
        }}
        height={props.height}
        width={props.width}
      />
      <ImageWrapper show={!loading}>
        <NextImage
          alt={alt}
          src={onErrorSrc || src}
          onLoadingComplete={() => !props.debug && setLoading(false)}
          onError={(e) => handleOnError(e)}
          {...props}
        />
      </ImageWrapper>
    </Wrapper>
  ) : (
    <NextImage alt={alt} src={src} {...props} />
  );
}

export default Image;
