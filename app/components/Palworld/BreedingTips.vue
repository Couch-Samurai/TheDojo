<template>
  <section id="breeding-tips" class="section">
    <h2>Breeding Tips</h2>
    <div class="card">
      <ul class="tip-list">
        <li>
          <strong>Unlock order</strong> — Breeding Farm becomes available at Technology Level 19 (100 Wood, 20 Stone, 50 Fiber).
        </li>
        <li>
          <strong>Cake is mandatory</strong> — One cake is consumed per egg. Stockpile standard cakes early. Later cakes (Mushroom, Vegetable, Deluxe Vegetable, Special) influence stats, egg quantity, and mutation chance.
        </li>
        <li>
          <strong>Efficient order of operations</strong>
          <ol>
            <li>Secure the target species first.</li>
            <li>Assemble the desired passive skills (up to 4).</li>
            <li>Refine IVs / talents.</li>
            <li>Run mutation batches with the best cakes once the pair is locked.</li>
          </ol>
        </li>
        <li>
          <strong>Passives</strong> — Offspring can inherit from the combined pool of both parents. Aim for strong combat or work passives (Demon God, Musclehead, Work Slave, Lucky, etc.).
        </li>
        <li>
          <strong>Mutations (1.0)</strong> — Every hatch has a chance for a mutated egg with higher stats and a unique passive. Deluxe Vegetable Cakes help push mutation volume.
        </li>
        <li>
          <strong>Legendaries</strong> — Can only be bred same-species. Catch the original boss/alpha, then breed copies.
        </li>
        <li>
          <strong>Incubators & temperature</strong> — Keep eggs at the correct temperature. Multiple incubators speed up large breeding projects significantly.
        </li>
        <li>
          <strong>Awakening</strong> — After breeding a perfect base Pal, use Radiant Gems (from World Tree content) to push it even further.
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
  gap: 1.25rem;
}

.tip-list > li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--washi-dim);
  line-height: 1.65;
}

.tip-list > li::before {
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

.tip-list ol {
  margin: 0.6rem 0 0;
  padding-left: 1.3rem;
  color: var(--mist);
}

.tip-list ol li {
  margin-bottom: 0.3rem;
}
</style>