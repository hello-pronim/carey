import React from "react";
import ContentLoader from "react-content-loader";
import { ImageProps } from "next/image";

type SkeletonLoaderProps = Pick<ImageProps, "width" | "height"> & {
  style?: React.CSSProperties;
};

export const SkeletonLoader = ({
  height,
  width,
  style,
}: SkeletonLoaderProps) => (
  <ContentLoader
    width={"100%"}
    height={"100%"}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#E6EEF4"
    foregroundColor="#E6EEF4"
    style={style}
  >
    <rect x="0" y="0" width={width} height={height} />
  </ContentLoader>
);
