const projects = [
  { title: 'Badmodernisierung in München-Sendling', problem: 'Altes Bad mit wenig Stauraum und hohem Wasserverbrauch.', solution: 'Neues Raumkonzept mit moderner Sanitärtechnik und optimierter Leitungsführung.', result: 'Mehr Komfort im Alltag und ein deutlich funktionaleres Bad.' },
  { title: 'Heizkörpertausch in Schwabing', problem: 'Ungleichmäßige Wärme und störanfällige ältere Heizkörper.', solution: 'Austausch der Komponenten und hydraulische Feinabstimmung.', result: 'Stabile Wärmeverteilung und besser planbare Heizleistung.' },
  { title: 'Reparatur nach Wasserschaden in Giesing', problem: 'Leck in einer Zuleitung mit Feuchtigkeit an Wandflächen.', solution: 'Leckortung, Leitungsreparatur und koordinierte Nacharbeiten.', result: 'Schaden zügig begrenzt und Versorgung wiederhergestellt.' },
  { title: 'Gäste-WC Modernisierung in Trudering', problem: 'Veraltete Ausstattung mit wenig Bewegungsfläche.', solution: 'Kompakte Neuplanung, neue Armaturen und robuste Oberflächen.', result: 'Modernes Gäste-WC mit besserer Nutzbarkeit.' }
];

export function Projects() {
  return (
    <section id="projekte" className="section">
      <div className="container">
        <h2>Arbeiten, die man sieht.</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p><strong>Problem:</strong> {p.problem}</p>
              <p><strong>Lösung:</strong> {p.solution}</p>
              <p><strong>Ergebnis:</strong> {p.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
