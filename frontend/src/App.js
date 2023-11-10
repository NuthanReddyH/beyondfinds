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
          <main className="container mx-auto lg:px-16 sm:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myAccount" element={<Account />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/category/:categoryName/:categoryId" element={<IndividualCategory />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/addListing" element={<AddListing />} />
              <Route path="/myListings" element={<MyListings />} />
              {/* Admin Routes */}
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/users" element={<UserDashboard />} />
             
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
