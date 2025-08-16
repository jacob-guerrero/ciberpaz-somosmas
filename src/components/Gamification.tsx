import { Trophy, Star, Target, Users, Medal, Shield, Leaf, Edit } from "lucide-react";

const Gamification = () => {
  const badges = [
    {
      icon: Shield,
      title: "Guardián de Barrio",
      description: "Por reportar y resolver situaciones de seguridad",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Leaf,
      title: "Aliado Verde",
      description: "Por contribuir a la preservación del medio ambiente",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Target,
      title: "Defensor Digital",
      description: "Por promover derechos y seguridad digital",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Edit,
      title: "Autor Íntegro",
      description: "Por reportes verificados y de alta calidad",
      color: "bg-primary/10 text-primary"
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: "Reportes verificados",
      points: "+10 puntos",
      description: "Por cada reporte que pasa validación comunitaria"
    },
    {
      icon: Users,
      title: "Validaciones correctas",
      points: "+5 puntos",
      description: "Por ayudar a validar reportes de otros ciudadanos"
    },
    {
      icon: Trophy,
      title: "Retos completados",
      points: "+20 puntos",
      description: "Por completar módulos de aprendizaje CiberPaz"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="gamification">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-primary">Gamificación</span> positiva
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ganas puntos al reportar hechos verificados, apoyar con validaciones, 
              y completar retos de aprendizaje en CiberPaz. 
              <span className="text-primary font-semibold"> Sin competencia tóxica</span>, 
              solo logros colectivos por barrio y escuela.
            </p>
          </div>

          {/* Points System */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              ¿Cómo ganas <span className="text-accent">puntos</span>?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="animate-fade-in-up gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{achievement.title}</h4>
                  <div className="text-2xl font-bold text-accent mb-2">{achievement.points}</div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
              Insignias y <span className="text-secondary">reconocimientos</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {badges.map((badge, index) => (
                <div 
                  key={badge.title}
                  className="animate-fade-in-up gradient-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${badge.color}`}>
                    <badge.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Collective Focus */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <Medal className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Logros colectivos que nos unen
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                No hay competencia individual tóxica. Celebramos los logros de cada barrio y escuela, 
                porque entendemos que el verdadero cambio surge cuando trabajamos juntos hacia objetivos comunes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                  🏆 Barrio más participativo
                </span>
                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full">
                  🌱 Escuela más verde
                </span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full">
                  🤝 Comunidad más unida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;