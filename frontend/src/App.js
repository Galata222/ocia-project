import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MemberHome from './pages/MemberDashboard/Home';
import Profile from './pages/MemberDashboard/Profile';
import SubmitRisk from './pages/MemberDashboard/SubmitRisk';
import AdminHome from './pages/AdminDashboard/Home';
import ManageUsers from './pages/AdminDashboard/ManageUsers';
import Notifications from './pages/AdminDashboard/Notifications';
import About from './components/About';
import "../src/fontawesome/css/all.css"
import Nav from './components/Nav';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
// import Profile from "./pages/MemberDashboard/Profile";

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/profile' && <Nav />}
            <Routes>
                {/* Member Dashboard Routes */}
                <Route path="/" element={<MemberHome />} />
                <Route path="/About" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/submit-risk" element={<SubmitRisk />} />
                <Route path="/profile" element={<Profile />} />
                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/manage-users" element={<ManageUsers />} />
                <Route path="/admin/notifications" element={<Notifications />} />
                <Route path="/admin/registeration" element={<Register />} />
            </Routes>
            {location.pathname !== '/profile' && <Footer />}
        </>
    );
}

export default App;