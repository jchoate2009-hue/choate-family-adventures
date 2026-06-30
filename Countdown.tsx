:root {
  --pine: #1f3f2c;
  --pine-2: #2f6041;
  --mist: #f6efe2;
  --cream: #fffaf0;
  --gold: #f3c55f;
  --orange: #d9772b;
  --brown: #7b4f2a;
  --ink: #17251c;
  --muted: #687466;
  --danger: #8b271b;
  --success: #1f5d2f;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at 12% 4%, rgba(243, 197, 95, 0.28), transparent 28%),
    linear-gradient(180deg, #193625 0%, #2f6041 280px, var(--mist) 640px);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

button,
input,
select,
textarea {
  font: inherit;
}

.app {
  width: min(560px, 100%);
  margin: 0 auto;
  padding: 16px 14px 96px;
}

.hero {
  min-height: 320px;
  color: white;
  background:
    linear-gradient(160deg, rgba(31, 63, 44, 0.96), rgba(47, 96, 65, 0.92)),
    radial-gradient(circle at 80% 10%, rgba(243, 197, 95, 0.18), transparent 26%);
  border-radius: 34px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.28);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "🏔️";
  position: absolute;
  top: 18px;
  right: 8px;
  font-size: 7.8rem;
  opacity: 0.14;
}

.kicker,
.status {
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.78rem;
  font-weight: 800;
}

.kicker {
  color: var(--gold);
}

.status {
  color: #9a6016;
}

h1 {
  margin: 0;
  font-size: clamp(2.3rem, 12vw, 4.3rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

h2 {
  color: var(--pine);
  margin: 0 0 10px;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

h3 {
  color: var(--pine);
}

.subtitle {
  margin: 14px 0 22px;
  opacity: 0.93;
}

.countdown {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  padding: 11px 14px;
  font-weight: 800;
}

.card {
  background: rgba(255, 250, 240, 0.96);
  border: 1px solid rgba(31, 63, 44, 0.1);
  border-radius: 28px;
  box-shadow: 0 14px 34px rgba(38, 50, 36, 0.14);
  padding: 22px;
  margin-top: 16px;
}

.mission-card {
  border: 2px solid rgba(243, 197, 95, 0.82);
}

.primary {
  display: block;
  width: 100%;
  margin-top: 18px;
  padding: 15px 18px;
  background: var(--orange);
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 18px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(217, 119, 43, 0.25);
}

.primary:disabled {
  opacity: 0.72;
  cursor: wait;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 11px;
  margin-top: 16px;
}

.tile {
  min-height: 92px;
  background: rgba(255, 250, 240, 0.96);
  border: 1px solid rgba(31, 63, 44, 0.1);
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  flex-direction: column;
  text-decoration: none;
  color: var(--pine);
  font-weight: 900;
  box-shadow: 0 9px 20px rgba(38, 50, 36, 0.11);
}

.emoji {
  font-size: 1.7rem;
}

.list {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  padding: 13px;
  border-radius: 18px;
  background: #f8edd9;
}

.row small {
  color: var(--muted);
  text-align: right;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  background: #f8edd9;
  border-radius: 999px;
  padding: 9px 12px;
  font-weight: 800;
}

.mission-form {
  display: grid;
  gap: 15px;
  margin-top: 18px;
}

.mission-form label,
.mission-form fieldset {
  display: grid;
  gap: 7px;
  font-weight: 800;
}

.mission-form input,
.mission-form select,
.mission-form textarea {
  width: 100%;
  border: 1px solid rgba(31, 63, 44, 0.18);
  background: white;
  border-radius: 16px;
  padding: 13px 14px;
  color: var(--ink);
}

.mission-form fieldset {
  border: 1px solid rgba(31, 63, 44, 0.18);
  border-radius: 18px;
  padding: 14px;
}

.mission-form legend {
  padding: 0 6px;
  color: var(--pine);
}

.checkbox {
  grid-template-columns: 22px 1fr;
  align-items: center;
  font-weight: 700 !important;
}

.checkbox input {
  width: auto;
}

.form-success,
.form-error {
  padding: 12px 14px;
  border-radius: 16px;
  font-weight: 800;
}

.form-success {
  background: rgba(80, 145, 92, 0.16);
  border: 1px solid rgba(80, 145, 92, 0.35);
  color: var(--success);
}

.form-error {
  background: rgba(170, 62, 45, 0.13);
  border: 1px solid rgba(170, 62, 45, 0.35);
  color: var(--danger);
}

.bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  width: min(520px, calc(100% - 28px));
  background: rgba(255, 250, 240, 0.94);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(31, 63, 44, 0.14);
  border-radius: 999px;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
  padding: 9px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  z-index: 10;
}

.bottom-nav a {
  text-decoration: none;
  color: var(--pine);
  text-align: center;
  font-size: 0.73rem;
  font-weight: 900;
}

.bottom-nav span {
  display: block;
  font-size: 1.15rem;
  margin-bottom: 2px;
}

.muted {
  color: var(--muted);
}

@media (max-width: 380px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
