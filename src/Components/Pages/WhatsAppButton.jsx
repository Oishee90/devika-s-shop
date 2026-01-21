import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/8801XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 text-[#00A63E] bottom-6 lg:right-[8.5rem] right-[2.5rem]"
      animate={{ y: [0, -12, 0] }}   // up-down floating
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15 }}   // hover effect
    >
      <IoLogoWhatsapp className="h-12 w-14 drop-shadow-lg" />
    </motion.a>
  );
};

export default WhatsAppButton;
