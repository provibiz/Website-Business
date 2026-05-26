const steps = [
  'Anfrage senden oder anrufen',
  'Kurze Einschätzung durch uns',
  'Termin oder Angebot erhalten',
  'Fachgerechte Ausführung'
];

export function Process() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2>So läuft eine Anfrage ab</h2>
        <ol className="steps">
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
    </section>
  );
}
