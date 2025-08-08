/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "../../../data/cars";


export async function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export function generateMetadata({ params }: any) {
  const car = cars.find((c) => c.id === params.id);
  return {
    title: car
      ? `${car.make} ${car.model} ${car.year} – Automobili Galerija`
      : "Vozilo nije pronađeno",
    description: car
      ? `Detaljni opis za ${car.make} ${car.model} ${car.year}. Provjerite cijenu, opremu i dostupnost.`
      : undefined,
  };
}

export default function VoziloDetail({ params }: any) {
  const car = cars.find((c) => c.id === params.id);
  if (!car) return notFound();
  const {
    id,
    make,
    model,
    year,
    kilometers,
    power,
    fuel,
    transmission,
    drive,
    euroNorm,
    co2,
    color,
    equipment,
    sellPrice,
    description,
    images,
  } = car;
  const mainImg = images && images.length > 0 ? images[0] : "/placeholder_light_gray_block.png";
  return (
    <section className="space-y-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
          <Image
            src={mainImg}
            alt={`${make} ${model}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {make} {model} {year}
          </h1>
          <p className="text-2xl text-red-600 font-semibold mt-2">
            €{sellPrice.toLocaleString()}
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <strong>Godina proizvodnje:</strong> {year}
            </p>
            <p className="text-gray-700">
              <strong>Kilometri:</strong> {kilometers.toLocaleString()} km
            </p>
            <p className="text-gray-700">
              <strong>Snaga:</strong> {power} kW
            </p>
            <p className="text-gray-700">
              <strong>Gorivo:</strong> {fuel}
            </p>
            <p className="text-gray-700">
              <strong>Mjenjač:</strong> {transmission}
            </p>
            <p className="text-gray-700">
              <strong>Pogon:</strong> {drive}
            </p>
            <p className="text-gray-700">
              <strong>Euro norma:</strong> {euroNorm}
            </p>
            {co2 && (
              <p className="text-gray-700">
                <strong>CO₂:</strong> {co2} g/km
              </p>
            )}
            {color && (
              <p className="text-gray-700">
                <strong>Boja:</strong> {color}
              </p>
            )}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Oprema
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              {equipment.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {description && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">Opis</h2>
              <p className="mt-2 text-gray-700 whitespace-pre-line">
                {description}
              </p>
            </div>
          )}
          <div className="mt-8 flex gap-4">
            <Link
              href={`/vozila/${id}/sticker`}
              className="rounded-md bg-red-600 text-white px-4 py-2 font-medium hover:bg-red-700 transition-colors"
            >
              Printaj sticker
            </Link>
            <Link
              href={`/uvoz?model=${make}+${model}`}
              className="rounded-md border border-red-600 text-red-600 px-4 py-2 font-medium hover:bg-red-50 transition-colors"
            >
              Zatraži ponudu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}