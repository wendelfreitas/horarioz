import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Login } from '../pages/Login/Login';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Router>
    </BrowserRouter>
  );
};
