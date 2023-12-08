import "tailwindcss/tailwind.css";
import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./components/ErrorPage/Error";
import { useDispatch, useSelector } from 'react-redux';
import { rehydrateAuthState } from './data/authSlice';
import Account from "./components/Account/Account";
import ProductsPage from "./components/Products/ProductsPage";
import ProductDetails from "./components/Products/ProductDetails";
import AddListing from "./components/Listings/AddListing";
import MyListings from "./components/Listings/MyListing";
import AdminHeader from "./components/Admin/AdminHeader";
import UserDashboard from "./components/Admin/UserDashboard";
import Favorites from "./components/Listings/Favorites";
import Chat from "./components/Chat/Chat";
import ListingDashboard from "./components/Admin/ListingDashboard";
import ChatWindow from "./components/Chat/ChatWindow";
import ForgotPassword from "./components/common/ForgotPassword";
import OtpPage from "./components/Login/OtpPage";
import ResetPassword from "./components/Login/ResetPassword";
import AboutUs from "./components/About/About";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));
const Login = lazy(() => import("./components/login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const IndividualCategory = lazy(() => import("./components/IndividualCategory/IndividualCategory"));

const Dashboard = lazy(() => import("./components/Admin/Dashboard"));

function App() {

  const dispatch = useDispatch();
  //const isAdmin = localStorage.getItem('isAdmin');
  const { isAdmin } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(rehydrateAuthState());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          {!!isAdmin ? <AdminHeader /> : <Header />}
          <main className="container mx-auto lg:px-16 sm:p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myAccount" element={<Account />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/category/:categoryName/:categoryId" element={<IndividualCategory />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/addListing" element={<AddListing />} />
              <Route path="/myListings" element={<MyListings />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/users" element={<UserDashboard />} />
              <Route path="/listings" element={<ListingDashboard />} />
              <Route path="/chat" element={<ChatWindow />} />
              <Route path="/chat/:sellerName/:username" element={<Chat />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/otp" element={<OtpPage />} />
              <Route path="/reset" element={<ResetPassword />} />
              {/* Catch-all route for 404 errors */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
