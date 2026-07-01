export function BottomNav() {
  const items = [
    ["🏠", "Home"],
    ["🚀", "Missions"],
    ["📅", "Timeline"],
    ["🎥", "Theater"],
    ["☰", "More"],
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 grid-cols-5 rounded-full border border-[#1f3f2c]/10 bg-white/90 px-3 py-2 shadow-xl backdrop-blur">
      {items.map(([icon, label]) => (
        <button
          key={label}
          className="flex flex-col items-center justify-center text-[#1f3f2c]"
        >
          <span className="text-lg">{icon}</span>
          <span className="mt-1 text-[10px] font-black">{label}</span>
        </button>
      ))}
    </nav>
  );
}