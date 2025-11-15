import { Home, Sparkles, Package } from 'lucide-react';

function WhyApres() {
  const services = [
    {
      icon: Home,
      title: 'Hosting',
      description:
        'Gestionamos tu propiedad de principio a fin. Desde la publicación hasta la atención al huésped, nos encargamos de todo para maximizar tu rentabilidad.',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping',
      description:
        'Servicio de limpieza profesional que garantiza que cada espacio brille. Atención meticulosa a cada detalle para crear ambientes impecables.',
    },
    {
      icon: Package,
      title: 'Amenities',
      description:
        'Selección cuidada de productos y servicios que elevan la experiencia. Desde detalles de bienvenida hasta servicios premium personalizados.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide text-center">
          ¿Por qué Après?
        </h2>
        <p className="text-xl text-gray-600 font-light text-center mb-20 max-w-3xl mx-auto leading-relaxed">
          Combinamos experiencia, dedicación y pasión por el detalle para ofrecer
          servicios que transforman propiedades en destinos deseados.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-10 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 mb-6 text-gray-800" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Cada servicio está diseñado con un objetivo: crear experiencias
            memorables que superen las expectativas de huéspedes y propietarios
            por igual.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyApres;
