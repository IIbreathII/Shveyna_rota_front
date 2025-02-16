"use client"

import '$style/globals.css'
import Header from '$component/Header'
import { usePathname } from 'next/navigation';
import Footer from '$component/Footer';
import { LangProvider } from '$component/Context/LangContext';
import { useEffect } from 'react';

export default function RootLayout({ children }) {

  const path = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (

    <html lang="en">

      <head>
        <title>Швейна рота</title>
        <meta name="description" content='Волонтерський проєкт - "Швейна рота"' />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="волонтерство, знання, платформа, пошиття, швейна рота, швея" />
        <meta name="author" content="Швейна рота" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Neucha&family=Unbounded:wght@200..900&display=swap" rel="stylesheet" />
      </head>

      <body>
        <LangProvider>
          <div className='wrapper'>
            {!path.includes('dashboard') &&
              <Header></Header>
            }
            {children}
            {!path.includes('dashboard') && !path.includes('guides') && !path.includes('auth') &&
              <Footer></Footer>
            }
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
