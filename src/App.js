import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import DashboardEn from "./layouts/DashboardEn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/en" element={<DashboardEn />} />
      </Routes>
    </div>
  );
}

export default App;
