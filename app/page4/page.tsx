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
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: 1.5474581251836614,
        }}
      >
        <Image
          src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
          alt="landscape"
          fill
          objectFit="contain"
          loader={loader}
          sizes="(max-width: 640px) 100vw, 1200px"
        />
      </div>
    </div>
  );
}
