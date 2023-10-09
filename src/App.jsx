import "./App.css";
import GetStarted from "./Components/GetStarted";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Seller from "./Components/Seller";
import Buyer from "./Components/Buyer";
import Contattaci from "./Components/Contattaci";
import Privacy from "./Components/Privacy";
import UserPrivacy from "./Components/UserPrivacy";
import Dashboard from "./Components/Dashboard";
import Page404 from "./Components/Page404";
import SellerPage from "./Components/Dashboard/Sellerpage";
import BuyerrPage from "./Components/Dashboard/Buyerpage";

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
          <Route path="/dashbord/overview" element={<Dashboard />} />
          <Route path="/dashbord/sellerpage" element={<SellerPage />} />
          <Route path="/dashbord/buyerpage" element={<BuyerrPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
