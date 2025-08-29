import { Users, Shield, BookOpen, Leaf, Heart } from "lucide-react";
import pillarsImage from "@/assets/pillars-icons.jpg";

const About = () => {
  const pillars = [
    {
      icon: Users,
      title: "Convivencia digital",
      description: "Promovemos espacios digitales seguros y respetuosos"
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu información y privacidad en línea"
    },
    {
      icon: Leaf,
      title: "Medio ambiente",
      description: "Cuidamos nuestro entorno para las futuras generaciones"
    },
    {
      icon: Heart,
      title: "Diversidad",
      description: "Celebramos y respetamos nuestras diferencias culturales"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-section" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              ¿Qué es <span className="text-primary">Somos+</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Somos una plataforma ciudadana para reportar, validar y celebrar acciones 
              que afectan o mejoran nuestra convivencia, medio ambiente y derechos digitales. 
              <span className="text-primary font-semibold"> Con gamificación positiva</span>, 
              convertimos la empatía y vigilancia ciudadana en motores de cambio.
            </p>
          </div>

          {/* Pillars */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              Nuestros 5 pilares <span className="text-secondary">CiberPaz</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.title}
                  className="animate-fade-in-up gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{pillar.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center animate-fade-in-up bg-primary/5 rounded-2xl p-8 md:p-12">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
              "Creemos que cada ciudadano tiene el poder de transformar su comunidad. 
              Somos+ te da las herramientas para hacer esa transformación visible, 
              medible y celebrable."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;