import Link from "next/link";
import { cars } from "../../data/cars";

export const metadata = {
  title: "Admin – Automobili Galerija",
};

export default function AdminHome() {
  const counts = cars.reduce(
    (acc, car) => {
      acc.total++;
      acc[car.status] = (acc[car.status] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number; total: number },
  );
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Admin kontrolna ploča</h1>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Ukupno vozila</h2>
          <p className="mt-2 text-3xl font-bold text-red-600">{counts.total}</p>
        </div>
        {(
          [
            "Nabavljeno",
            "Priprema",
            "Objavljeno",
            "Rezervirano",
            "Prodano",
            "Arhiva",
          ] as const
        ).map((status) => (
          <div
            key={status}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900">{status}</h2>
            <p className="mt-2 text-3xl font-bold text-red-600">
              {counts[status] || 0}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
          <Link
            href="/admin/inventory"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition-colors"
          >
            Upravljanje vozilima
          </Link>
          <Link
            href="/admin/novo-vozilo"
            className="inline-flex items-center justify-center rounded-md border border-red-600 px-4 py-2 text-red-600 font-medium hover:bg-red-50 transition-colors"
          >
            Dodaj novo vozilo
          </Link>
        </div>
    </section>
  );
}