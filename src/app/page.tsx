import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProductSection from '@/app/components/ProductSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';


export default function BicycleLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
