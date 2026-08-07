<template>
  <section id="tips" class="section">
    <h2>Tips</h2>
    <div class="card">
      <ul class="tip-list">
        <li>
          <strong>Start breeding Anubis early</strong> — It is the single best base worker (Handiwork + Mining) and becomes available much earlier than its level suggests.
        </li>
        <li>
          <strong>Keep cake stocked</strong> — One cake is consumed per egg. Always keep cake in the Breeding Farm chest so production never stops.
        </li>
        <li>
          <strong>Prioritize passives</strong> — Aim for Artisan / Work Slave / Remarkable Craftsmanship on base pals and Demon God / Musclehead / Serenity on combat pals.
        </li>
        <li>
          <strong>Self-breed legendaries & key pals</strong> — Orserk, Shadowbeak, Grizzbolt, Lyleen and many S-Tier pals can only be bred with the same species.
        </li>
        <li>
          <strong>Condense regularly</strong> — Sacrificing duplicates raises work suitability levels and strengthens passive skills.
        </li>
        <li>
          <strong>Use the right party for the job</strong> — Keep specialized parties (Egg, Fishing, Combat) ready instead of using one general team for everything.
        </li>
        <li>
          <strong>Research & Expeditions</strong> — Permanent research bonuses and passive expedition rewards are huge long-term multipliers.
        </li>
        <li>
          <strong>Avoid negative passives</strong> — Clumsy, Slacker, Coward, Pacifist, Brittle, Glutton and Night Owl should be bred out whenever possible.
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