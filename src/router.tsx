import { createContext, useContext, useState, useEffect } from 'react';

interface RouterCtx {
  path: string;
  navigate: (to: string) => void;
}

const ctx = createContext<RouterCtx>({ path: '/', navigate: () => {} });

export function useRouter() {
  return useContext(ctx);
}

export function Router({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  function navigate(to: string) {
    window.history.pushState(null, '', to);
    setPath(to);
    window.scrollTo({ top: 0 });
  }

  return <ctx.Provider value={{ path, navigate }}>{children}</ctx.Provider>;
}
