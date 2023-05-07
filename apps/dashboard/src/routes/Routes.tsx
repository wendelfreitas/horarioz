import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { SignIn } from '../pages/SignIn/SignIn';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SignUp } from '../pages/SignUp/SignUp';
import { SettingsPage } from '../pages/Settings/Settings';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
      </Router>
    </BrowserRouter>
  );
};
