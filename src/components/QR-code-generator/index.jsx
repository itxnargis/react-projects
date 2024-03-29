import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="input">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div className="QR-code">
        <QRCode id="qr-code-value" value="qrCode" size={400} />
      </div>
    </div>
  );
}
