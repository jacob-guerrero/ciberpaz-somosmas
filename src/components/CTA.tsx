import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Play, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="animate-fade-in-up mb-12">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Somos+ es más que una app,{" "}
              <span className="text-accent">es una comunidad</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              ¡Únete y sé parte del cambio en la Región! Juntos construimos el
              futuro que queremos ver.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              asChild
              variant="accent"
              size="xl"
              className="group bg-white text-primary hover:bg-white/90 shadow-hero"
            >
              <a href="https://honeydew-fish-331569.hostingersite.com/">
                <Smartphone className="w-6 h-6" />
                Ingresa Ahora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {/* <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Probar Demo
            </Button> */}
          </div>

          {/* Features Preview */}
          <div
            className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Comunidad activa</h3>
              <p className="text-sm opacity-80">
                Conecta con ciudadanos comprometidos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Impacto inmediato</h3>
              <p className="text-sm opacity-80">
                Ve resultados reales en tu barrio
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Fácil de usar</h3>
              <p className="text-sm opacity-80">
                Interfaz intuitiva y amigable
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div
            className="animate-fade-in-up mt-12 text-center"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-white/70 mb-4">
              Únete a cientos de ciudadanos que ya están cambiando Nariño
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-white font-semibold">
                +500 ciudadanos activos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
