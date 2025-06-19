import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { injectGlobalStyles } from './globalStyles';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Trash from './pages/Trash';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Map from '@pages/Map/Map';
import Layout from './components/Layout';

import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './routes/privateRoutes';

import 'leaflet/dist/leaflet.css';
import TrashDetail from '@pages/TrashDetails';
import AllNotifications from '@pages/AllNotifications';

injectGlobalStyles();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* 🔓 Rota pública */}
          <Route path="/login" element={<Login />} />

          {/* 🔐 Rotas privadas com Layout */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="trashes" element={<Trash />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
            <Route path="map" element={<Map />} />
            <Route path="/trash/:id" element={<TrashDetail />} />
            <Route path="notifications" element={<AllNotifications />} />
          </Route>

          {/* Rota fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
