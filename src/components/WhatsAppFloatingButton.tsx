import whatsappLogo from "@/assets/whatsapp-logo.svg";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512982519116?text=I%20would%20like%20to%20know%20more%20about%20Bitradex', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Contact us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <img 
        src={whatsappLogo} 
        alt="WhatsApp" 
        className="w-9 h-9 filter brightness-0 invert"
      />
    </button>
  );
};

export default WhatsAppFloatingButton;
