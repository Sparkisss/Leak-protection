import { Routes, Route, Navigate } from 'react-router';
import AuthPage from '@/pages/AuthPage/AuthPage';
import DashboardPage from '@/pages/DashboardPage/ui/DashboardPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import StatisticsPage from '@/pages/StatisticsPage/StatisticsPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import MainLayout from '@/widgets/Layouts/MainLayout';
import { BrowserRouter } from 'react-router';
import { PrivateRoute } from '@/shared/lib/PrivateRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Доступна всем */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Приватные маршруты */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
