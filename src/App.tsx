import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load route components
const Home = lazy(() => import('./components/Home'));
const Gallery = lazy(() => import('./components/Gallery'));
const CoverDetail = lazy(() => import('./components/CoverDetail'));
const Timeline = lazy(() => import('./components/Timeline'));
const Tags = lazy(() => import('./components/Tags'));
const Insights = lazy(() => import('./components/Insights'));
const Contributors = lazy(() => import('./components/Contributors'));

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    if ('requestAnimationFrame' in window) {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [location]);

  return null;
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-[#00eeff]">Loading...</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Layout>
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cover/:id" element={<CoverDetail />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="*" element={<Navigate to="/\" replace />} />
            </Routes>
          </Suspense>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;