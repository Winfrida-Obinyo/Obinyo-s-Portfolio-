import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; 

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-8 mt-auto w-full"> 
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-xs">
          <h4 className="text-2xl font-bold tracking-wider">Dev Winfrida</h4>
          <p className="mt-2 text-white">
            Passionate Software Engineer delivering creative solutions for the web.
          </p>
          <p className="mt-2 text-white">📞 +254 707 656 834</p>
          <p className="mt-1 text-white">✉️ obinyowinfridaa@gmail.com</p>
        </div>

        
        <div className="text-center">
          <h5 className="text-lg font-semibold">Subscribe to our Newsletter</h5>
          <form className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-2 space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md sm:rounded-l-md text-black w-full sm:w-auto"
              required
            />
            <button type="submit" className="bg-[#BAD59E] text-white px-6 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none w-full sm:w-auto hover:bg-[#748A46] transition duration-300">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://github.com"
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com" 
            className="text-white hover:text-[#BAD59E] transition duration-300"
            aria-label="X"
          >
            <SiX size={28} />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-white pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Dev Winfrida. All rights reserved.</p>
        <p className="mt-2">
          Designed with love & creativity.{' '}
          <span className="text-[#BAD59E]">#CodeIsArt</span>
        </p>
        <p className="mt-2">
          <a href="/privacy-policy" className="text-white hover:text-[#BAD59E]">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-white hover:text-[#BAD59E]"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
