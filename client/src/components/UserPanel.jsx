import React from 'react'
import { FaUserCircle, FaBriefcase, FaEnvelope, FaSignOutAlt, FaHome, FaSearch, FaCommentDots, FaCog, FaQuestionCircle, FaBookmark } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


const UserPanel = () => {
    const location = useLocation();
    const isDashboard = location.pathname === '/user/dashboard';
    const isJobSearch = location.pathname === '/user/apply-job';
    return (
        <div>
            <aside className='py-6 hidden md:flex flex-col backdrop-blur-lg border-r border-y border-zinc-500/30 px-6 rounded-xl shadow-xl sticky top-20 overflow-y-auto h-[calc(100vh-80px)] w-64'>
                <nav className='flex flex-col gap-4 mb-10'>
                    <Link to="/user/dashboard" className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isDashboard ? "bg-gradient-to-r from-zinc-900 to-cyan-600" : ""} font-semibold hover:bg-zinc-800 transition-colors duration-300`}><FaHome /> Dashboard </Link>
                    <Link to="/user/profile" className='flex items-center gap-3 py-2 px-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors duration-300' ><FaBriefcase /> Applications </Link>
                    <Link to="/user/profile" className='flex items-center gap-3 py-2 px-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors duration-300' ><FaCommentDots /> Messages </Link>
                    <Link to="/user/apply-job" className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isJobSearch ? "bg-gradient-to-r from-zinc-900 to-cyan-600 " : "hover:bg-zinc-800"} font-semibold transition-colors duration-300`}><FaSearch /> Job Search </Link>
                </nav>
                <div className='flex flex-col gap-2 mt-auto '>
                    <Link to="/login" className='flex items-center gap-3 py-2 px-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors duration-300'><FaSignOutAlt /> Logout</Link>
                    <Link to="/user/profile" className='flex items-center gap-3 py-2 px-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors duration-300'><FaCog /> Settings</Link>
                    <Link to="/user/profile" className='flex items-center gap-3 py-2 px-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors duration-300'><FaQuestionCircle /> Help</Link>
                </div>
            </aside>
        </div>
    )
}

export default UserPanel