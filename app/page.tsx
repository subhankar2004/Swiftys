export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Luxury Vehicle Storage in Montréal
          </h1>

          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
            Premium indoor storage, concierge automotive services, and
            white-glove care for your high-value vehicles.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition"
            >
              Request Storage
            </a>

            <a
              href="/services"
              className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          A Secure Facility Designed for Excellence
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-neutral-400">
          Our Montréal-based luxury car storage facility offers 24/7
          surveillance, climate control, and professional vehicle care
          services tailored for collectors and enthusiasts.
        </p>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-neutral-950 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Comprehensive Automotive Services
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-medium">Secure Storage</h3>
            <p className="mt-4 text-neutral-400">
              Climate-controlled indoor storage with full monitoring.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Concierge Care</h3>
            <p className="mt-4 text-neutral-400">
              Pickup & drop-off, detailing, PPF, ceramic coating.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Security Monitoring</h3>
            <p className="mt-4 text-neutral-400">
              24/7 surveillance with secure vehicle oversight.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Entrust Your Vehicle to Professionals
        </h2>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
          Experience premium automotive storage and concierge services in
          Montréal.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-neutral-200 transition"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}