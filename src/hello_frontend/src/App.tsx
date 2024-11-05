// src/pages/Login.tsx
import React from 'react';
import SplashScreen from './components/SplashScreen'; // Pastikan path ini benar
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './auth/login/page';
import RegisterPage from './auth/register/page';
import HomePage from './pages/home/page';
import CategoriesPage from './pages/category/page';
import CategoryDetails from './pages/category/[dynamic]/page';
import ImageDetail from './pages/category/[dynamic]/image/[detail-photo]/page';
import ImageGalleryPage from './pages/collections/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/category/:categoryName" element={<CategoryDetails />} />
        <Route path="/image/:id" element={<ImageDetail />} />
        <Route path="/collections" element={<ImageGalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;

