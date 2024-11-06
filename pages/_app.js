import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col w-full">
    <Header />
     <main className="flex-grow pt-6 px-4 md:px-0 py-0">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
     </main>
    <Footer />
    </div>
  
);
  
}
