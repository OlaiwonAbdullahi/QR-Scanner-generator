import Generator from "./components/Generator";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <SideBar />
      </div>
      <div className="basis-1/2">
        <Generator />
      </div>
    </div>
  );
}
export default App;
