import { MessageSquare, Users, TrendingUp, Target, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Reporta",
      description: "Reporta una situación o buena acción en tu barrio que afecte la convivencia o el medio ambiente.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Valida",
      description: "La comunidad valida tu reporte y nuestros moderadores acompañan el proceso para asegurar veracidad.",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Suma puntos",
      description: "Tu reporte suma puntos, genera aprendizajes colectivos y contribuye a mejorar tu barrio.",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Construye",
      description: "Juntos alcanzamos metas de paz, convivencia y sostenibilidad para toda la comunidad.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              ¿Cómo <span className="text-primary">funciona</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Un proceso sencillo de 4 pasos que transforma la participación ciudadana 
              en acciones concretas para el cambio social.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative z-10">
                  <div 
                    className="animate-fade-in-up gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center mt-4">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Listo para ser parte del cambio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a cientos de ciudadanos que ya están construyendo un mejor futuro para Nariño.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;