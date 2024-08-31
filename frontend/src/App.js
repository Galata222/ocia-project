import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import FamilyList from './pages/Family/FamilyList';
import FamilyForm from './pages/Family/FamilyForm';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    return (
        <>
            {/* <Nav /> */}
            <Routes>
                {/* Member Dashboard Routes */}
                <Route path="/" element={<MemberHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/submit-risk" element={<SubmitRisk />} />
                <Route path="/profile" element={<Profile />} />
                {/* Family Routes */}
                <Route path="/families" element={<FamilyList />} />
                <Route path="/families/new" element={<FamilyForm />} />
                <Route path="/families/edit/:id" element={<FamilyForm />} />
                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/manage-users" element={<ManageUsers />} />
                <Route path="/admin/notifications" element={<Notifications />} />
                <Route path="/admin/registration" element={<Register />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
