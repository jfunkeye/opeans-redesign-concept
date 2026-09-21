import { Routes, Route } from "react-router-dom";

import SiteLayout from "./layouts/SiteLayout";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Training from "./pages/Training";
import CourseDetails from "./pages/CourseDetails";
import CorporateTraining from "./pages/CorporateTraining";
import TrainingCalendar from "./pages/TrainingCalendar";
import Register from "./pages/Register";
import VerifyCertificate from "./pages/VerifyCertificate";
import TrainingRecords from "./pages/TrainingRecords";
import Accreditations from "./pages/Accreditations";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TrainingPolicy from "./pages/TrainingPolicy";
import NotFound from "./pages/NotFound";

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import CoursesAdmin from "./admin/pages/CoursesAdmin";
import CalendarAdmin from "./admin/pages/CalendarAdmin";
import RegistrationsAdmin from "./admin/pages/RegistrationsAdmin";
import ClientsAdmin from "./admin/pages/ClientsAdmin";
import TestimonialsAdmin from "./admin/pages/TestimonialsAdmin";
import FAQAdmin from "./admin/pages/FAQAdmin";
import MessagesAdmin from "./admin/pages/MessagesAdmin";
import SettingsAdmin from "./admin/pages/SettingsAdmin";

export default function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/:slug" element={<CourseDetails />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/training-calendar" element={<TrainingCalendar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/training-records" element={<TrainingRecords />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/training-policy" element={<TrainingPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin login */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Admin panel (protected) */}
      <Route element={<AdminProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/courses" element={<CoursesAdmin />} />
          <Route path="/admin/calendar" element={<CalendarAdmin />} />
          <Route path="/admin/registrations" element={<RegistrationsAdmin />} />
          <Route path="/admin/clients" element={<ClientsAdmin />} />
          <Route path="/admin/testimonials" element={<TestimonialsAdmin />} />
          <Route path="/admin/faq" element={<FAQAdmin />} />
          <Route path="/admin/messages" element={<MessagesAdmin />} />
          <Route path="/admin/settings" element={<SettingsAdmin />} />
        </Route>
      </Route>
    </Routes>
  );
}