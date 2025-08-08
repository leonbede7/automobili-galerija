import CarCard from "../../components/CarCard";
import { cars } from "../../data/cars";

export const metadata = {
  title: "Rabljena vozila – Automobili Galerija",
  description:
    "Pogledajte našu ponudu provjerenih rabljenih vozila. Pronađite svoj automobil uz potpunu transparentnost i jamstvo.",
};

export default function VozilaPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Ponuda vozila</h1>
      {cars.length === 0 ? (
        <p>Trenutno nema dostupnih vozila. Posjetite nas uskoro!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}