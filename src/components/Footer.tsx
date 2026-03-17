export default function Footer() {
  return (
    <footer className="bg-forest py-12 text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold text-warm-white">
            Woolware by Manu
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Handgemachte Wollprodukte aus Deutschland. Jedes Stück ein Unikat,
            gefertigt mit Liebe und Leidenschaft.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-warm-white">
            Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-warm-white">Startseite</a></li>
            <li><a href="#ueber-uns" className="hover:text-warm-white">Über uns</a></li>
            <li><a href="#produkte" className="hover:text-warm-white">Produkte</a></li>
            <li><a href="#kontakt" className="hover:text-warm-white">Kontakt</a></li>
            <li><a href="#" className="hover:text-warm-white">Impressum</a></li>
            <li><a href="#" className="hover:text-warm-white">Datenschutz</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-warm-white">
            Kontakt
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="mailto:info@woolwarebymanu.de" className="hover:text-warm-white">
                info@woolwarebymanu.de
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/woolwarebymanu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-white"
              >
                Instagram: @woolwarebymanu
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/20 px-6 pt-6 text-center text-xs">
        © 2026 Woolware by Manu. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
