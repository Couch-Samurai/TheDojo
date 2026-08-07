<template>
  <section id="best-for-base" class="section">
    <h2>Best For Base</h2>
    <div class="card">
      <p class="intro">
        S-Tier base workers by work type (Palworld 1.0). Best and second-best options included.
      </p>

      <div class="grid">
        <div class="pal-card">
          <h3>🥶 Cooling</h3>
          <ul>
            <li><strong>Bastigor</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Wumpo</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🌾 Gathering</h3>
          <ul>
            <li><strong>Venusa</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Verdash</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>⚡ Electricity</h3>
          <ul>
            <li><strong>Orserk</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Grizzbolt</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>👐 Handiwork</h3>
          <ul>
            <li><strong>Solenne</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Sekhmet</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🔥 Kindling</h3>
          <ul>
            <li><strong>Dupin</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Renjish / Flaracle</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🪵 Lumbering</h3>
          <ul>
            <li><strong>Celesdir</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Cryolinx Terra</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>⛏️ Mining</h3>
          <ul>
            <li><strong>Knocklem Ignis</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Anubis</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>💊 Medicine</h3>
          <ul>
            <li><strong>Silvance</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Lyleen Noct</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>🌱 Planting</h3>
          <ul>
            <li><strong>Dandilord</strong> — ⭐ Best (World Tree)</li>
            <li><strong>Ophydia</strong> — 🥈 2nd best</li>
          </ul>
        </div>

        <div class="pal-card">
          <h3>📦 Transporting</h3>
          <ul>
            <li><strong>Mimog</strong> — ⭐ Best</li>
            <li><strong>Eidrolon</strong> — 🥈 2nd best</li>
          </ul>
        </div>
      </div>

      <p class="note">
        Anubis remains one of the strongest overall base pals thanks to Handiwork + Mining. Condensing and good passives (Artisan / Work Slave / Remarkable Craftsmanship) push these even further.
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
  background: rgba(121, 121, 121, 0.6);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 1.25rem 1.4rem;
  border-radius: var(--radius);
}

.pal-card h3 {
  font-size: 1.05rem;
  color: var(--ink);
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