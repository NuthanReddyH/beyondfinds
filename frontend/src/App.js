import "tailwindcss/tailwind.css";
import React, { lazy, Suspense ,useEffect} from "react"; // Import lazy and Suspense
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./components/ErrorPage/Error";
import { useDispatch } from 'react-redux'; // necessary to dispatch the rehydrate action
import { rehydrateAuthState } from './data/authSlice';
import Account from "./components/Account/Account";
import  ProductsPage  from "./components/Products/ProductsPage";
import ProductDetails from "./components/Products/ProductDetails";
import AddListing from "./components/Listings/AddListing";
import MyListings from "./components/Listings/MyListing";
const Home = lazy(() => import("./components/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/Header/Header"));
const Login = lazy(() => import("./components/login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const IndividualCategory = lazy(() => import("./components/IndividualCategory/IndividualCategory"));


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Rehydrate the authentication state as soon as app loads
    dispatch(rehydrateAuthState());
  }, [dispatch]); // only run once when the component is mounted
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Header />
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
