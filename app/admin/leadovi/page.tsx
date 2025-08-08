export const metadata = {
  title: "Leadovi – Admin | Automobili Galerija",
};

export default function LeadoviPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Leadovi</h1>
      <p className="text-gray-700">
        Ova stranica će prikazivati prijave za uvoz po narudžbi i otkup vozila.
        U ovoj demo verziji nema implementacije backend logike. Svi upiti koje
        pošaljete putem obrazaca za uvoz i otkup ostaju lokalni i nisu pohranjeni.
      </p>
    </section>
  );
}