const reviews = [
  ['Schnelle Rückmeldung und klare Kommunikation. Wir wussten von Anfang an, wie der Ablauf aussieht.', 'Familie K. aus München-Haidhausen'],
  ['Saubere Arbeit im Bad und pünktlicher Termin. Genau so wünscht man sich einen Handwerksbetrieb.', 'Herr M. aus München-Pasing'],
  ['Auch bei einer kleineren Reparatur zuverlässig und fair beraten. Jederzeit wieder.', 'Frau M. aus München-Bogenhausen']
] as const;

export function Reviews() {
  return (
    <section id="bewertungen" className="section section-alt">
      <div className="container">
        <h2>Das sagen Kunden</h2>
        {/* Beispielbewertungen / Demo-Inhalte */}
        <div className="card-grid">
          {reviews.map(([text, author]) => (
            <blockquote key={author} className="card review">
              <p>“{text}”</p>
              <cite>{author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
