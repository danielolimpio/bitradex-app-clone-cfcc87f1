import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512982519116?text=I%20would%20like%20to%20know%20more%20about%20Bitradex', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default WhatsAppFloatingButton;
