<template>
  <section id="breeding-calculator" class="section">
    <h2>Breeding Calculator</h2>
    <div class="card">
      <p class="intro">
        Search for a Pal to see how to breed it (parents + chains) and what it can produce.
        Data currently focuses on S-Tier routes — expand <code>breedingData.js</code> for full coverage.
      </p>

      <div class="search-box">
        <label for="pal-search">Target Pal</label>
        <div class="input-row">
          <input
            id="pal-search"
            v-model="query"
            type="text"
            list="pal-list"
            placeholder="e.g. Anubis, Shadowbeak, Jormuntide..."
            @keyup.enter="search"
          />
          <button class="btn" @click="search">Search</button>
          <button
            class="btn btn-clear"
            @click="clearResults"
            :disabled="!selectedPal && !searched"
          >
            Clear
          </button>
        </div>
        <datalist id="pal-list">
          <option v-for="pal in searchablePals" :key="pal" :value="pal" />
        </datalist>
      </div>

      <div v-if="selectedPal" class="results">
        <h3 class="result-title">
          Results for <span class="highlight">{{ selectedPal }}</span>
        </h3>

        <div v-if="isSelfBreed" class="warning">
          ⚠️ <strong>{{ selectedPal }}</strong> is self-breed only (or primarily self-breed).
          You need two of the same species after obtaining the first one.
        </div>

        <div class="block">
          <h4>Direct Parent Combinations</h4>
          <div v-if="directParents.length" class="combo-list">
            <div v-for="(pair, i) in directParents" :key="i" class="combo">
              <span class="pal">{{ pair[0] }}</span>
              <span class="plus">+</span>
              <span class="pal">{{ pair[1] }}</span>
              <span class="arrow">→</span>
              <span class="result">{{ selectedPal }}</span>
            </div>
          </div>
          <p v-else class="empty">No direct special combinations found in current data.</p>
        </div>

        <div v-if="chains.length" class="block">
          <h4>Multi-Step Breeding Chains</h4>
          <div v-for="(chain, idx) in chains" :key="idx" class="chain-card">
            <div class="chain-name">{{ chain.name }}</div>
            <div class="steps">
              <div v-for="(step, sIdx) in chain.steps" :key="sIdx" class="step">
                <span class="pal">{{ step.parents[0] }}</span>
                <span class="plus">+</span>
                <span class="pal">{{ step.parents[1] }}</span>
                <span class="arrow">→</span>
                <span class="result" :class="{ highlight: step.result === selectedPal }">
                  {{ step.result }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <h4>What can {{ selectedPal }} breed into?</h4>
          <div v-if="forwardResults.length" class="combo-list">
            <div v-for="(item, i) in forwardResults" :key="i" class="combo">
              <span class="pal">{{ selectedPal }}</span>
              <span class="plus">+</span>
              <span class="pal">{{ item.with }}</span>
              <span class="arrow">→</span>
              <span class="result">{{ item.produces }}</span>
            </div>
          </div>
          <p v-else class="empty">
            No forward examples in current data. Same-species breeding always produces {{ selectedPal }}.
          </p>
        </div>
      </div>

      <div v-else-if="searched" class="empty-state">
        No data found for “{{ query }}”. Try one of the searchable pals or expand the data file.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  reverseMap,
  knownChains,
  selfBreedOnly,
  forwardExamples,
  searchablePals,
} from '~/data/breedingData.js'

const query = ref('')
const selectedPal = ref('')
const searched = ref(false)

const isSelfBreed = computed(() =>
  selfBreedOnly.some(p => p.toLowerCase() === selectedPal.value.toLowerCase())
)

const directParents = computed(() => {
  if (!selectedPal.value) return []
  const key = Object.keys(reverseMap).find(
    k => k.toLowerCase() === selectedPal.value.toLowerCase()
  )
  return key ? reverseMap[key] : []
})

