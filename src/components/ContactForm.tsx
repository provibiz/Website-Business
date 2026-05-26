export function ContactForm() {
  return (
    <section id="kontakt" className="section section-contact">
      <div className="container contact-layout">
        <div>
          <h2>Anfrage stellen</h2>
          <p>Beschreiben Sie kurz Ihr Anliegen. Wir melden uns schnellstmöglich zurück.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>Name<input type="text" name="name" required /></label>
            <label>Telefonnummer<input type="tel" name="phone" required /></label>
            <label>E-Mail<input type="email" name="email" required /></label>
            <label>Ort / Stadtteil<input type="text" name="location" required /></label>
            <label>Anliegen
              <select name="topic" defaultValue="Sanitär">
                <option>Sanitär</option><option>Heizung</option><option>Badmodernisierung</option>
                <option>Reparatur</option><option>Wartung</option><option>Sonstiges</option>
              </select>
            </label>
            <label>Nachricht<textarea name="message" rows={5} required /></label>
            <label className="checkbox"><input type="checkbox" name="callback" /> Ich wünsche einen Rückruf</label>
            <button className="btn btn-primary" type="submit">Anfrage senden</button>
            <p className="form-note">Frontend-Demo · Keine echte Übertragung</p>
          </form>
        </div>
        <aside className="contact-details">
          <h3>Müller & Sohn Handwerk</h3>
          <p>Musterstraße 12<br />80331 München</p>
          <p>Telefon: <a href="tel:0891234567">089 1234567</a><br />E-Mail: <a href="mailto:kontakt@mueller-handwerk.de">kontakt@mueller-handwerk.de</a></p>
          <p>Öffnungszeiten:<br />Mo–Fr 08:00–17:00<br />Notfälle nach Vereinbarung</p>
        </aside>
      </div>
    </section>
  );
}
