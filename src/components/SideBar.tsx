import Code from "../assets/Qr-code.svg";
import Scanner from "../assets/Scanner.svg";
import GitHub from "../assets/github.svg";
import logo from "../assets/logo.png";

function SideBar() {
  return (
    <div className="bg-gray-900 w-36 sm:w-40 md:w-48 lg:w-64 h-screen mt-0 mb-0 ml-0 py-8 px-3 sm:px-6 flex flex-col justify-between">
      <div>
        <div className="mb-20  items-center justify-center ml-16">
          <img src={logo} className="h-14 w-14"></img>
        </div>
        <div className="flex flex-col justify-center h-full gap-6 mt-10">
          <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer transition duration-300 ease-in-out">
            <img
              src={Code}
              className="w-8 sm:w-10 h-8 sm:h-10"
              alt="Generate Code Icon"
            />
            <h2 className="text-lg sm:text-xl text-gray-200">Generate Code</h2>
          </div>

          <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer transition duration-300 ease-in-out">
            <img
              src={Scanner}
              className="w-8 sm:w-10 h-8 sm:h-10"
              alt="Scan Code Icon"
            />
            <h2 className="text-lg sm:text-xl text-gray-200">Scan Code</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer transition duration-300 ease-in-out">
        <a
          href="https://github.com/OlaiwonAbdullahi/QR-Scanner-generator"
          className="flex items-center gap-3"
        >
          <img
            src={GitHub}
            className="w-8 sm:w-10 h-8 sm:h-10"
            alt="GitHub logo"
          />
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl">
            Github Repo
          </p>
        </a>
      </div>
    </div>
  );
}

export default SideBar;
