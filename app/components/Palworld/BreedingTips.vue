<template>
  <section id="breeding-tips" class="section">
    <h2>Breeding Tips</h2>
    <div class="card">
      <ul class="tip-list">
        <li>
          <strong>Unlock order</strong> — Breeding Farm unlocks at Technology Level 19 (100 Wood, 20 Stone, 50 Fiber).
        </li>
        <li>
          <strong>Cake is mandatory</strong> — One cake is consumed per egg. Stockpile early. Advanced cakes (Mushroom, Vegetable, Deluxe Vegetable, Special) improve stats, egg count and mutation chance.
        </li>
        <li>
          <strong>Efficient order of operations</strong>
          <ol>
            <li>Secure the target species first.</li>
            <li>Assemble the desired passive skills (up to 4).</li>
            <li>Refine IVs / talents.</li>
            <li>Run mutation batches once the pair is locked.</li>
          </ol>
        </li>
        <li>
          <strong>Best passives to chase</strong>
          <ul class="sub">
            <li>Base: Artisan, Work Slave, Remarkable Craftsmanship, Serious</li>
            <li>Combat: Demon God, Musclehead, Serenity, Lucky, Ferocious</li>
            <li>Movement: Swift, Runner, Dimensional Leap</li>
          </ul>
        </li>
        <li>
          <strong>Self-breed requirement</strong> — Many S-Tier pals (Orserk, Shadowbeak, Grizzbolt, Lyleen, Faleris after first, all true legendaries) can only be bred with the same species.
        </li>
        <li>
          <strong>Mutations (1.0)</strong> — Every hatch has a chance for a mutated egg with higher stats and a unique passive. Use the best cakes to increase volume.
        </li>
        <li>
          <strong>Incubators & temperature</strong> — Keep eggs at the correct temperature. Multiple incubators dramatically speed up large projects.
        </li>
        <li>
          <strong>Negative passives to remove</strong> — Clumsy, Slacker, Coward, Pacifist, Brittle, Glutton, Bottomless Stomach, Night Owl, Easygoing.
        </li>
        <li>
          <strong>Start with Anubis</strong> — It is the highest priority breeding target for almost every player because of its base utility.
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
    color: var(--ink-soft);
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
    color: var(--ink-faint);
  }

  .tip-list ol li {
    margin-bottom: 0.3rem;
  }

  .sub {
    list-style: none;
    padding: 0.5rem 0 0 0.5rem;
    margin: 0;
    display: grid;
    gap: 0.35rem;
  }

  .sub li {
    color: var(--ink-faint);
    font-size: 0.92rem;
    position: relative;
    padding-left: 1rem;
  }

  .sub li::before {
    content: '–';
    position: absolute;
    left: 0;
    color: var(--crimson);
  }
</style>