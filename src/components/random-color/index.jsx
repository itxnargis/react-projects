import React, { useState, useEffect } from "react";
import "./styles.css";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHEXColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRGBColor();
    } else {
      handleCreateRandomHEXColor();
    }
  }, [typeOfColor]);

  return (
    <div className="color-content"
      style={{
        background: color,
      }}
    >
      <div className="btn">
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
          ? handleCreateRandomHEXColor
          : handleCreateRandomRGBColor
        }
        >
        Generate Random Color
      </button>
      </div>
      <div className="type-color">
        <div className="color">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2 className="code">{color}</h2>
        </div>
      </div>
    </div>
  );
}
