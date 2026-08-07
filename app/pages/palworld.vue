<template>
  <div class="palworld-page">
    <div class="page">
      <header class="page-header">
        <h1>Palworld Guide</h1>
      </header>

      <!-- Navigation between sections -->
      <nav class="section-nav">
        <a href="#tips">Tips</a>
        <a href="#best-for-base">Best for Base</a>
        <a href="#best-for-fighting">Best for Fighting</a>
        <a href="#breeding-tree">Breeding Tree</a>
        <a href="#breeding-tips">Breeding Tips</a>
      </nav>

      <!-- Sections -->
      <PalworldTips />
      <PalworldBestForBase />
      <PalworldBestForFighting />
      <PalworldBreedingTree />
      <PalworldBreedingTips />
      <BreedingCalculator />

    </div>
  </div>
</template>

<script setup>
import BreedingCalculator from '~/components/Palworld/BreedingCalculator.vue'

const scrollToBottom = () => {
  const el = document.getElementById('bottom')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.palworld-page {
  min-height: 100vh;
}

.jump-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
    180deg,
    rgba(15, 13, 12, 0.95) 0%,
    rgba(15, 13, 12, 0.7) 100%
  );
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  backdrop-filter: blur(6px);
}

.jump-btn {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.55rem 1.3rem;
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.jump-btn:hover {
  background: var(--crimson);
  border-color: var(--crimson);
  color: var(--washi);
}

.jump-btn.small {
  font-size: 0.8rem;
  padding: 0.45rem 1.1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-top: 1rem;
}

.page-header h1 {
  margin-bottom: 0.4rem;
}

.subtitle {
  color: var(--mist);
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
}

.section-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.75rem;
  margin-bottom: 3.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
}

.section-nav a {
  font-family: var(--font-display);
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--washi-dim);
  padding: 0.25rem 0;
  position: relative;
}

.section-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--crimson);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.section-nav a:hover {
  color: var(--gold);
}

.section-nav a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.bottom-anchor {
  text-align: center;
  padding: 3rem 0 1rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(212, 175, 55, 0.15);
}

.bottom-anchor p {
  color: var(--mist);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}
</style>