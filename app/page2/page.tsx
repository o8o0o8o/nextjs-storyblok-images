import Image from "next/image";

export default function Page() {
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
        {/* the image will be distorted, the proportions are not respected */}
        <Image
          src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
          alt=""
          fill
        />
      </div>

      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        {/* the image will be cropped to show part of the original image (center part in this case) to fit in the available space */}
        <Image
          src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
          alt=""
          fill
          objectFit="cover"
          // objectPosition="top" or objectPosition="bottom" to show different part of the image
        />
      </div>

      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        {/* Best case? fit the image into the available space, taking into account the aspect ratio */}
        <Image
          src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
          alt=""
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
}