const chains = computed(() => {
  if (!selectedPal.value) return []
  const key = Object.keys(knownChains).find(
    k => k.toLowerCase() === selectedPal.value.toLowerCase()
  )
  return key ? knownChains[key] : []
})

const forwardResults = computed(() => {
  if (!selectedPal.value) return []
  const key = Object.keys(forwardExamples).find(
    k => k.toLowerCase() === selectedPal.value.toLowerCase()
  )
  return key ? forwardExamples[key] : []
})

function search() {
  const cleaned = query.value.trim()
  if (!cleaned) {
    clearResults()
    return
  }
  const match = searchablePals.find(p => p.toLowerCase() === cleaned.toLowerCase())
  selectedPal.value = match || cleaned
  searched.value = true
}

function clearResults() {
  query.value = ''
  selectedPal.value = ''
  searched.value = false
}
</script>

<style scoped>
  .section {
    margin-bottom: 4rem;
  }

  .intro {
    color: var(--ink-soft);
    margin-bottom: 1.75rem;
    line-height: 1.6;
  }

  .intro code {
    background: rgba(167, 139, 45, 0.15);
    padding: 0.15rem 0.4rem;
    border-radius: 2px;
    color: var(--gold);
  }

  .search-box {
    margin-bottom: 2rem;
  }

  .search-box label {
    display: block;
    font-family: var(--font-display);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-faint);
    margin-bottom: 0.5rem;
  }

  .input-row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .input-row input {
    flex: 1;
    min-width: 220px;
    padding: 0.7rem 1rem;
    background: var(--wood);
    border: 1px solid rgba(234, 228, 217, 0.12);
    border-radius: var(--radius);
    color: var(--ink);
    font-size: 1rem;
    font-family: var(--font-body);
  }

  .input-row input:focus {
    outline: none;
    border-color: var(--crimson);
  }

  /* Only the clear variant – base .btn comes from main.css */
  .btn-clear {
    border-color: var(--ink-faint);
    color: var(--ink-faint);
  }

  .btn-clear:hover:not(:disabled) {
    background: rgba(185, 28, 28, 0.2);
    border-color: var(--crimson);
    color: var(--ink);
  }

  .btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .results {
    border-top: 1px solid rgba(234, 228, 217, 0.08);
    padding-top: 1.75rem;
  }

  .result-title {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .result-title .highlight {
    color: var(--ink);
  }

  .warning {
    background: rgba(185, 28, 28, 0.12);
    border: 1px solid rgba(185, 28, 28, 0.35);
    border-radius: var(--radius);
    padding: 0.9rem 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--ink-soft);
  }

  .block {
    margin-bottom: 2rem;
  }

  .block h4 {
    font-size: 1rem;
    color: var(--gold);
    letter-spacing: 0.05em;
    margin-bottom: 0.9rem;
  }

  .combo-list {
    display: grid;
    gap: 0.65rem;
  }

  .combo,
  .step {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.45rem 0.7rem;
    padding: 0.65rem 1rem;
    background: var(--wood);
    border: 1px solid rgba(234, 228, 217, 0.08);
    border-radius: var(--radius);
    font-size: 0.95rem;
  }

  .pal {
    color: var(--ink);
  }

  .plus,
  .arrow {
    color: var(--ink-faint);
  }

  .result {
    color: var(--ink);
    font-weight: 500;
  }

  .result.highlight {
    color: var(--crimson);
  }

  .chain-card {
    background: var(--wood);
    border: 1px solid rgba(234, 228, 217, 0.08);
    border-radius: var(--radius);
    padding: 1rem 1.2rem;
    margin-bottom: 1rem;
  }

  .chain-name {
    font-family: var(--font-display);
    font-size: 0.9rem;
    color: var(--crimson);
    margin-bottom: 0.75rem;
  }

  .steps {
    display: grid;
    gap: 0.55rem;
  }

  .empty,
  .empty-state {
    color: var(--ink-faint);
    font-size: 0.95rem;
    font-style: italic;
  }

  .empty-state {
    text-align: center;
    padding: 2rem 1rem;
  }
</style>