"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function CLSPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isContentShifted, setIsContentShifted] = useState(false);

  useEffect(() => {
    // Simulate asynchronous loading of an image
    const imageLoadingTimeout = setTimeout(() => {
      setIsImageLoaded(true);
    }, 2000); // Change the time as needed to simulate loading delay

    // Simulate content shift after image load
    if (isImageLoaded) {
      const contentShiftTimeout = setTimeout(() => {
        setIsContentShifted(true);
      }, 1000); // Change the time as needed to simulate content shift delay
      return () => clearTimeout(contentShiftTimeout);
    }

    return () => clearTimeout(imageLoadingTimeout);
  }, [isImageLoaded]);

  return (
    <div>
      <Head>
        <title>Page with CLS</title>
      </Head>
      <h1>Page with Cumulative Layout Shift (CLS)</h1>
      <div style={{ marginBottom: isContentShifted ? "300px" : "0" }}>
        <p>Some content</p>
        {isImageLoaded && (
          <img
            src="https://a.storyblok.com/f/185240/5266x3403/99cbc784c3/pexels-eberhard-grossgasteiger-443446.jpg"
            alt="Some Image"
          />
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
    </div>
  );
}
