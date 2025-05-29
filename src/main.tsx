import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
import App from './App.tsx';
import './index.css';

// Performance monitoring function
function reportWebVitals(metric: any) {
  // Log metrics to console in development
  if (import.meta.env.DEV) {
    console.log(metric);
  }
  
  // In production, you could send to analytics service
  if (import.meta.env.PROD) {
    // Example: Send to analytics
    const body = JSON.stringify(metric);
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/analytics', body);
    } else {
      fetch('/analytics', {
        body,
        method: 'POST',
        keepalive: true
      });
    }
  }
}

// Measure Core Web Vitals
onCLS(reportWebVitals);
onFID(reportWebVitals);
onLCP(reportWebVitals);
onFCP(reportWebVitals);
onTTFB(reportWebVitals);

// Preload critical images
const preloadImages = () => {
  const images = [
    'https://pulpbots.wordpress.com/wp-content/uploads/2025/05/amazing_stories_1927_08.jpg',
    'https://pulpbots.wordpress.com/wp-content/uploads/2025/05/amazing_stories_1928_01.jpg'
  ];
  
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Execute preloading
if ('requestIdleCallback' in window) {
  requestIdleCallback(preloadImages);
} else {
  setTimeout(preloadImages, 1);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);