import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phone = "254705430417";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=${phone}`
      : `https://web.whatsapp.com/send?phone=${phone}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-3 bg-card text-foreground rounded-lg px-4 py-2 shadow-elevated border border-border/50 whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-border/50" />
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-secondary animate-pulse opacity-30" />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 relative z-10" />
        
        {/* Online indicator */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full border-2 border-background flex items-center justify-center">
          <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse" />
        </div>
      </button>
    </div>
  );
}
