import ContactForm from "@/components/contactform";
import ContactSlider from "@/components/contactview";

export default function ContactPage() {
  return (
    <div
      className="container mx-auto px-4 py-12 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/image3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 justify-between">
        <h1 className="text-4xl font-bold mb-8 text-white text-center md:text-left">
          Contact Me
        </h1>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-1/2 md:h-full">
              <ContactForm />
            </div>
            <div className="md:w-1/2 md:h-full">
              <ContactSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
