"use client";
import Image from "next/image";

const b = {
  _uid: "3962b80e-0e03-4339-888a-a78f10271be7",
  component: "embedded-image",
  image_selector: {
    _uid: "37183cfe-cf20-4c54-aa76-bc017fdaacae",
    image:
      "https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg",
    ratio: 1.5474581251836614,
    plugin: "image-selector",
    max_width: 5266,
    max_height: 3403,
  },
  _editable:
    '\u003c!--#storyblok#{"name": "embedded-image", "space": "185240", "uid": "3962b80e-0e03-4339-888a-a78f10271be7", "id": "287960730"}--\u003e',
};

export default function Page() {
  const url =
    "https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg";

  const width = +url.split("/")[5].split("x")[0];
  const height = +url.split("/")[5].split("x")[1];
  const aspectRatio = width / height;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
      }}
    >
      <Image src={url} alt="landscape" fill objectFit="contain" />
    </div>
  );
}
