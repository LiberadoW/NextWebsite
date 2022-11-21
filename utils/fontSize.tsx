import { useState, useEffect } from "react";

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    setFontSize(
      parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))
    );
  }, []);

  return fontSize;
};
