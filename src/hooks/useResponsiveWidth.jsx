import React, { useState, useEffect } from "react";

export default function useResponsiveWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (width > 1280) return "desktop";
  if (width > 640) return "tablet";
  else return "mobile";
}
