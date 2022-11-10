import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { fetchCurrentUser } from 'redux/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { errorMessage } from '../redux/contactsSlice';
import { Layout } from './Layout/Layout';

import { lazy } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { Empty } from '../Pages/Empty/Empty';

const Home = lazy(() => import('../Pages/Home/Home'));
const Register = lazy(() => import('../Pages/Register/Register'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Phonebook = lazy(() => import('../Pages/Phonebook/Phonebook'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('fethcing current user');
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1800} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Empty />} />
        </Route>
      </Routes>
      {/* {error !== null && <ErrorMessage>{error}</ErrorMessage>} */}
    </>
  );
}
