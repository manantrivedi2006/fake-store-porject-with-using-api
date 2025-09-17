import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Layout from "./Layout";
import EmptyCart from "./addtocart";
import UserProfile from "./account";
import OTPForm from "./getotp";
import ProductPage from "./Productdetails";


export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* default route */}
        <Route index element={<Home />} />
        <Route path="/addtocart" element={<EmptyCart/>}/>
        <Route path="/account" element={<UserProfile/>}/>
          <Route path="/login" element={<Login />} />
        <Route path="/getotp" element={<OTPForm/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

