import { useState } from "react";
import QRCode from "react-qr-code";

function Generator() {
  const [text, setText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  function generateQR() {
    setGeneratedText(text); // This will store the text for QR code generation
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="bg-gray-300">
      {generatedText && (
        <a href="#" download={QRCode}>
          <QRCode
            value={generatedText}
            fgColor="#0e0118"
            bgColor="#d8d8d7"
            className="mt-10"
          />
        </a>
      )}
      <div className="input-here mt-4">
        <input
          className="border-gray-900 border-2 rounded-l-lg mt-8 h-7 text-gray-900 p-2"
          placeholder="Paste Your Link ....."
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button
          className="bg-gray-800 text-gray-200 rounded-r-lg h-7 px-1"
          onClick={generateQR}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Generator;
