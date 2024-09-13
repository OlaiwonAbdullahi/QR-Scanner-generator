import Generator from "./components/Generator";
import MobileNav from "./components/MobileNav";
import Scanner from "./components/Scanner";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-gray-600">
      <Router>
        <div className="">
          <SideBar />
          <MobileNav />
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
