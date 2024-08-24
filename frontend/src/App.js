import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MemberHome from './pages/MemberDashboard/Home';
import Profile from './pages/MemberDashboard/Profile';
import SubmitRisk from './pages/MemberDashboard/SubmitRisk';
import AdminHome from './pages/AdminDashboard/Home';
import ManageUsers from './pages/AdminDashboard/ManageUsers';
import Notifications from './pages/AdminDashboard/Notifications';

import UserList from './components/UserList';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Member Dashboard Routes */}
                <Route path="/" element={<MemberHome />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/submit-risk" element={<SubmitRisk />} />
                
                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/manage-users" element={<ManageUsers />} />
                <Route path="/admin/notifications" element={<Notifications />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
