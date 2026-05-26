export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Müller & Sohn Handwerk</strong>
          <p>Sanitär · Heizung · Badmodernisierung · Reparaturen</p>
        </div>
        <nav aria-label="Footer Links" className="footer-links">
          <a href="#leistungen">Leistungen</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}
