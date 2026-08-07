<template>
  <section id="tips" class="section">
    <h1>Welcome...</h1>
    <div class="card">
      <ul class="tip-list">
        <li>
          <strong>What do we add here?</strong>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
  .section {
    margin-bottom: 4rem;
    text-align: center;
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