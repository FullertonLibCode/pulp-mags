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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);