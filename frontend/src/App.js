import React from 'react';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MemberHome from './pages/MemberDashboard/Home';
import Profile from './pages/MemberDashboard/Profile';
import SubmitRisk from './pages/MemberDashboard/SubmitRisk';
import UpdateRisk from './pages/MemberDashboard/UpdateRisk';
import ViewRisk from './pages/MemberDashboard/ViewRisk'; 
import RiskList from './pages/MemberDashboard/RiskList'; 
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
import ProfileHome from './Profilecomponents/ProfileHome'
import SubmittedRisk from './AdminComponents/SubmittedRisk';
import History from './AdminComponents/History';
import Reports from './AdminComponents/Reports';
import ForgotPassword from './components/ForgotPassword';
import TermsAndConditions from './components/TermsAndConditions';
function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const showNavAndFooter = ['/', '/About', '/contact','/terms','/ForgotPassword','/Service', '/login'].includes(location.pathname);

    return (
        <>
            {showNavAndFooter && <Nav />}
            <Routes>
                {/* Member Dashboard Routes */}
                <Route path="/" element={<MemberHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/terms" element={<TermsAndConditions />} />
               
                <Route path="/ForgotPassword" element={<ForgotPassword />} />

                {/* Profile Routes */}
                <Route path="/ProfileHome" element={<ProfileHome />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="submit-risk" element={<SubmitRisk />} />
                    <Route path="risks/edit/:id" element={<UpdateRisk />} />
                    <Route path="risks"  element={<RiskList />} />
                    <Route path="risks/:id"  element={<ViewRisk />} />
                    <Route path="families" element={<FamilyList />} />
                    <Route path="families/new" element={<FamilyForm />} />
                    <Route path="families/edit/:id" element={<FamilyForm />} />
                </Route>

                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminHome />}>
                    <Route path="manage-users" element={<ManageUsers />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="registration" element={<Register />} />
                    <Route path="submitted-risk" element={<SubmittedRisk />} />
                    <Route path="history" element={<History />} />
                    <Route path="reports" element={<Reports />} />
                </Route>
            </Routes>
            {showNavAndFooter && <Footer />}
        </>
    );
}

export default App;
