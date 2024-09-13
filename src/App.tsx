import Generator from "./components/Generator";
import Scanner from "./components/Scanner";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex bg-gray-300">
      <div className="basis-1/2">
        <SideBar />
      </div>
      <div className="basis-1/2">
        <Generator />
        <Scanner />
      </div>
    </div>
  );
}
export default App;
