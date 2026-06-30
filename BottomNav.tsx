import { BottomNav } from '@/components/BottomNav';
import { Countdown } from '@/components/Countdown';
import { MovieMissionForm } from '@/components/MovieMissionForm';
import { adventure } from '@/data/adventure';

export default function Home() {
  return (
    <main className="app" id="home">
      <section className="hero">
        <p className="kicker">{adventure.platformName}</p>
        <h1>{adventure.title}</h1>
        <p className="subtitle">{adventure.year} • {adventure.location}</p>
        <Countdown targetDate={adventure.dates.start} />
      </section>

      <section className="card mission-card">
        <p className="status">🟢 Current Mission</p>
        <h2>{adventure.currentMission.emoji} Mission #{adventure.currentMission.number}: {adventure.currentMission.title}</h2>
        <p>{adventure.currentMission.description}</p>
        <a className="primary" href="#movie-mission">Start Mission</a>
      </section>

      <section className="card" id="movie-mission">
        <p className="status">🎬 Mission Form</p>
        <h2>Lights, Camera, Vacation!</h2>
        <p>Submit your cabin theater movie pick. Mission Control will collect the responses and build the movie lineup.</p>
        <MovieMissionForm hosts={adventure.movieHosts} />
      </section>

      <section className="grid" aria-label="App shortcuts">
        <a className="tile" href="#today"><span className="emoji">📅</span>Today</a>
        <a className="tile" href="#missions"><span className="emoji">🚀</span>Missions</a>
        <a className="tile" href="#theater"><span className="emoji">🎥</span>Theater</a>
        <a className="tile" href="#crew"><span className="emoji">👨‍👩‍👧‍👦</span>Crew</a>
        <a className="tile" href="#activities"><span className="emoji">🎢</span>Activities</a>
        <a className="tile" href="#more"><span className="emoji">🏡</span>Trip Info</a>
      </section>

      <section className="card" id="today">
        <h2>📅 Trip Framework</h2>
        <div className="list">
          {adventure.tripFramework.map((item) => (
            <div className="row" key={item.date}>
              <strong>{item.date}</strong>
              <small>{item.plan}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="card" id="missions">
        <h2>🚀 Missions</h2>
        <div className="list">
          {adventure.missions.map((mission) => (
            <div className="row" key={mission.number}>
              <div>
                <strong>{mission.emoji} Mission #{mission.number}</strong>
                <small>{mission.title} — {mission.subtitle}</small>
              </div>
              <small>{mission.status}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="card" id="theater">
        <h2>🎥 Cabin Theater</h2>
        <p>Movie picks will appear here after Mission #1 responses are collected.</p>
        <div className="list">
          {adventure.movieHosts.map((host) => (
            <div className="row" key={host}>
              <strong>{host}</strong>
              <small>TBD</small>
            </div>
          ))}
        </div>
      </section>

      <section className="card" id="crew">
        <h2>👨‍👩‍👧‍👦 Travel Crew</h2>
        <div className="chips">
          {adventure.participants.map((person) => <span className="chip" key={person}>{person}</span>)}
        </div>
      </section>

      <section className="card" id="activities">
        <h2>🎢 Locked-In Activities</h2>
        <div className="list">
          {adventure.lockedActivities.map((activity) => (
            <div className="row" key={activity}>
              <strong>{activity}</strong>
              <small>Locked</small>
            </div>
          ))}
        </div>
      </section>

      <section className="card" id="more">
        <h2>🏡 Trip Info</h2>
        <p><strong>Check-in:</strong> {adventure.tripInfo.checkIn}</p>
        <p><strong>Check-out:</strong> {adventure.tripInfo.checkOut}</p>
        <p><strong>Home Base:</strong> {adventure.tripInfo.homeBase}</p>
        <p><strong>Travel:</strong> {adventure.tripInfo.travel}</p>
      </section>

      <BottomNav />
    </main>
  );
}
