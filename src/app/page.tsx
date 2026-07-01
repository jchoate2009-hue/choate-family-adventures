import { BottomNav } from "@/components/BottomNav";
import { EventList } from "@/components/EventList";
import { Hero } from "@/components/Hero";
import { MissionCard } from "@/components/MissionCard";
import { MissionControl } from "@/components/MissionControl";
import { MovieMissionForm } from "@/components/MovieMissionForm";
import { QuickActions } from "@/components/QuickActions";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6efe2] text-[#17251c]">
      <section className="mx-auto max-w-md px-4 py-6 pb-24">
        <Hero />

        <MissionCard />

        <div className="mt-5 rounded-[1.5rem] bg-white p-5 shadow">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9a6016]">
            Movie Mission
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#1f3f2c]">
            🎬 Lights, Camera, Vacation!
          </h2>

          <MovieMissionForm />
        </div>

        <MissionControl />

        <EventList />

        <Timeline />

        <QuickActions />
      </section>

      <BottomNav />
    </main>
  );
}