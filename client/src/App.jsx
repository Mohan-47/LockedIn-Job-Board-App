import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import ApplyJob from "./pages/ApplyJob";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/apply-job" element={<ApplyJob />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/post-job" element={<PostJob />} />
      </Routes>
    </div>
  );
};

export default App;
