import { adventure } from "@/data/adventure";

export function Hero() {
  return (
    <div className="rounded-[2rem] bg-[#1f3f2c] p-6 text-white shadow-xl">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f3c55f]">
        {adventure.platformName}
      </p>

      <h1 className="mt-4 text-5xl font-black leading-none tracking-tight">
        {adventure.title}
      </h1>

      <p className="mt-4 text-white/80">
        {adventure.year} • {adventure.location}
      </p>

      <div className="mt-6 rounded-full bg-white/10 px-4 py-3 text-sm font-bold">
        Adventure planning is underway 🏔️
      </div>
    </div>
  );
}