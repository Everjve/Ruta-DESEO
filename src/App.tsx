import { useEffect } from 'react';
import { Router, useRouter } from './router';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TestDeseo from './components/TestDeseo';
import Products from './components/Products';
import Blog from './components/Blog';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogSabiduria from './pages/BlogSabiduria';
import BlogDescenso from './pages/BlogDescenso';
import BitacoraPage from './pages/BitacoraPage';
import MentoriaPage from './pages/MentoriaPage';
import Deseo90Page from './pages/Deseo90Page';
import TravesiaPage from './pages/TravesiaPage';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';
import TerminosCondicionesPage from './pages/TerminosCondicionesPage';
import AvisoLegalPage from './pages/AvisoLegalPage';

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream-50 font-sans antialiased">
      <Navbar />
      <Hero />
      <TestDeseo />
      <Products />
      <Blog />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Routes() {
  const { path } = useRouter();

  if (path === '/blog/del-deseo-a-la-sabiduria') return <BlogSabiduria />;
  if (path === '/blog/el-proceso-de-descenso') return <BlogDescenso />;
  if (path === '/bitacora-21') return <BitacoraPage />;
  if (path === '/mentoria-evolutiva') return <MentoriaPage />;
  if (path === '/deseo-90') return <Deseo90Page />;
  if (path === '/travesia-deseo') return <TravesiaPage />;
  if (path === '/politica-de-privacidad') return <PoliticaPrivacidadPage />;
  if (path === '/terminos-y-condiciones') return <TerminosCondicionesPage />;
  if (path === '/aviso-legal') return <AvisoLegalPage />;
  return <Home />;
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
