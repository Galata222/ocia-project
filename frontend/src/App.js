import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import "../src/fontawesome/css/all.css";
import Nav from './components/Nav';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import FamilyList from './pages/Family/FamilyList';
import FamilyForm from './pages/Family/FamilyForm';
import ProfileHome from './Profilecomponents/ProfileHome';
import SubmittedRisk from './AdminComponents/SubmittedRisk';
import History from './AdminComponents/History';
import Reports from './AdminComponents/Reports';
import ForgotPassword from './components/ForgotPassword';
import TermsAndConditions from './components/TermsAndConditions';
import Notification from './components/Notification';
import HistoryUser from './components/HistoryUser';
import HowItWorks from './components/HowItWorks';
import Support from './components/Support';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import OtherService from './components/OtherService';
import FREEService from './components/FreeService';
import '../src/style/customfont.css';
import Dashboard from './AdminComponents/Dashboard';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const showNavAndFooter = ['/', '/about', '/contact', '/terms', '/notifications', '/HowItWorks', '/ForgotPassword', '/Service', '/other-service', '/free-service', '/login', '/termsandcondition', '/donate', '/volunteer'].includes(location.pathname);

    return (
        <>
            {showNavAndFooter && <Nav />}
            <Routes>
                {/* Member Dashboard Routes */}
                <Route path="/" element={<MemberHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/termsandcondition" element={<TermsAndConditions />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/HowItWorks" element={<HowItWorks />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/other-service" element={<OtherService />} />
                <Route path="/support" element={<Support />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/free-service" element={<FREEService />} />
                <Route path="/Donate" element={<Donate paymentLink="https://donate.stripe.com/test_eVadSz7Vj1WKcs85kk" />} />

                {/* Profile Routes */}
                <Route path="/ProfileHome" element={<ProfileHome />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="submit-risk" element={<SubmitRisk />} />
                    <Route path="risks/edit/:id" element={<UpdateRisk />} />
                    <Route path="risks" element={<RiskList />} />
                    <Route path="risks/:id" element={<ViewRisk />} />
                    <Route path="families" element={<FamilyList />} />
                    <Route path="families/new" element={<FamilyForm />} />
                    <Route path="families/edit/:id" element={<FamilyForm />} />
                    <Route path="notifications" element={<Notification />} />
                    <Route path="history" element={<HistoryUser />} />
                </Route>
                
                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminHome />}>
                    <Route index element={<Navigate to="/admin/Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="manage-users" element={<ManageUsers />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="registration" element={<Register />} />
                    <Route path="submitted-risk" element={<SubmittedRisk />} />
                    <Route path="history" element={<History />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
            {showNavAndFooter && <Footer />}
        </>
    );
}

export default App;