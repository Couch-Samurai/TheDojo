<template>
  <section id="breeding-tree" class="section">
    <h2>Breeding Tree</h2>
    <div class="card">
      <p class="intro">
        Essential S-Tier breeding paths and priority targets (Palworld 1.0).
      </p>

      <div class="tree">
        <h3>🌟 Priority S-Tier Targets</h3>
        <ul class="notable">
          <li><strong>Anubis</strong> — Best overall base worker (Handiwork + Mining)</li>
          <li><strong>Jormuntide</strong> — Top Watering / strong combat</li>
          <li><strong>Orserk</strong> — Best Electricity (self-breed only)</li>
          <li><strong>Faleris</strong> — Excellent flying mount + Kindling</li>
          <li><strong>Shadowbeak</strong> — Best Dark PvE (self-breed after first)</li>
        </ul>

        <h3>🔑 Essential Breeding Chains</h3>

        <div class="chain-block">
          <h4>Path to Anubis (Base King)</h4>
          <div class="chain">
            <div class="step">
              <span class="pal">Relaxaurus</span>
              <span class="plus">+</span>
              <span class="pal">Sparkit</span>
              <span class="arrow">→</span>
              <span class="result">Relaxaurus Lux</span>
            </div>
            <div class="step">
              <span class="pal">Relaxaurus Lux</span>
              <span class="plus">+</span>
              <span class="pal">Blazamut</span>
              <span class="arrow">→</span>
              <span class="result">Jormuntide</span>
            </div>
            <div class="step">
              <span class="pal">Jormuntide</span>
              <span class="plus">+</span>
              <span class="pal">Blazehowl</span>
              <span class="arrow">→</span>
              <span class="result">Jormuntide Ignis</span>
            </div>
            <div class="step">
              <span class="pal">Relaxaurus Lux</span>
              <span class="plus">+</span>
              <span class="pal">Jormuntide Ignis</span>
              <span class="arrow">→</span>
              <span class="result highlight">Anubis</span>
            </div>
          </div>
        </div>

        <div class="chain-block">
          <h4>Other Useful Combos</h4>
          <div class="chain">
            <div class="step">
              <span class="pal">Anubis</span>
              <span class="plus">+</span>
              <span class="pal">Vanwyrm</span>
              <span class="arrow">→</span>
              <span class="result">Faleris</span>
            </div>
            <div class="step">
              <span class="pal">Ragnahawk</span>
              <span class="plus">+</span>
              <span class="pal">Killamari</span>
              <span class="arrow">→</span>
              <span class="result">Kitsun</span>
            </div>
            <div class="step">
              <span class="pal">Kitsun</span>
              <span class="plus">+</span>
              <span class="pal">Astegon</span>
              <span class="arrow">→</span>
              <span class="result highlight">Shadowbeak</span>
            </div>
            <div class="step">
              <span class="pal">Mossanda</span>
              <span class="plus">+</span>
              <span class="pal">Rayhound</span>
              <span class="arrow">→</span>
              <span class="result">Grizzbolt</span>
            </div>
          </div>
        </div>

        <h3>🔁 Self-Breed Only</h3>
        <ul class="notable">
          <li><strong>Orserk</strong> — Orserk + Orserk</li>
          <li><strong>Grizzbolt</strong> — Grizzbolt + Grizzbolt</li>
          <li><strong>Lyleen</strong> — Lyleen + Lyleen</li>
          <li><strong>Faleris</strong> — Faleris + Faleris (after first)</li>
          <li><strong>Shadowbeak</strong> — Shadowbeak + Shadowbeak (after first)</li>
          <li><strong>Legendaries</strong> (Jetragon, Frostallion, Paladius, Necromus) — same species only</li>
        </ul>

        <h3>🔍 Extra Anubis Combos</h3>
        <ul class="notable">
          <li>Bushi + Penking</li>
          <li>Ragnahawk + Tombat</li>
          <li>Quivern + Chillet</li>
          <li>Relaxaurus Lux + Jormuntide Ignis (main chain)</li>
        </ul>
      </div>

      <p class="note">
        Use a breeding calculator for reverse lookups from the Pals you already own. The chains above are the most efficient common routes.
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

.tree h3 {
  font-size: 1.05rem;
  color: var(--ink);
  margin: 1.75rem 0 1rem;
  letter-spacing: 0.05em;
}

.tree h3:first-of-type {
  margin-top: 0;
}

.tree h4 {
  font-size: 0.95rem;
  color: var(--crimson-bright);
  margin: 1.25rem 0 0.75rem;
  letter-spacing: 0.04em;
}

.chain-block {
  margin-bottom: 1.5rem;
}

.chain {
  display: grid;
  gap: 0.75rem;
}

.step {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding: 0.7rem 1rem;
  border: 1px solid rgba(212, 175, 55, 0.12);
  border-radius: var(--radius);
  font-size: 0.95rem;
}

.pal {
  color: var(--washi);
}

.plus, .arrow {
  color: var(--mist);
  font-weight: 500;
}

.result {
  color: var(--ink);
  font-weight: 500;
}

.result.highlight {
  color: var(--crimson-bright);
}

.notable {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
}

.notable li {
  color: var(--washi-dim);
  font-size: 0.95rem;
  padding-left: 1.1rem;
  position: relative;
}

.notable li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--crimson);
}

.notable strong {
  color: var(--washi);
}

.note {
  font-size: 0.92rem;
  color: var(--mist);
  border-left: 2px solid var(--crimson);
  padding-left: 1rem;
  margin-top: 1.75rem;
}
</style>