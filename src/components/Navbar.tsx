import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from '../router';

const logoImages = import.meta.glob('../assets/logo-*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const LOGO_BLANCO: string = logoImages['../assets/logo-blanco.png'] ?? '';
const LOGO_NEGRO: string  = logoImages['../assets/logo-negro.png']  ?? '';

const navLinks = [
  { label: 'Inicio',     href: '#inicio'    },
  { label: 'Test DESEO', href: '#test'       },
  { label: 'Productos',  href: '#productos'  },
  { label: 'Blog',       href: '#blog'       },
  { label: 'Contacto',   href: '#contacto'   },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    if (path === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  };

  const handleLogo = () => {
    setOpen(false);
    navigate('/');
  };

  const logoSrc = scrolled ? LOGO_NEGRO : LOGO_BLANCO;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm border-b border-cream-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button onClick={handleLogo} className="flex items-center">
          {logoSrc && !logoError ? (
            <img
              src={logoSrc}
              alt="Ever Vega — Ruta DESEO"
              className="h-9 md:h-11 w-auto transition-all duration-300"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex flex-col leading-none text-left">
              <span className={`font-serif font-bold text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-earth-700' : 'text-white'}`}>
                RUTA DESEO
              </span>
              <span className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${scrolled ? 'text-terra-500' : 'text-terra-300'}`}>
                Ever Vega
              </span>
            </div>
          )}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terra-500 ${
                scrolled ? 'text-earth-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#test')}
            className="px-5 py-2 bg-terra-500 hover:bg-terra-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Iniciar Test
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-earth-700' : 'text-white'}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="font-sans text-sm font-medium text-earth-700 hover:text-terra-500 text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#test')}
            className="mt-2 px-5 py-3 bg-terra-500 text-white text-sm font-medium rounded-lg"
          >
            Iniciar Test DESEO
          </button>
        </div>
      )}
    </header>
  );
}
