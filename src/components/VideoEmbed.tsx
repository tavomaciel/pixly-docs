import React from "react";

interface VideoProps {
  id: string;
}

export default function VideoEmbed(props: VideoProps) {
  const finalUrl = `https://pixly-docs-static.tavomaciel.com/${props.id}.mp4`;

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%" }}>
      <video
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        controls
        autoplay
        playsinline
        muted
        loop
      >
        <source src={finalUrl} type="video/mp4" />
      </video>
    </div>
  );
}
