'use client';
import Hero from './components/herosection';
import Content from './components/content';
import { ThemeProvider } from '@material-tailwind/react';
import { Suspense, useState, useEffect } from 'react';
import Loader from './Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingInterval = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Set the loading interval duration in milliseconds (e.g., 3000ms = 3 seconds)

    return () => {
      clearTimeout(loadingInterval);
    };
  }, []);
  return (
    <div data-theme="mytheme">
      <ThemeProvider>
        <Suspense fallback={<Loader />}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Hero />
              <Content />
            </>
          )}
        </Suspense>
      </ThemeProvider>
    </div>
  );
}
