import { adventure } from "@/data/adventure";

export function Timeline() {
  return (
    <div className="mt-5 rounded-[1.5rem] bg-white p-5 shadow">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6016]">
        Timeline
      </p>

      <h2 className="mt-2 text-2xl font-black text-[#1f3f2c]">
        Trip Itinerary
      </h2>

      <div className="mt-4 space-y-3">
        {adventure.timeline.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[#f8edd9] px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-black text-[#1f3f2c]">{item.title}</p>
                <p className="text-sm text-[#687466]">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}