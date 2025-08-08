export type CarStatus =
  | "Nabavljeno"
  | "Priprema"
  | "Objavljeno"
  | "Rezervirano"
  | "Prodano"
  | "Arhiva";

export interface Car {
  id: string;
  vin: string;
  make: string;
  model: string;
  variant?: string;
  year: number;
  kilometers: number;
  power: number; // kW
  displacement?: number; // cc
  fuel: string;
  transmission: string;
  drive: string;
  euroNorm: string;
  co2?: number;
  color?: string;
  equipment: string[];
  damages?: string;
  location?: string;
  status: CarStatus;
  purchasePrice?: number;
  expenses?: number;
  sellPrice: number;
  minPrice?: number;
  images: string[];
  warranty?: string;
  description?: string;
}