function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-wide">
            ¿Quiénes Somos?
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light">
            <p>
              Après nace de la pasión por crear experiencias únicas en la
              montaña. Somos un equipo dedicado a transformar cada estadía en un
              momento inolvidable.
            </p>
            <p>
              Con años de experiencia en la industria hotelera y el turismo de
              montaña, entendemos las necesidades de nuestros huéspedes y las
              expectativas de los propietarios.
            </p>
            <p>
              Nuestro compromiso es brindar servicios de excelencia que elevan
              el estándar de hospitalidad en destinos de montaña.
            </p>
          </div>
        </div>
        <div className="relative h-96 md:h-[600px]">
          <img
            src="/WhatsApp Image 2025-11-14 at 9.33.26 PM (1).jpeg"
            alt="Après Experience"
            className="w-full h-full object-cover rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
