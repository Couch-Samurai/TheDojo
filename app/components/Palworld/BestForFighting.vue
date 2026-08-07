<template>
  <section id="best-for-fighting" class="section">
    <h2>Best for Fighting</h2>
    <div class="card">
      <p class="intro">
        S-Tier PvE / combat pals by element (Palworld 1.0). Best and second-best options listed.
      </p>

      <div class="grid">
        <div class="pal-card">
          <h3>🔥 Fire</h3>
          <ul>
            <li><strong>Blazamut</strong> — ⭐ Best</li>
            <li><strong>Dupin</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>💧 Water</h3>
          <ul>
            <li><strong>Jormuntide</strong> — ⭐ Best</li>
            <li><strong>Neptilius</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🌿 Grass</h3>
          <ul>
            <li><strong>Venusa</strong> — ⭐ Best</li>
            <li><strong>Dandilord</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>⚡ Electric</h3>
          <ul>
            <li><strong>Orserk</strong> — ⭐ Best</li>
            <li><strong>Grizzbolt</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>❄️ Ice</h3>
          <ul>
            <li><strong>Bastigor</strong> — ⭐ Best</li>
            <li><strong>Frostallion</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🌍 Ground</h3>
          <ul>
            <li><strong>Anubis</strong> — ⭐ Best</li>
            <li><strong>Sekhmet</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>💀 Dark</h3>
          <ul>
            <li><strong>Shadowbeak</strong> — ⭐ Best</li>
            <li><strong>Necromus</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🐉 Dragon</h3>
          <ul>
            <li><strong>Jetragon</strong> — ⭐ Best</li>
            <li><strong>Xenolord</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🪨 Rock</h3>
          <ul>
            <li><strong>Knocklem Ignis</strong> — ⭐ Best</li>
            <li><strong>Astegon</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>✨ Neutral</h3>
          <ul>
            <li><strong>Paladius</strong> — ⭐ Best</li>
            <li><strong>Solenne</strong> — 🥈 2nd best</li>
          </ul>
        </div>
      </div>

      <p class="note">
        Strong core party idea: Jetragon (Dragon nuke / flyer) + Bastigor or Frostallion (Ice) + Shadowbeak or Necromus (Dark) + Blazamut (Fire) + Anubis (Ground bruiser / utility).
      </p>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 4rem;
}

.intro {
  color: var(--washi-dim);
  margin-bottom: 1.75rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.4rem;
  margin-bottom: 1.75rem;
}

.pal-card {
  background: rgba(26, 22, 20, 0.55);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 1.2rem 1.35rem;
  border-radius: var(--radius);
}

.pal-card h3 {
  font-size: 1.05rem;
  color: var(--gold);
  margin-bottom: 0.85rem;
  letter-spacing: 0.05em;
}

.pal-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.55rem;
}

.pal-card li {
  color: var(--washi-dim);
  font-size: 0.95rem;
}

.pal-card strong {
  color: var(--crimson-bright);
}

.note {
  font-size: 0.92rem;
  color: var(--mist);
  border-left: 2px solid var(--gold);
  padding-left: 1rem;
  margin: 0;
}
</style>