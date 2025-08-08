import Link from "next/link";
import { cars } from "../../../data/cars";

export const metadata = {
  title: "Inventar – Admin | Automobili Galerija",
};

export default function InventoryPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Inventar</h1>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                VIN
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vozilo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Godina
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cijena (€)
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cars.map((car) => (
              <tr key={car.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {car.vin}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {car.make} {car.model}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {car.year}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  €{car.sellPrice.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                  {car.status}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <Link
                    href={`/admin/vozilo/${car.id}`}
                    className="text-red-600 hover:underline"
                  >
                    Uredi
                  </Link>
                  <Link
                    href={`/vozila/${car.id}`}
                    className="text-gray-600 hover:underline"
                    target="_blank"
                  >
                    Pregled
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}