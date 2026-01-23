import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8801XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 text-[#00A63E] bottom-6 lg:right-[8.5rem] right-[2.5rem] animate-float hover:scale-110 transition-transform"
    >
      <IoLogoWhatsapp className="h-12 w-14 drop-shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
