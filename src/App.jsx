import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index.jsx';
import SignIn from './pages/SignIn/index.jsx';
import User from './pages/User/index.jsx';
import ProtectedRoute from './features/auth/ProtectedRoute';
import { setToken, fetchUserProfile } from './features/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Vérifie localStorage puis sessionStorage pour récupérer le token
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route 
              path="/user" 
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
