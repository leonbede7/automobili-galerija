"use client";

import { useState } from "react";


export default function UvozPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ime: "",
    email: "",
    telefon: "",
    markaModel: "",
    budzet: "",
    poruka: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send form data to your server (e.g. API route or third-party form)
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hvala!</h1>
        <p className="text-gray-700">
          Vaš zahtjev za uvoz je zaprimljen. Kontaktirat ćemo vas u najkraćem roku.
        </p>
      </div>
    );
  }
  return (
    <section className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Uvoz po narudžbi</h1>
      <p className="text-gray-700">
        Niste pronašli vozilo iz naših zaliha? Ispunite obrazac i dostavit ćemo
        vam ponudu za automobil po vašim željama. Unesite što više informacija
        kako bismo mogli pronaći idealno vozilo.
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
            placeholder="npr. BMW 320d Touring"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Budžet (€)</label>
          <input
            required
            name="budzet"
            type="number"
            value={form.budzet}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Dodatne informacije</label>
          <textarea
            name="poruka"
            value={form.poruka}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            rows={4}
            placeholder="Npr. boja, oprema, stanje, dodatne napomene"
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