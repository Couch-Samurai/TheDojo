<template>
  <section id="best-for-fighting" class="section">
    <h2>Best for Fighting</h2>
    <div class="card">
      <p class="intro">
        Endgame combat revolves around high base Attack, strong Partner Skills, and good elemental coverage. Here is a practical tier overview.
      </p>

      <div class="tiers">
        <div class="tier s-plus">
          <h3>S+ Tier</h3>
          <ul>
            <li><strong>Necromus</strong> — Exceptional Attack, double-jump dodge, shreds Neutral.</li>
            <li><strong>Frostallion / Frostallion Noct</strong> — Premier Ice / Dark options. Ice Steed is excellent.</li>
            <li><strong>Jetragon</strong> — Fastest flyer + high damage + Meteorain AOE.</li>
            <li><strong>Shadowbeak</strong> — High stats, strong crowd control, relatively accessible.</li>
          </ul>
        </div>

        <div class="tier s">
          <h3>S Tier</h3>
          <ul>
            <li><strong>Bellanoir Libero</strong> — Powerful exclusive skill kit.</li>
            <li><strong>Neptilius</strong> — High Attack Water option.</li>
            <li><strong>Blazamut / Blazamut Ryu</strong> — Elite Fire damage + solid defense.</li>
            <li><strong>Anubis</strong> — Excellent melee bruiser that also works amazingly at base.</li>
          </ul>
        </div>

        <div class="tier a">
          <h3>Strong Contenders</h3>
          <ul>
            <li><strong>Orserk</strong> — Great Electric coverage + base utility.</li>
            <li><strong>Grizzbolt</strong> — Minigun partner skill for sustained ranged damage.</li>
            <li><strong>Astegon</strong> — Strong Dark/Dragon dual coverage.</li>
            <li><strong>Lyleen Noct</strong> — Heals while dealing respectable damage.</li>
          </ul>
        </div>
      </div>

      <p class="note">
        Recommended core party idea: Jetragon (flying nuke) + Frostallion (anti-Dragon) + Necromus (Dark bruiser) + one strong Fire option + a stunner.
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

.tiers {
  display: grid;
  gap: 1.4rem;
  margin-bottom: 1.75rem;
}

.tier {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius);
  border: 1px solid rgba(212, 175, 55, 0.18);
  background: rgba(26, 22, 20, 0.55);
}

.tier h3 {
  font-size: 1rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.85rem;
  color: var(--gold);
}

.tier.s-plus h3 {
  color: var(--crimson-bright);
}

.tier ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

.tier li {
  color: var(--washi-dim);
  font-size: 0.95rem;
}

.tier strong {
  color: var(--washi);
}

.note {
  font-size: 0.92rem;
  color: var(--mist);
  border-left: 2px solid var(--gold);
  padding-left: 1rem;
  margin: 0;
}
</style>