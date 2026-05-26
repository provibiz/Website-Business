const reasons = [
  'Feste Ansprechpartner statt wechselnder Kontakte',
  'Transparente Absprachen und nachvollziehbare Schritte',
  'Saubere Baustellen und respektvoller Umgang vor Ort',
  'Realistische Termine und verlässliche Rückmeldungen',
  'Regionale Nähe in und um München',
  'Erfahrung im Handwerk über viele Jahre',
  'Beratung ohne Verkaufsdruck'
];

export function WhyUs() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2>Warum Kunden uns beauftragen</h2>
        <ul className="reasons">
          {reasons.map((reason) => <li key={reason}>{reason}</li>)}
        </ul>
      </div>
    </section>
  );
}
