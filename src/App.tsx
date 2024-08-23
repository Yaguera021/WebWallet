import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Wallet from "./Pages/Wallet";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/wallet' element={<Wallet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
