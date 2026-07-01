export function QuickActions() {
  const actions = [
    ["📅", "Today"],
    ["🚀", "Missions"],
    ["🎥", "Theater"],
    ["👨‍👩‍👧‍👦", "Crew"],
    ["🎢", "Activities"],
    ["🏡", "Trip Info"],
  ];

  return (
    <div className="mt-5 grid grid-cols-3 gap-3">
      {actions.map(([icon, label]) => (
        <div
          key={label}
          className="flex h-24 flex-col items-center justify-center rounded-3xl bg-white text-center font-black text-[#1f3f2c] shadow"
        >
          <span className="text-2xl">{icon}</span>
          <span className="mt-1 text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}