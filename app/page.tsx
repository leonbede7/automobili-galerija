import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-xl flex-shrink-0">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Dobro došli u <br /> Automobili Galerija
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Rabljena vozila vrhunske kvalitete iz uvoza uz potpunu transparentnost.
              Pronađite svoj idealan automobil, zatražite uvoz po narudžbi ili prodajte
              svoj stari automobil po najboljoj cijeni.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/vozila"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                Pogledaj vozila
              </Link>
              <Link
                href="/uvoz"
                className="inline-flex items-center justify-center rounded-md border border-red-600 px-6 py-3 text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                Uvoz po narudžbi
              </Link>
              <Link
                href="/otkup"
                className="inline-flex items-center justify-center rounded-md border border-red-600 px-6 py-3 text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                Otkup vozila
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
            <Image
              src="/automobili-galerija-text.png"
              alt="Automobili Galerija"
              width={400}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="rounded-lg bg-white shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Zašto odabrati nas
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-start">
            <div className="text-red-600 text-3xl mb-2">✓</div>
            <h3 className="text-lg font-semibold text-gray-900">
              Provjerena vozila
            </h3>
            <p className="text-gray-600 mt-1">
              Svako vozilo prolazi detaljnu provjeru, servis i homologaciju prije nego
              dođe u naš salon.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-red-600 text-3xl mb-2">✓</div>
            <h3 className="text-lg font-semibold text-gray-900">
              12 mjeseci jamstvo
            </h3>
            <p className="text-gray-600 mt-1">
              Nudimo jamstvo 12 mjeseci na motor i mjenjač za većinu vozila iz naše
              ponude.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-red-600 text-3xl mb-2">✓</div>
            <h3 className="text-lg font-semibold text-gray-900">
              Transparentno poslovanje
            </h3>
            <p className="text-gray-600 mt-1">
              Jasno prikazane cijene, detaljni opisi i povijest vozila te svi troškovi
              u procesu uvoza i prodaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}