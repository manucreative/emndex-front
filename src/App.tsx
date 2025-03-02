import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ScrollToTop } from './components/common/ScrollToTop';
import AppMainLayout from './layout/AppMainLayout';
import HomeLouncher from './pages/Louncher/HomeLouncher';
import LoadServices from './pages/Services/LoadServices';
import LoadFeatures from "./pages/Features/LoadFeatures";
import LoadContactForm from "./pages/ContactUs/LoadContactForm";

function App() {

  return (
    <Router>
    <ScrollToTop />
      <Routes>

      <Route element={<AppMainLayout />}>
      <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<HomeLouncher />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/home/features" element={<LoadFeatures />} />
        <Route path="/home/services" element={<LoadServices />} />
        <Route path="/home/contact" element={<LoadContactForm />} />
        </Route>
      </Routes>
  </Router>
  )
}

export default App
