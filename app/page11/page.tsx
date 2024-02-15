"use client";

import Image from "next/image";

export default function CLSPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <div style={{ position: "relative", width: "300px", height: "300px" }}>
        <Image
          src="/hero-bg-mobile.gif"
          alt="Some Image"
          fill
          objectFit="cover"
        />
      </div>

      <div
        style={{
          position: "absolute",
          color: "white",
          top: "50%",
          left: "50%",
          fontSize: "24px",
        }}
      >
        Code, Career, Creativity - the contemporary software engineering and
        design festival
      </div>
    </div>
  );
}
