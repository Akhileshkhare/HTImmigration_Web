import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/default/Home';
import OurFirm from './components/OurFirm';
import AboutTheFirm from './components/AboutTheFirm';
import OurAttorneysAndStaff from './components/OurAttorneysAndStaff';
import WhyChooseOurTeam from './components/WhyChooseOurTeam';
import Services from './components/Services';
import EB2NIW from './components/EB2NIW';
import NIWForEntrepreneurs from './components/NIWForEntrepreneurs';
import EB1A from './components/EB1A';
import EB1B from './components/EB1B';
import PERM from './components/PERM';
import I485GreenCardApplication from './components/I485GreenCardApplication';
import I485AdjustmentOfStatus from './components/I485AdjustmentOfStatus';
import I140I485Concurrent from './components/I140I485Concurrent';
import ImmigrantVisaProcessing from './components/ImmigrantVisaProcessing';
import NonImmigrationVisas from './components/NonImmigrationVisas';
import H1BVisa from './components/H1BVisa';
import L1Visa from './components/L1Visa';
import O1O3Visa from './components/O1O3Visa';
import J1VisaAndWaiver from './components/J1VisaAndWaiver';
import E1E2Visa from './components/E1E2Visa';
import LegalFees from './components/LegalFees';
import FreeEvaluation from './components/FreeEvaluation';
import LegalFeesOfOurServices from './components/LegalFeesOfOurServices';
import KnowledgeCenter from './components/KnowledgeCenter';
import FAQ from './components/FAQ';
import LatestInformation from './components/LatestInformation';
import CurrentVisaBulletin from './components/CurrentVisaBulletin';
import OurApprovals from './components/OurApprovals';
import OurSuccessStories from './components/OurSuccessStories';
import LatestNIWEB1O1Approvals from './components/LatestNIWEB1O1Approvals';
import ClientTestimonials from './components/ClientTestimonials';
import ContactUs from './components/ContactUs';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/default/Navbar';
import Footer from './components/default/Footer';
import AdminPrivateRoute from './layouts/AdminPrivateRoute';
import AdminDashboardLayout from './layouts/AdminDashboardLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Admin Login route without header/footer */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          {/* Dashboard route in its own secure layout */}
          <Route element={<AdminPrivateRoute Layout={AdminDashboardLayout} />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Route>
          {/* All other routes with header/footer */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <header className="App-header pt-16">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our_firm" element={<OurFirm />} />
                    <Route path="/about_the_firm" element={<AboutTheFirm />} />
                    <Route path="/our_attorneys_and_staff" element={<OurAttorneysAndStaff />} />
                    <Route path="/why_choose_our_team" element={<WhyChooseOurTeam />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/eb2_niw" element={<EB2NIW />} />
                    <Route path="/niw_for_entrepreneurs" element={<NIWForEntrepreneurs />} />
                    <Route path="/eb1a" element={<EB1A />} />
                    <Route path="/eb1b" element={<EB1B />} />
                    <Route path="/perm" element={<PERM />} />
                    <Route path="/i485_green_card_application" element={<I485GreenCardApplication />} />
                    <Route path="/i485_adjustment_of_status" element={<I485AdjustmentOfStatus />} />
                    <Route path="/i140_i485_concurrent" element={<I140I485Concurrent />} />
                    <Route path="/immigrant_visa_processing" element={<ImmigrantVisaProcessing />} />
                    <Route path="/non_immigration_visas" element={<NonImmigrationVisas />} />
                    <Route path="/h1b_visa" element={<H1BVisa />} />
                    <Route path="/l1_visa" element={<L1Visa />} />
                    <Route path="/o1_o3_visa" element={<O1O3Visa />} />
                    <Route path="/j1_visa_and_waiver" element={<J1VisaAndWaiver />} />
                    <Route path="/e1_e2_visa" element={<E1E2Visa />} />
                    <Route path="/free_evaluation" element={<FreeEvaluation />} />
                    <Route path="/legal_fees_of_our_services" element={<LegalFeesOfOurServices />} />
                    <Route path="/knowledge_center" element={<KnowledgeCenter />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/latest_information" element={<LatestInformation />} />
                    <Route path="/current_visa_bulletin" element={<CurrentVisaBulletin />} />
                    <Route path="/our_approvals" element={<OurApprovals />} />
                    <Route path="/our_success_stories" element={<OurSuccessStories />} />
                    <Route path="/latest_niw_eb1_o1_approvals" element={<LatestNIWEB1O1Approvals />} />
                    <Route path="/client_testimonials" element={<ClientTestimonials />} />
                    <Route path="/contact_us" element={<ContactUs />} />
                  </Routes>
                </header>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
