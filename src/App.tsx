import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Gallery from './components/Gallery';
import CoverDetail from './components/CoverDetail';
import Timeline from './components/Timeline';
import Tags from './components/Tags';
import Insights from './components/Insights';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cover/:id" element={<CoverDetail />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;