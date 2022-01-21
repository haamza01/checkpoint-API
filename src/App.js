import { Route, Routes } from "react-router-dom";
import Navbare from "./component/Navbare";
import UsersForMap from "./component/UsersForMap";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbare />
      <Routes>
        <Route path="/users" element={<UsersForMap />} />
      </Routes>
    </div>
  );
}
