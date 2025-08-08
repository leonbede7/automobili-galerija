import Link from "next/link";
import Image from "next/image";
import type { Car } from "../types/car";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { id, make, model, year, kilometers, sellPrice, images } = car;
  const mainImg = images && images.length > 0 ? images[0] : "/placeholder_light_gray_block.png";
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={mainImg}
          alt={`${make} ${model}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {make} {model}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Godina: {year} | {kilometers.toLocaleString()} km
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">
            €{sellPrice.toLocaleString()}
          </span>
          <Link
            href={`/vozila/${id}`}
            className="text-sm text-red-600 hover:underline"
          >
            Detalji
          </Link>
        </div>
      </div>
    </div>
  );
}