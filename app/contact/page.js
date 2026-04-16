import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Birthly',
  description:
    'Neem contact op met Lumi Cursussen. Vragen over een cursus, boeking of aansluiting als aanbieder? Ons team helpt je graag.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-20 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}