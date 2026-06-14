import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import store from './store';

// Pages
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import AssessmentPage from './pages/Assessment';
import ReportsPage from './pages/Reports';
import AdminPage from './pages/Admin';

// Components
import ProtectedRoute from './components/Common/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/assessments"
              element={
                <ProtectedRoute>
                  <AssessmentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <ReportsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
