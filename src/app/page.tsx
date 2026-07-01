import { BottomNav } from "@/components/BottomNav";
import { EventList } from "@/components/EventList";
import { Hero } from "@/components/Hero";
import { MissionCard } from "@/components/MissionCard";
import { MissionControl } from "@/components/MissionControl";
import { QuickActions } from "@/components/QuickActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17251c]">
      <section className="mx-auto max-w-md px-4 py-6 pb-24">
        <Hero />
        <MissionCard />
        <MissionControl />
        <EventList />
      <QuickActions />
      </section>

      <BottomNav />
    </main>
  );
}