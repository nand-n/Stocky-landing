import "./App.css";
import GetStarted from "./Components/GetStarted";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller from "./Components/Seller";
import Buyer from "./Components/Buyer";
import Contattaci from "./Components/Contattaci";
import Privacy from "./Components/Privacy";
import UserPrivacy from "./Components/UserPrivacy";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/Contattaci" element={<Contattaci />} />
          <Route path="/privacyuser" element={<Privacy />} />
          <Route path="/privacy" element={<UserPrivacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
