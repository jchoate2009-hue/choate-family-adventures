export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17251c]">
      <section className="mx-auto max-w-md px-4 py-6">
        <div className="rounded-[2rem] bg-[#1f3f2c] p-6 text-white shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f3c55f]">
            Choate Family Adventures
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-tight">
            Smoky Mountain Adventure
          </h1>

          <p className="mt-4 text-white/80">
            July 4–9, 2026 • Pigeon Forge / Sevierville
          </p>

          <div className="mt-6 rounded-full bg-white/10 px-4 py-3 text-sm font-bold">
            Adventure planning is underway 🏔️
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#f3c55f] bg-white p-5 shadow">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6016]">
            Current Mission
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#1f3f2c]">
            🎬 Mission #1: Lights, Camera, Vacation!
          </h2>
          <p className="mt-2 text-sm text-[#687466]">
            Pick the movie you want to host in the cabin theater.
          </p>
          <button className="mt-5 w-full rounded-2xl bg-[#d9772b] px-4 py-3 font-black text-white">
            Start Mission
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["📅", "Today"],
            ["🚀", "Missions"],
            ["🎥", "Theater"],
            ["👨‍👩‍👧‍👦", "Crew"],
            ["🎢", "Activities"],
            ["🏡", "Trip Info"],
          ].map(([icon, label]) => (
            <div
              key={label}
              className="flex h-24 flex-col items-center justify-center rounded-3xl bg-white text-center font-black text-[#1f3f2c] shadow"
            >
              <span className="text-2xl">{icon}</span>
              <span className="mt-1 text-xs">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}