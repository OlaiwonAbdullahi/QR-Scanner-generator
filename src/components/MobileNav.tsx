import { Link } from "react-router-dom";
import Code from "../assets/Qr-code.svg";
import Scanner from "../assets/Scanner.svg";
import GitHub from "../assets/github.svg";
import logo from "../assets/logo.png";

export default function MobileNav() {
  return (
    <>
      <MobileHeader />
      <div className="md:hidden h-16 w-screen bg-gray-900 fixed bottom-0 flex justify-around items-center px-4">
        <Link
          to="/"
          className="hover:bg-gray-800 p-2 rounded-full transition duration-300"
        >
          <img src={Code} alt="Generate QR Code" className="w-10 h-10" />
        </Link>
        <Link
          to="/scanner"
          className="hover:bg-gray-800 p-2 rounded-full transition duration-300"
        >
          <img src={Scanner} alt="Scan QR Code" className="w-10 h-10" />
        </Link>
        <a
          href="https://github.com/OlaiwonAbdullahi/QR-Scanner-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-800 p-2 rounded-full transition duration-300"
        >
          <img src={GitHub} alt="GitHub Repository" className="w-10 h-10" />
        </a>
      </div>
    </>
  );
}

function MobileHeader() {
  return (
    <div className="md:hidden h-16 w-screen bg-gray-900 fixed top-0 flex justify-center gap-3 items-center px-4">
      <img src={logo} alt="App Logo" className="h-10 w-10" />
      <h2 className="text-gray-200 text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        QR Scanner & Generator
      </h2>
    </div>
  );
}
