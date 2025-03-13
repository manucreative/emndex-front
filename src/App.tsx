import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ScrollToTop } from './components/common/ScrollToTop';
import AppMainLayout from './layout/AppMainLayout';
import Loader from "./components/common/Loader";
import { Suspense, lazy } from "react";
import FaviconUpdater from "./components/common/FaviconUpdater";
import NotFound from "./pages/OtherPage/NotFound";
import { useConfig } from "./context/ConfigProvider";
import ServiceUnavailable from "./pages/OtherPage/ServiceNotAvailable";
import LoadPortfolio from "./pages/portfolio/LoadPortfolio";
import LoadProjectDetails from "./pages/portfolio/LoadProjectDetails";

// ✅ Lazy load pages
const HomeLouncher = lazy(() => import("./pages/Louncher/HomeLouncher"));
const LoadServices = lazy(() => import("./pages/Services/LoadServices"));
const LoadFeatures = lazy(() => import("./pages/Features/LoadFeatures"));
const LoadContactForm = lazy(() => import("./pages/ContactUs/LoadContactForm"));
const LoadAboutUs = lazy(() => import("./pages/AboutUs/LoadAboutUs"));
const LoadFaqs = lazy(() => import("./pages/Faqs/LoadFaqs"));

function App() {
  const { configurations, loading } = useConfig();

  if (loading) {
    return <Loader />;
  }
  if (!configurations) {
    return <ServiceUnavailable />;
  }
  return (
    <Router>
      <FaviconUpdater />
      <ScrollToTop />
      
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<AppMainLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeLouncher />} />
            <Route path="/home/about" element={<LoadAboutUs />} />
            <Route path="/home/features" element={<LoadFeatures />} />
            <Route path="/home/services" element={<LoadServices />} />
            <Route path="/home/contact" element={<LoadContactForm />} />
            <Route path="/home/faqs" element={<LoadFaqs />} />
            <Route path="/home/portfolio" element={<LoadPortfolio />} />

            <Route path="/home/portfolio/projects/:slug" element={<LoadProjectDetails title=":slug" />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
