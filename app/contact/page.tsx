// import ContactForm from "@/components/contactform";

// export default function ContactPage() {
//   return(
//     <ContactForm />
//   )
// }



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
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactSlider />
        </div>
      </div>
    </div>
  )
}
