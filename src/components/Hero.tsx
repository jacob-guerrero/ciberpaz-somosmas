import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="animate-fade-in-up mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Somos<span className="text-accent">+</span>
            </h1>
          </div>
          
          {/* Main Headline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 leading-tight">
              Conectamos ciudadanos para construir{" "}
              <span className="text-accent font-bold">paz</span>,{" "}
              <span className="text-accent font-bold">convivencia</span> y{" "}
              <span className="text-accent font-bold">futuro</span>{" "}
              en Pasto y Nariño
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Una plataforma ciudadana donde reportamos, validamos y celebramos acciones 
              que transforman nuestra comunidad hacia un futuro más seguro y sostenible.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group">
              Únete ahora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Ver cómo funciona
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;