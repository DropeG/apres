import { Mail, Instagram } from 'lucide-react';

function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
          Ponte en Contacto
        </h2>
        <p className="text-xl text-gray-600 font-light mb-16 leading-relaxed">
          ¿Preguntas sobre nuestros servicios? Nos encantaría escucharte.
          Contáctanos por email o síguenos en redes sociales.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:holaapres@gmail.com"
            className="flex flex-col items-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Mail className="w-12 h-12 mb-4 text-gray-800" strokeWidth={1.5} />
            <p className="text-lg font-light tracking-wide mb-2">Email</p>
            <p className="text-gray-600 font-light break-all">holaapres@gmail.com</p>
          </a>

          <a
            href="https://instagram.com/weapres"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Instagram className="w-12 h-12 mb-4 text-gray-800" strokeWidth={1.5} />
            <p className="text-lg font-light tracking-wide mb-2">Instagram</p>
            <p className="text-gray-600 font-light">@weapres</p>
          </a>
        </div>

        <p className="text-gray-500 font-light">
          Responderemos tus mensajes en la brevedad posible.
        </p>
      </div>
    </section>
  );
}

export default Contact;
