<!-- <template>
  <header>
    <nav>
      <ul>
        <li>
          <div class="seal">巻</div>
          <NuxtLink to="/palworld"> Palworld</NuxtLink>
        </li>
        <li>
          <div class="seal">巻</div>
          <NuxtLink to="/monsterhunterwilds"> MH Wilds</NuxtLink>
        </li>
        <li>
          <div class="seal">巻</div>
          <NuxtLink to="/about"> About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template> -->

<template>
  <header class="app-header">
    <div class="header-inner">
      <nav>
        <ul>
          <li><NuxtLink to="/"><div class="seal">巻</div> Home</NuxtLink></li>
          <li><NuxtLink to="/palworld"><div class="seal">巻</div> Palworld</NuxtLink></li>
          <li><NuxtLink to="/monsterhunterwilds"><div class="seal">巻</div> MH Wilds</NuxtLink></li>
          <li><NuxtLink to="/about"><div class="seal">巻</div> About</NuxtLink></li>
        </ul>
      </nav>

      <button class="jump-btn" @click="scrollToBottom" title="Jump to bottom">
        ↓ Bottom
      </button>
    </div>
  </header>
</template>

<script setup>
const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(44, 36, 22, 0.12);
  backdrop-filter: blur(8px);
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 0.25rem 0;
  position: relative;
  border-bottom: none;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--vermilion);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

nav a:hover,
nav a.router-link-active {
  color: var(--vermilion);
}

nav a:hover::after,
nav a.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
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

@media (max-width: 640px) {
  .header-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 0.9rem;
  }

  nav ul {
    justify-content: center;
    gap: 1.2rem;
  }

  .jump-btn {
    align-self: center;
  }
}
</style>