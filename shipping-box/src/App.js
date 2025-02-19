import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ShippingForm from "./components/ShippingForm/Form";
import BoxList from "./components/ListView/BoxTable";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShippingForm />} />
          <Route path="/list" element={<BoxList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
