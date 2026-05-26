export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Meisterbetrieb · Regional erreichbar · Faire Beratung · Schnelle Rückmeldung</p>
          <h1>Ihr Handwerker für saubere Arbeit, klare Termine und schnelle Hilfe.</h1>
          <p>
            Müller & Sohn ist Ihr lokaler Fachbetrieb für Sanitär, Heizung, Badmodernisierung und Reparaturen in München und Umgebung.
          </p>
          <div className="hero-cta">
            <a href="#kontakt" className="btn btn-primary">Angebot anfragen</a>
            <a href="tel:0891234567" className="btn btn-outline">Jetzt anrufen</a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Handwerker bei sauberer Badmodernisierung" />
      </div>
    </section>
  );
}
