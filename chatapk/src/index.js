import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './ErrorPage/ErrorBoundaries';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path='/*' element={<App/>} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

