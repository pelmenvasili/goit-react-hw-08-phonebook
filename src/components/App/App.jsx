import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import operations from '../../redux/auth/auth-operations';
import { Layout } from '../Layout/Layout';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomeView = lazy(() => import('../../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/register" element={<RestrictedRoute component={RegisterView} redirectTo='/contacts'/>} />
        <Route path="/login" element={<RestrictedRoute component={LoginView} redirectTo='/contacts'/>} />
        <Route path="/contacts" element={<PrivateRoute component={ContactsView} redirectTo='/login'/>} />
      </Route>
    </Routes>
  );
}