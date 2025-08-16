import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      age: 17,
      role: "Estudiante de bachillerato",
      avatar: "MG",
      quote: "Gracias a Somos+ organizamos una jornada de limpieza en mi barrio. Ahora todos conocemos mejor a nuestros vecinos y trabajamos juntos por un ambiente más limpio.",
      rating: 5,
      location: "Barrio San Vicente, Pasto"
    },
    {
      name: "Juan Carlos Pérez",
      age: 15,
      role: "Estudiante de secundaria",
      avatar: "JP",
      quote: "Ahora sé cómo proteger mis fotos en redes sociales y ayudo a mis amigos con la configuración de privacidad. Los módulos de CiberPaz son súper útiles.",
      rating: 5,
      location: "Barrio Torobajo, Pasto"
    },
    {
      name: "Ana Sofía Muñoz",
      age: 19,
      role: "Universitaria",
      avatar: "AM",
      quote: "Me encanta que no es una competencia, sino que todos trabajamos por el mismo objetivo. Mi escuela ya ganó dos insignias colectivas y estamos muy orgullosos.",
      rating: 5,
      location: "Comuna 1, Pasto"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Historias de <span className="text-primary">nuestra comunidad</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce cómo Somos+ está transformando la vida de jóvenes y ciudadanos 
              en Pasto y Nariño, creando impacto real en sus comunidades.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="animate-fade-in-up gradient-card rounded-xl p-6 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/20 transform rotate-180" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonial.name}, {testimonial.age} años
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Impact */}
          <div className="mt-16 text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Impacto real en nuestras comunidades
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Barrios transformados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">80+</div>
                  <div className="text-muted-foreground">Jornadas comunitarias</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-muted-foreground">Jóvenes capacitados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;