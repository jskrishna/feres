// app/layout.js

import '../styles/globals.css'; // Import global styles here
import BottomNavigation from '../components/BottomNavigation';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Feres User App</title>
      </head>
      <body className="bg-gray-50 min-h-screen pb-16">
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
