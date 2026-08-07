<template>
  <section id="breeding-tree" class="section">
    <h2>Breeding Tree</h2>
    <div class="card">
      <p class="intro">
        Breeding uses a hidden Breeding Power Value (BPV). The child is determined by averaging the parents’ BPV and finding the closest matching species. Some combinations are fixed exceptions.
      </p>

      <div class="tree">
        <h3>Useful Early → Mid Chains</h3>
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

        <h3>Other Notable Routes</h3>
        <ul class="notable">
          <li><strong>Anubis</strong> — Also reachable via Vanwyrm + Cinnamoth and several other pairs.</li>
          <li><strong>Mossanda Lux</strong> — Mossanda + Grizzbolt (fixed fusion-style pair).</li>
          <li><strong>Legendaries</strong> (Jetragon, Frostallion, Paladius, Necromus) — Same-species only after catching the original.</li>
          <li><strong>Frostallion Noct</strong> — Typically Helzephyr + Frostallion path.</li>
        </ul>
      </div>

      <p class="note">
        Use a breeding calculator for exact multi-generation paths from the Pals you currently own. The reverse-lookup approach is far more efficient than memorizing every combo.
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
  color: var(--gold);
  margin: 1.75rem 0 1rem;
  letter-spacing: 0.05em;
}

.tree h3:first-child {
  margin-top: 0;
}

.chain {
  display: grid;
  gap: 0.85rem;
  margin-bottom: 0.5rem;
}

.step {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  padding: 0.7rem 1rem;
  background: rgba(26, 22, 20, 0.55);
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
  color: var(--gold);
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
  gap: 0.7rem;
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