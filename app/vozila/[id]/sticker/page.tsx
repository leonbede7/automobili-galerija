"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cars } from "../../../../data/cars";


export default function StickerPage({ params }: any) {
  const router = useRouter();
  const car = cars.find((c) => c.id === params.id);
  // Prepare initial values even if car is undefined to satisfy hook rules
  const initialPrice = car ? car.sellPrice.toString() : "";
  const initialTitle = car ? `${car.make} ${car.model} ${car.year}` : "";
  const initialHighlights = car
    ? car.equipment.slice(0, 5).join("\n")
    : "";
  const initialSpecs = car
    ? `Godina: ${car.year}\nKilometri: ${car.kilometers.toLocaleString()} km\nSnaga: ${car.power} kW\nGorivo: ${car.fuel}\nMjenjač: ${car.transmission}`
    : "";
  const [price, setPrice] = useState<string>(initialPrice);
  const [title, setTitle] = useState<string>(initialTitle);
  const [highlights, setHighlights] = useState<string>(initialHighlights);
  const [specs, setSpecs] = useState<string>(initialSpecs);
  useEffect(() => {
    if (!car) {
      router.push("/vozila");
    }
  }, [car, router]);
  const handlePrint = () => {
    window.print();
  };
  if (!car) return null;
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sticker za ispis</h1>
      <div className="grid md:grid-cols-2 gap-8 print:grid-cols-1">
        {/* Editable form */}
        <div className="space-y-4 not-print">
          <div>
            <label className="block text-sm font-medium text-gray-700">Naslov</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cijena (€)</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Istaknuta oprema (svaki u novom retku)</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              rows={5}
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Specifikacije (svaki u novom retku)</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              rows={5}
              value={specs}
              onChange={(e) => setSpecs(e.target.value)}
            />
          </div>
          <button
            onClick={handlePrint}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition-colors"
          >
            Printaj sticker
          </button>
        </div>
        {/* Sticker preview */}
        <div className="border border-gray-300 p-6 rounded-md bg-white">
          <div className="text-center mb-4">
            <Image
              src="/ag-logo.png"
              alt="AG logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
            {title}
          </h2>
          <p className="text-2xl font-bold text-red-600 text-center mb-4">
            €{price}
          </p>
          <div className="flex justify-between">
            <div className="text-sm text-gray-700 whitespace-pre-line">
              {highlights}
            </div>
            <div className="text-sm text-gray-700 whitespace-pre-line text-right">
              {specs}
            </div>
          </div>
          <div className="mt-6 border-t pt-4 text-center text-sm text-gray-600">
            Kontakt: +385 99 234 5556 | automobili.galerija@gmail.com
          </div>
        </div>
      </div>
      <style jsx>{`
        @media print {
          .not-print {
            display: none;
          }
          .print\\:grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}