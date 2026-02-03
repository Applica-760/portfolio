import { createBrowserRouter, Navigate, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HomePage from '../pages/Home/Page';
import WorkDetailPage from '../pages/Works/DitailPage';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import type { Language } from '../contents/types';

function LanguageLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    if (lang && (lang === 'ja' || lang === 'en')) {
      setLanguage(lang as Language);
    }
  }, [lang, setLanguage]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/ja" replace />,
  },
  {
    path: '/:lang',
    element: <LanguageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'works/:id',
        element: <WorkDetailPage />,
      },
    ],
  },
], {
  basename: '/portfolio',
});