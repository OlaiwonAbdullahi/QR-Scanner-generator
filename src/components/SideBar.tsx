import Code from "../assets/Qr-code.svg";
import Scanner from "../assets/Scanner.svg";

function SideBar() {
  return (
    <div className="bg-gray-900 w-36 sm:w-40 md:w-48 lg:w-64 h-screen mt-0 mb-0 ml-0 py-8 px-3 sm:px-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-20 lg:mb-28 text-center">
          QRSG
        </div>
        <div className="flex flex-col justify-center h-full gap-6 mt-10">
          {/* Generate Code Section */}
          <div className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md cursor-pointer transition duration-300 ease-in-out">
            <img
              src={Code}
              className="w-8 sm:w-10 h-8 sm:h-10"
              alt="Generate Code Icon"
            />
            <h2 className="text-lg sm:text-xl text-gray-200">Generate Code</h2>
          </div>
          {/* Scan Code Section */}
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
    </div>
  );
}

export default SideBar;