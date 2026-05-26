const navItems = ['Leistungen', 'Projekte', 'Über uns', 'Bewertungen', 'FAQ', 'Kontakt'];

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand">Müller & Sohn Handwerk</a>
        <nav className="nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone" href="tel:0891234567">089 1234567</a>
          <a className="btn btn-primary" href="#kontakt">Anfrage stellen</a>
        </div>
      </div>
    </header>
  );
}
