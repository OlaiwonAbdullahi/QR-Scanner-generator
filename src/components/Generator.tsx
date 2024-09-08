import { useState } from "react";
import QRCode from "react-qr-code";
function Generator() {
  const [text, setText] = useState("");
  function generateQR(e) {
    setText();
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <QRCode value={text} />
      <div className="input-here">
        <p>Enter your text here</p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>Generate</button>
      </div>
    </div>
  );
}
export default Generator;
