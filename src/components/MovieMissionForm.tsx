"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { adventure } from "@/data/adventure";
import { db } from "@/lib/firebase";

const snacks = [
  "Buttered Popcorn",
  "Kettle Corn",
  "M&Ms",
  "Reese’s Pieces",
  "Sour Patch Kids",
  "Twizzlers",
  "Milk Duds",
  "Nachos",
  "Ice Cream",
  "Root Beer Floats",
  "Cookies",
  "Brownies",
];

export function MovieMissionForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await addDoc(collection(db, "movieMissionSubmissions"), {
        adventureId: "smoky-mountain-2026",
        name: String(formData.get("name") || ""),
        movie: String(formData.get("movie") || ""),
        streamingService: String(formData.get("streamingService") || ""),
        reason: String(formData.get("reason") || ""),
        snacks: formData.getAll("snacks").map(String),
        lookingForwardTo: String(formData.get("lookingForwardTo") || ""),
        createdAt: serverTimestamp(),
      });

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <label className="block font-bold">
        Who are you?
        <select
          name="name"
          required
          className="mt-2 w-full rounded-2xl border p-3"
        >
          <option value="">Choose your name</option>
          {adventure.crew.map((person) => (
            <option value={person} key={person}>
              {person}
            </option>
          ))}
        </select>
      </label>

      <label className="block font-bold">
        Movie pick
        <input
          name="movie"
          required
          placeholder="Movie title"
          className="mt-2 w-full rounded-2xl border p-3"
        />
      </label>

      <label className="block font-bold">
        Where can we watch it?
        <select
          name="streamingService"
          required
          className="mt-2 w-full rounded-2xl border p-3"
        >
          <option value="">Choose one</option>
          <option>Netflix</option>
          <option>Disney+</option>
          <option>Hulu</option>
          <option>Max</option>
          <option>Prime Video</option>
          <option>Apple TV+</option>
          <option>Peacock</option>
          <option>Paramount+</option>
          <option>DVD / Blu-ray</option>
          <option>I don’t know</option>
        </select>
      </label>

      <label className="block font-bold">
        Why did you pick it?
        <textarea
          name="reason"
          rows={3}
          className="mt-2 w-full rounded-2xl border p-3"
        />
      </label>

      <fieldset className="rounded-2xl border p-4">
        <legend className="px-2 font-bold">Favorite movie snacks</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {snacks.map((snack) => (
            <label key={snack} className="flex gap-2 text-sm font-bold">
              <input type="checkbox" name="snacks" value={snack} />
              {snack}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block font-bold">
        What are you looking forward to most?
        <textarea
          name="lookingForwardTo"
          rows={3}
          className="mt-2 w-full rounded-2xl border p-3"
        />
      </label>

      <button
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-[#d9772b] px-4 py-3 font-black text-white"
      >
        {status === "submitting" ? "Submitting..." : "Submit Movie Mission"}
      </button>

      {status === "success" && (
        <p className="font-bold text-green-700">
          ✅ Mission accomplished! Movie pick saved.
        </p>
      )}

      {status === "error" && (
        <p className="font-bold text-red-700">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}