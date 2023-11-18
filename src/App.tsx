import "./styles/variables.scss";
import LeftBar from "./components/LeftBar";
import AllTasks from "./pages/AllTasks/AllTasks";
import { Route, Routes } from "react-router-dom";
import Upcoming from "./pages/Upcoming/Upcoming";
import Today from "./pages/Today/Today";
import RightPanel from "./components/RightPanel";

const App: React.FC = () => {
  return (
    <div className="App">
      <LeftBar />

      <div className="main-view">
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/upcoming/" element={<Upcoming />} />
          <Route path="/all-tasks" element={<AllTasks />} />
        </Routes>
      </div>

      <RightPanel />
    </div>
  );
};

export default App;
