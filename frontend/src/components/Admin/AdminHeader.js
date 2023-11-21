import React from "react";
import "./AdminHeader.css";
import { useDispatch } from "react-redux";
import { logout } from "../../data/authSlice";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    console.log("here")

    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isAdmin");
    await dispatch(logout());
    if(!localStorage.getItem('token')) {
        navigate('/');
    }
  };

  return (
    <header className="admin-header text-white">
      <div className="container flex items-center justify-between mx-auto py-4 lg:px-16 sm:px-8 header-wrapper">
        <div className="logo">
          <h1><Link to="/admin" >Admin</Link></h1>
        </div>
        <nav>
          <ul className="admin-nav">
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
