import { BookOpen, Shield, Users, Leaf, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Learning = () => {
  const modules = [
    {
      icon: Shield,
      title: "Protege tu cuenta en 3 pasos",
      duration: "5 min",
      level: "Básico",
      description: "Aprende a configurar contraseñas seguras y autenticación de dos factores.",
      topics: ["Contraseñas seguras", "2FA", "Privacidad"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      icon: Users,
      title: "Convivencia digital sana",
      duration: "8 min",
      level: "Intermedio",
      description: "Descubre cómo interactuar respetuosamente en redes sociales y espacios digitales.",
      topics: ["Netiqueta", "Respeto digital", "Comunicación"],
      color: "bg-secondary/10 text-secondary border-secondary/20"
    },
    {
      icon: Leaf,
      title: "Tecnología y medio ambiente",
      duration: "6 min",
      level: "Básico",
      description: "Conoce el impacto ambiental de la tecnología y cómo ser más sostenible.",
      topics: ["Huella digital", "E-waste", "Sostenibilidad"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      icon: BookOpen,
      title: "Derechos de autor digital",
      duration: "10 min",
      level: "Avanzado",
      description: "Entiende qué puedes y no puedes compartir en internet de forma legal.",
      topics: ["Copyright", "Creative Commons", "Uso justo"],
      color: "bg-primary/10 text-primary border-primary/20"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-section" id="learning">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Módulos de aprendizaje <span className="text-primary">CiberPaz</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende en minutos sobre convivencia digital, seguridad en línea, 
              derechos de autor y medio ambiente. Conocimiento práctico para la vida digital.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {modules.map((module, index) => (
              <div 
                key={module.title}
                className="animate-fade-in-up gradient-card rounded-xl p-6 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${module.color} border`}>
                    <module.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </div>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {module.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {module.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {module.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-1 text-primary" />
                    Certificado incluido
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white shadow-hero">
              <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Comienza tu aprendizaje hoy
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Cada módulo está diseñado para ser práctico, accesible y aplicable en tu vida diaria. 
                Aprende a tu ritmo y gana insignias por completar los retos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Descubre los módulos
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Ver demo gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;