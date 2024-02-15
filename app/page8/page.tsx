"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function CLSPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const listen = () => {
      setIsImageLoaded(true);
    };

    window.addEventListener("load", listen);
    return () => window.removeEventListener("load", listen);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      {isImageLoaded && (
        <Image
          src="/hero-bg-mobile.gif"
          alt="Some Image"
          fill
          objectFit="cover"
        />
      )}

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
