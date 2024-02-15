"use client";
import Image from "next/image";

export default function Page() {
  const loader = ({ src, width }: { src: string; width: number }) =>
    `${src}/m/${width}x0/filters:quality(70)`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "48px",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        {/* Best case? fit the image into the available space, taking into account the aspect ratio */}
        <Image
          src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
          alt=""
          fill
          objectFit="contain"
          quality={70}
        />
      </div>
    </div>
  );
}
