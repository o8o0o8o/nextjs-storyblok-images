import Image from "next/image";

export default function Page() {
  const width = 5266;
  const aspectRatio = 5266 / 3403;
  const height = width / aspectRatio;

  return (
    <div style={{ width: "1200px" }}>
      <Image
        src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
        alt=""
        width={width}
        height={height}
      />
    </div>
  );
}
