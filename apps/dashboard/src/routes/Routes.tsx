import {
  BrowserRouter as Router,
  Route,
  Routes as DefaultRoutes,
} from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Login } from '../pages/Login/Login';

export const Routes = () => {
  return (
    <Router>
      <DefaultRoutes>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/" element={<Layout />} />
      </DefaultRoutes>
    </Router>
  );
};
