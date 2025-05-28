import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Gallery from './components/Gallery';
import CoverDetail from './components/CoverDetail';
import Timeline from './components/Timeline';
import Tags from './components/Tags';
import Insights from './components/Insights';
import Contributors from './components/Contributors';

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Layout>
        <main id="main-content" tabIndex={-1}>
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
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;