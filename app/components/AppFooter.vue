<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <p class="footer-text">
        巻 · Palworld Guide
      </p>

      <button class="jump-btn" @click="scrollToTop" title="Jump to top">
        ↑ Top
      </button>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.app-footer {
  margin-top: 4rem;
  padding: 2rem 1.5rem 2.5rem;
  border-top: 1px solid rgba(44, 36, 22, 0.12);
  background: rgba(232, 217, 192, 0.45);
}

.footer-inner {
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.footer-text {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  color: var(--ink-faint);
}

.jump-btn {
  flex-shrink: 0;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 1.1rem;
  background: transparent;
  color: var(--vermilion);
  border: 1px solid var(--vermilion);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
}

.jump-btn:hover {
  background: var(--vermilion);
  color: var(--paper);
}

@media (max-width: 480px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>