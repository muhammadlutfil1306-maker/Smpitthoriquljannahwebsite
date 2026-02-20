import React, { Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { DynamicBackground } from './components/DynamicBackground';
import { Footer } from './components/Footer';

const Hero = lazy(() => import('./components/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Academics = lazy(() => import('./components/Academics').then(m => ({ default: m.Academics })));
const CoCurricular = lazy(() => import('./components/CoCurricular').then(m => ({ default: m.CoCurricular })));
const Facilities = lazy(() => import('./components/Facilities').then(m => ({ default: m.Facilities })));
const PPDB = lazy(() => import('./components/PPDB').then(m => ({ default: m.PPDB })));

const SectionLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-slate-900 font-sans selection:bg-pink-500 selection:text-white relative">
      <Navigation />

      {/* Scroll Snap Container */}
      <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

        {/* SLIDE 1: HERO */}
        <section id="hero" className="h-screen w-full snap-start relative flex items-center justify-center bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e293b_0%,#0f172a_100%)]" />
          <DynamicBackground />
          <Suspense fallback={<SectionLoader />}>
            <Hero />
          </Suspense>
        </section>

        {/* SLIDE 2: ABOUT */}
        <section id="about" className="h-screen w-full snap-start relative flex items-center justify-center bg-white text-slate-900">
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        </section>

        {/* SLIDE 3: ACADEMICS */}
        <section id="academics" className="h-screen w-full snap-start relative flex items-center justify-center bg-slate-100 text-slate-900">
          <Suspense fallback={<SectionLoader />}>
            <Academics />
          </Suspense>
        </section>

        {/* SLIDE 4: KO-KURIKULER */}
        <section id="cokurikuler" className="h-screen w-full snap-start relative bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_35px,rgba(255,255,255,0.015)_35px,rgba(255,255,255,0.015)_36px)]" />
          <Suspense fallback={<SectionLoader />}>
            <CoCurricular />
          </Suspense>
        </section>

        {/* SLIDE 5: FACILITIES */}
        <section id="facilities" className="h-screen w-full snap-start relative flex items-center justify-center bg-black text-white">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.02)_35px,rgba(255,255,255,0.02)_36px)]" />
          <Suspense fallback={<SectionLoader />}>
            <Facilities />
          </Suspense>
        </section>

        {/* SLIDE 6: PPDB + FOOTER */}
        <section id="ppdb" className="h-screen w-full snap-start relative flex flex-col bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <Suspense fallback={<SectionLoader />}>
            <PPDB />
          </Suspense>
          <Footer />
        </section>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
