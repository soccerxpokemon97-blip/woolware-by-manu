"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    window.location.href = `mailto:info@woolwarebymanu.de?subject=Anfrage von ${name}&body=${message}%0A%0AVon: ${name} (${email})`;
  };

  return (
    <section id="kontakt" className="bg-cream-dark py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Kontakt
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brown-light">
          Haben Sie Fragen oder möchten Sie ein individuelles Stück bestellen?
          Schreiben Sie mir gerne!
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brown">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-brown-light/30 bg-warm-white px-4 py-3 text-brown placeholder:text-brown-light/50 focus:border-rust focus:ring-1 focus:ring-rust focus:outline-none"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brown">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-brown-light/30 bg-warm-white px-4 py-3 text-brown placeholder:text-brown-light/50 focus:border-rust focus:ring-1 focus:ring-rust focus:outline-none"
              placeholder="ihre@email.de"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brown">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-brown-light/30 bg-warm-white px-4 py-3 text-brown placeholder:text-brown-light/50 focus:border-rust focus:ring-1 focus:ring-rust focus:outline-none resize-none"
              placeholder="Ihre Nachricht..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-rust px-8 py-3 font-semibold text-warm-white transition-colors hover:bg-rust-dark md:w-auto"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  );
}
