import { useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image"; // This will help in downloading the QR code as an image

function Generator() {
  const [text, setText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  function generateQR() {
    setGeneratedText(text); // This will store the text for QR code generation
  }

  // Handle the change event
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // Function to handle QR code download
  function handleDownload() {
    const qrCodeElement = document.getElementById("qr-code");

    if (qrCodeElement) {
      toPng(qrCodeElement)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "qr-code.png";
          link.click();
        })
        .catch((err) => {
          console.error("Error generating QR code image: ", err);
        });
    }
  }

  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center mx-auto pl-0">
      {generatedText && (
        <div id="qr-code" className="mt-10">
          <QRCode value={generatedText} fgColor="#0e0118" bgColor="#d8d8d7" />
        </div>
      )}

      <div className="input-here mt-4 flex">
        <input
          className="border-gray-900 border-2 rounded-l-lg h-7 text-gray-900 p-2"
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

      {generatedText && (
        <button
          className="bg-gray-900 text-white rounded-lg mt-4 px-4 py-2"
          onClick={handleDownload}
        >
          Download QR Code
        </button>
      )}
    </div>
  );
}

export default Generator;
