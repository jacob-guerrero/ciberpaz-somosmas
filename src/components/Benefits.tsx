import { CheckCircle, Users, GraduationCap, Shield, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Participación ciudadana responsable",
      description: "Involúcrate de manera activa y constructiva en los problemas y soluciones de tu comunidad."
    },
    {
      icon: GraduationCap,
      title: "Educación digital práctica",
      description: "Aprende sobre ciberseguridad, derechos digitales y convivencia a través de experiencias reales."
    },
    {
      icon: Shield,
      title: "Espacios más seguros y limpios",
      description: "Contribuye a crear entornos físicos y digitales más seguros para todos los ciudadanos."
    },
    {
      icon: Award,
      title: "Reconocimiento comunitario",
      description: "Recibe reconocimiento por tus aportes y celebra los logros colectivos de tu barrio."
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-section" id="benefits">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Beneficios para la <span className="text-primary">comunidad</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo Somos+ transforma la participación ciudadana en beneficios 
              tangibles para toda la comunidad.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="animate-fade-in-up gradient-card rounded-xl p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Motivational Message */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white shadow-hero">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cada reporte y acción suma
              </h3>
              <p className="text-xl md:text-2xl font-medium opacity-90">
                Somos más cuando trabajamos <span className="font-bold">juntos</span>
              </p>
              <div className="mt-8 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Ciudadanos activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1,200+</div>
                  <div className="text-sm opacity-80">Reportes validados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Barrios participando</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;