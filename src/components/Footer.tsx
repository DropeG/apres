function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-4xl font-light mb-4 tracking-wider">APRÈS</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Elevando el estándar de hospitalidad en destinos de montaña.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-xl font-light mb-4 tracking-wide">
              Próximamente
            </h4>
            <p className="text-gray-400 font-light text-right">
              Estamos preparando algo especial para ti.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 font-light text-sm">
            © {new Date().getFullYear()} Après. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
