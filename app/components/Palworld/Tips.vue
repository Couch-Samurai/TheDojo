<template>
  <section id="tips" class="section">
    <h2>Tips</h2>
    <div class="card">
      <ul class="tip-list">
        <li>
          <strong>Build a Palbox early</strong> — It unlocks proper base management and lets you house hundreds of Pals.
        </li>
        <li>
          <strong>Prioritize spheres</strong> — Craft or farm higher-tier Pal Spheres as soon as possible. Vixy on a ranch is excellent for early sphere generation.
        </li>
        <li>
          <strong>Use the Grappling Gun</strong> — Unlocks around level 12 and ignores weight when over-encumbered. Perfect for mobility.
        </li>
        <li>
          <strong>Match skill types</strong> — Pals deal ~20% more damage when using skills that match their element.
        </li>
        <li>
          <strong>Condense regularly</strong> — Sacrificing duplicates improves work suitability, stats, and passive strength.
        </li>
        <li>
          <strong>Run Expeditions</strong> — Assign spare Pals to expeditions for passive rare materials while you explore.
        </li>
        <li>
          <strong>Research everything</strong> — Permanent bonuses to work speed, gathering, and more apply to all current and future Pals.
        </li>
        <li>
          <strong>Push Towers</strong> — Especially after level 50, towers become one of the best sources of experience and progression.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-bottom: 4rem;
}

.tip-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.1rem;
}

.tip-list li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--washi-dim);
  line-height: 1.65;
}

.tip-list li::before {
  content: '⚔';
  position: absolute;
  left: 0;
  color: var(--crimson);
  font-size: 0.9rem;
}

.tip-list strong {
  color: var(--gold);
  font-family: var(--font-display);
  letter-spacing: 0.03em;
}
</style>