import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col w-screen relative">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <Header />
      <main className="flex-grow pt-6 px-4 md:px-0 py-0 relative z-10">
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}
