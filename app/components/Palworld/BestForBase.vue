<template>
  <section id="best-for-base" class="section">
    <h2>Best For Base</h2>
    <div class="card">
      <p class="intro">
        Work suitability levels go up to 8–10 in the current version. Here are strong options across stages of the game.
      </p>

      <div class="grid">
        <div class="pal-card">
          <h3>Early Game</h3>
          <ul>
            <li><strong>Lifmunk / Flopie</strong> — Multi-skill generalists, easy to catch.</li>
            <li><strong>Pupperai</strong> — Great early Transporting, Lumbering & Gathering.</li>
            <li><strong>Penking</strong> — Excellent all-rounder for mid-early bases.</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>Mid → Late</h3>
          <ul>
            <li><strong>Anubis</strong> — Still one of the best Handiwork + Mining workers.</li>
            <li><strong>Lyleen</strong> — Outstanding multi-work (Planting, Handiwork, Medicine, Gathering).</li>
            <li><strong>Blazamut / Vanwyrm</strong> — Top Kindling options.</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>Endgame (World Tree / 1.0)</h3>
          <ul>
            <li><strong>Dandilord</strong> — Planting Level 8 + strong secondary skills.</li>
            <li><strong>Solenne</strong> — Handiwork Level 8, works without sleep.</li>
            <li><strong>Bastigor</strong> — Highest Cooling.</li>
            <li><strong>Oserk / Orserk</strong> — Excellent Electricity generation.</li>
            <li><strong>Shaolong</strong> — Top Watering.</li>
            <li><strong>Silvance</strong> — Outstanding Medicine Production.</li>
          </ul>
        </div>
      </div>

      <p class="note">
        Tip: Condensing and handbooks can push many of these even higher. Pair specialists with strong transporters like Mimog for maximum efficiency.
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.75rem;
}

.pal-card {
  background: rgba(26, 22, 20, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 1.25rem 1.4rem;
  border-radius: var(--radius);
}

.pal-card h3 {
  font-size: 1.05rem;
  color: var(--gold);
  margin-bottom: 0.9rem;
  letter-spacing: 0.06em;
}

.pal-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
}

.pal-card li {
  color: var(--washi-dim);
  font-size: 0.95rem;
  line-height: 1.5;
}

.pal-card strong {
  color: var(--crimson-bright);
}

.note {
  font-size: 0.92rem;
  color: var(--mist);
  border-left: 2px solid var(--crimson);
  padding-left: 1rem;
  margin: 0;
}
</style>