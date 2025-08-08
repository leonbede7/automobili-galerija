"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cars } from "../../../../data/cars";
import { Car, CarStatus } from "../../../../types/car";


const STATUS_OPTIONS: CarStatus[] = [
  "Nabavljeno",
  "Priprema",
  "Objavljeno",
  "Rezervirano",
  "Prodano",
  "Arhiva",
];

export default function EditCarPage({ params }: any) {
  const router = useRouter();
  const existing = cars.find((c) => c.id === params.id);
  const [car, setCar] = useState<Partial<Car> | null>(existing || null);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (!existing) {
      router.push("/admin/inventory");
    }
  }, [existing, router]);
  if (!car) return null;
  const handleChange = (field: keyof Car, value: any) => {
    setCar((prev) => ({ ...prev!, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // update car object locally; in real app, send API call
    console.log("Updated car", car);
    setSaved(true);
  };
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Uredi vozilo – {car.make} {car.model}
      </h1>
      {saved && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
          Promjene spremljene (lokalno).
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">VIN</label>
            <input
              required
              type="text"
              value={car.vin || ""}
              onChange={(e) => handleChange("vin", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={car.status}
              onChange={(e) => handleChange("status", e.target.value as CarStatus)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Marka</label>
            <input
              required
              type="text"
              value={car.make || ""}
              onChange={(e) => handleChange("make", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Model</label>
            <input
              required
              type="text"
              value={car.model || ""}
              onChange={(e) => handleChange("model", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Godina</label>
            <input
              required
              type="number"
              value={car.year || 0}
              onChange={(e) => handleChange("year", parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Kilometri</label>
            <input
              required
              type="number"
              value={car.kilometers || 0}
              onChange={(e) => handleChange("kilometers", parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Snaga (kW)</label>
            <input
              required
              type="number"
              value={car.power || 0}
              onChange={(e) => handleChange("power", parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gorivo</label>
            <input
              required
              type="text"
              value={car.fuel || ""}
              onChange={(e) => handleChange("fuel", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mjenjač</label>
            <input
              required
              type="text"
              value={car.transmission || ""}
              onChange={(e) => handleChange("transmission", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pogon</label>
            <input
              required
              type="text"
              value={car.drive || ""}
              onChange={(e) => handleChange("drive", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Euro norma</label>
            <input
              required
              type="text"
              value={car.euroNorm || ""}
              onChange={(e) => handleChange("euroNorm", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cijena (€)</label>
            <input
              required
              type="number"
              value={car.sellPrice || 0}
              onChange={(e) => handleChange("sellPrice", parseFloat(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Oprema (odvojena zarezom)</label>
          <input
            type="text"
            value={car.equipment?.join(", ") || ""}
            onChange={(e) =>
              handleChange(
                "equipment",
                e.target.value
                  .split(/,\s*/)
                  .map((s) => s.trim())
                  .filter(Boolean),
              )
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div className="flex gap-4 items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-2 text-white font-medium hover:bg-red-700 transition-colors"
          >
            Spremi promjene
          </button>
          <Link
            href={`/vozila/${car.id}/sticker`}
            className="text-red-600 hover:underline"
          >
            Printaj sticker
          </Link>
          <Link
            href={`/vozila/${car.id}`}
            className="text-gray-600 hover:underline"
            target="_blank"
          >
            Pregled web
          </Link>
        </div>
      </form>
    </section>
  );
}