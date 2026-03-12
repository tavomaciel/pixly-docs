import React from "react";

interface RoundImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export default function RoundImg(props: RoundImageProps) {
  return (
    <img
      class="img-circle"
      src={props.src}
      alt={props.alt}
      style={{ width: props.width, height: props.height }}
    />
  );
}
