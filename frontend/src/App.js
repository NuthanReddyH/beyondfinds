import "tailwindcss/tailwind.css";
import React, { lazy, Suspense } from "react"; // Import lazy and Suspense
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./components/ErrorPage/Error";

const Home = lazy(() => import("./components/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Header = lazy(() => import("./components/header/Header"));
const Login = lazy(() => import("./components/login/Login"));
const Register = lazy(() => import("./components/Register/Register"));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Header />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
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
