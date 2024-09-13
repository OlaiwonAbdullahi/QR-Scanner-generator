import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import "../CSS/Scanner.css";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 10,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }

    return () => {
      scanner.clear(); // Cleanup scanner when component unmounts
    };
  }, []);

  return (
    <div className="text-gray-900 bg-gray-300 flex flex-col justify-center h-96 w-96   mx-auto ">
      <div id="reader"></div>
      {scanResult && (
        <div className="mt-4 text-sm text-gray-950">
          Link:
          <a
            href={"https://" + scanResult}
            className="font-semibold text-gray-950"
          >
            {scanResult}
          </a>
          <br />
          <button className="bg-gray-900 text-gray-300 rounded-md p-2">
            <a href={"https://" + scanResult}>Visit Site</a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Scanner;
