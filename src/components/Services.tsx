const services = [
  ['Sanitärarbeiten', 'Reparaturen, Anschlüsse, Armaturen und Leitungen im privaten und gewerblichen Bereich.'],
  ['Heizungsservice', 'Wartung, Austausch, Störungsbehebung und Modernisierung bestehender Anlagen.'],
  ['Badmodernisierung', 'Planung, Umbau und altersgerechte Lösungen für funktionale, schöne Bäder.'],
  ['Rohr- und Wasserschäden', 'Schnelle Prüfung, Reparatur und Hilfe, um Folgeschäden früh zu vermeiden.'],
  ['Kleinreparaturen', 'Zuverlässige Unterstützung bei kleineren Aufträgen ohne lange Wartezeiten.'],
  ['Wartung & Beratung', 'Regelmäßige Kontrolle und ehrliche Einschätzung, damit Technik zuverlässig bleibt.']
] as const;

export function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="container">
        <h2>Unsere Leistungen</h2>
        <div className="card-grid">
          {services.map(([title, text]) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#kontakt" className="link-cta">Anfrage stellen</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
