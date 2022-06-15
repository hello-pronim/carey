import React from "react";
import Image, { ImageProps } from "next/image";
import { SkeletonLoader } from "./skeletonLoader";
import { ImageWrapper } from "./styles";

type ImageWithStateProps = ImageProps & {
  fallback: string;
  debug?: string;
};

function ImageWithState({
  alt,
  src,
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

  return (
    <div style={{ position: "relative", maxWidth: props.width }}>
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
        <Image
          alt={alt}
          src={onErrorSrc || src}
          onLoadingComplete={() => !props.debug && setLoading(false)}
          onError={(e) => handleOnError(e)}
          {...props}
        />
      </ImageWrapper>
    </div>
  );
}

export default ImageWithState;
