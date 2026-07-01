import { adventure } from "@/data/adventure";

export function MissionCard() {
  return (
    <div className="mt-5 rounded-[1.5rem] border border-[#f3c55f] bg-white p-5 shadow">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6016]">
        Current Mission
      </p>

      <h2 className="mt-2 text-2xl font-black text-[#1f3f2c]">
        {adventure.currentMission.emoji} Mission #
        {adventure.currentMission.number}: {adventure.currentMission.title}
      </h2>

      <p className="mt-2 text-sm text-[#687466]">
        {adventure.currentMission.description}
      </p>

      <button className="mt-5 w-full rounded-2xl bg-[#d9772b] px-4 py-3 font-black text-white">
        Start Mission
      </button>
    </div>
  );
}