import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import operations from '../../redux/auth/auth-operations';
import { Layout } from '../Layout/Layout';

const HomeView = lazy(() => import('../../views/HomeView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const ContactsView = lazy(() => import('../../views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
}