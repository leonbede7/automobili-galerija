"use client";

import { useState } from "react";


export default function OtkupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ime: "",
    email: "",
    telefon: "",
    markaModel: "",
    godina: "",
    kilometri: "",
    opis: "",
    fotografije: [] as File[],
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setForm({ ...form, fotografije: Array.from(files) });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send to server
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hvala!</h1>
        <p className="text-gray-700">
          Vaš zahtjev za otkup je zaprimljen. Kontaktirat ćemo vas u najkraćem roku.
        </p>
      </div>
    );
  }
  return (
    <section className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Otkup vozila</h1>
      <p className="text-gray-700">
        Želite prodati svoj automobil? Ispunite obrazac, dodajte fotografije i mi
        ćemo vam ponuditi fer cijenu. Automobili pod račun prilikom kupnje
        drugog vozila kod nas također su mogući.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ime i prezime</label>
          <input
            required
            name="ime"
            type="text"
            value={form.ime}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefon</label>
          <input
            required
            name="telefon"
            type="tel"
            value={form.telefon}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            placeholder="+385 99 234 5556"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marka i model</label>
          <input
            required
            name="markaModel"
            type="text"
            value={form.markaModel}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            placeholder="npr. Opel Astra"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Godina</label>
            <input
              required
              name="godina"
              type="number"
              value={form.godina}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Kilometri</label>
            <input
              required
              name="kilometri"
              type="number"
              value={form.kilometri}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Opis vozila</label>
          <textarea
            name="opis"
            value={form.opis}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            rows={4}
            placeholder="Npr. stanje vozila, oštećenja, dodatne napomene"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fotografije</label>
          <input
            name="fotografije"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFile}
            className="mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-2 text-white font-medium hover:bg-red-700 transition-colors"
        >
          Pošalji upit
        </button>
      </form>
    </section>
  );
}