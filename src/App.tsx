import Generator from "./components/Generator";
import Scanner from "./components/Scanner";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-gray-300">
      <Router>
        <div className="basis-1/2">
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<Generator />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
