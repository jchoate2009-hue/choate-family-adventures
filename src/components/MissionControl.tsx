import { adventure } from "@/data/adventure";

export function MissionControl() {
  return (
    <div className="mt-5 rounded-[1.5rem] bg-white p-5 shadow">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6016]">
        Mission Control
      </p>

      <h2 className="mt-2 text-2xl font-black text-[#1f3f2c]">
        Latest Updates
      </h2>

      <div className="mt-4 space-y-3">
        {adventure.updates.map((update) => (
          <div
            key={update}
            className="rounded-2xl bg-[#f8edd9] px-4 py-3 text-sm font-bold"
          >
            ✅ {update}
          </div>
        ))}
      </div>
    </div>
  );
}