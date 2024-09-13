import { Html5QrcodeScanner } from "html5-qrcode";
import { useState, useEffect } from "react";
import "../CSS/Scanner.css";

function Scanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
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
    <div className="text-gray-900 bg-gray-900 flex flex-col justify-center pr-10">
      <div id="reader"></div>
      {scanResult && (
        <div className="mt-4 text-sm text-gray-950">
          Scanned Result:
          <a
            href={"https://" + scanResult}
            className="font-semibold text-gray-950"
          >
            {scanResult}
          </a>
        </div>
      )}
    </div>
  );
}

export default Scanner;
