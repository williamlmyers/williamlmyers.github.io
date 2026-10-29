export const metadata = {
  title: 'William L. Myers | Executive Portfolio — IT, High-Performance Construction & Philanthropy',
  description:
    'Executive portfolio of William L. Myers (Bill Myers) — IT & Services Consultant, Owner of The James Group LLC, Principal at KO Builders, National Supply Lead at Bestwall Supply, and Founder of the Power Giving Foundation.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
