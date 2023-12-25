import Navigation from "./navigation/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "./Footer";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
