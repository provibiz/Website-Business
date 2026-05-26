const faqs = [
  ['Wie schnell bekomme ich eine Rückmeldung?', 'In der Regel melden wir uns innerhalb von 24 Stunden zurück, oft auch früher.'],
  ['Arbeiten Sie auch für kleine Reparaturen?', 'Ja, wir übernehmen auch kleinere Reparaturen, wenn sie fachgerecht und zuverlässig erledigt werden sollen.'],
  ['In welchem Gebiet sind Sie tätig?', 'Unser Schwerpunkt liegt in München und im Umkreis von etwa 30 Kilometern.'],
  ['Kann ich Bilder vom Schaden mitsenden?', 'Ja, das hilft uns bei der ersten Einschätzung und beschleunigt die Planung.'],
  ['Bieten Sie Notdienst an?', 'Bei dringenden Fällen bieten wir kurzfristige Termine nach Verfügbarkeit an.'],
  ['Bekomme ich vorab ein Angebot?', 'Ja, Sie erhalten vor der Ausführung eine nachvollziehbare Einschätzung oder ein Angebot.'],
  ['Arbeiten Sie auch für Gewerbekunden?', 'Ja, wir betreuen sowohl private als auch gewerbliche Auftraggeber.']
] as const;

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2>Häufige Fragen</h2>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q} className="faq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
