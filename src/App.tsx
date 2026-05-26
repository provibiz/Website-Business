import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactBar } from './components/ContactBar';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactBar />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <About />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
