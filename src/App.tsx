import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-espresso">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <StorySection />
        <GallerySection />
        <TestimonialSection />
        <VisitSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
