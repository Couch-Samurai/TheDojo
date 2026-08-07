<template>
  <div class="mh-wilds-build">
    <!-- High Rank Armor Set for Progression -->
    <section class="build-section progression-build">
      <header class="section-header">
        <h2>High Rank Armor Set for Progression</h2>
        <p class="subtitle">Rarity 6 stepping-stone set → Endgame</p>
      </header>

      <div class="intro-card">
        <p>
          This Armor setup intends to build <strong>Rarity 6</strong> pieces to use as a stepping point to endgame Armor sets.
          These unlock at <strong>HR 21</strong> and you can use your Low Rank Armor up to this point.
          Remember to use <strong>Armor Spheres</strong> to upgrade your Armor's defense.
        </p>
        <p>
          From here, build toward the <strong>Recommended Build</strong> on the first Variant tab.
          Decorations do not matter too much — use what you have and farm up the required Jewels.
        </p>
      </div>

      <!-- Weapon Progression -->
      <div class="card">
        <h3>Weapon Progression</h3>
        <p class="card-note">
          Craft weapons as you advance the story. Better options become available at <strong>HR 41+</strong>.
          While leveling HR, craft and upgrade these:
        </p>

        <div class="weapon-grid">
          <div class="weapon-item raw">
            <span class="element-tag">Raw</span>
            <span class="weapon-name">Wyvern Blade "Verde" I</span>
            <span class="monster">(Rathian)</span>
          </div>
          <div class="weapon-item fire">
            <span class="element-tag">Fire</span>
            <span class="weapon-name">Wyvern Blade "Blood" I</span>
            <span class="monster">(Rathalos)</span>
          </div>
          <div class="weapon-item water">
            <span class="element-tag">Water</span>
            <span class="weapon-name">Kakaru Kumo Naki I</span>
            <span class="monster">(Mizutsune)</span>
          </div>
          <div class="weapon-item thunder">
            <span class="element-tag">Thunder</span>
            <span class="weapon-name">Thunderclap I</span>
            <span class="monster">(Lagiacrus)</span>
          </div>
          <div class="weapon-item ice">
            <span class="element-tag">Ice</span>
            <span class="weapon-name">Windclaw Blade I</span>
            <span class="monster">(Hirabami)</span>
          </div>
          <div class="weapon-item dragon">
            <span class="element-tag">Dragon</span>
            <span class="weapon-name">Stahlfakt I → Stahlrecht</span>
            <span class="monster">(Gore Magala)</span>
            <span class="next">then Blazing Rafel (Zoh Shia)</span>
          </div>
        </div>

        <p class="highlight-note">
          Remember to craft <strong>Rarity 8 Artians</strong> as soon as you're able to.
        </p>
      </div>

      <!-- Equipment Loadout -->
      <div class="card equipment-card">
        <h3>Equipment</h3>

        <div class="equipment-grid">
          <!-- Primary Weapon -->
          <div class="equip-slot weapon-slot">
            <div class="slot-label">Primary Weapon</div>
            <div class="slot-content">
              <strong>Stahlrecht</strong>
              <ul class="decos">
                <li>Attack Jewel III</li>
                <li>Attack Jewel II</li>
                <li>Expert Jewel</li>
              </ul>
            </div>
          </div>

          <!-- Secondary Weapon -->
          <div class="equip-slot">
            <div class="slot-label">Secondary Weapon</div>
            <div class="slot-content empty">Empty</div>
          </div>

          <!-- Head -->
          <div class="equip-slot">
            <div class="slot-label">Head</div>
            <div class="slot-content">
              <strong>Xu Wu Helm β</strong>
              <span class="slots">Empty Slot / Empty Slot</span>
            </div>
          </div>

          <!-- Chest -->
          <div class="equip-slot">
            <div class="slot-label">Chest</div>
            <div class="slot-content">
              <strong>Blango Mail β</strong>
              <span class="slots">Empty Slot</span>
            </div>
          </div>

          <!-- Arms -->
          <div class="equip-slot">
            <div class="slot-label">Arms</div>
            <div class="slot-content">
              <strong>G. Fulgur Vambraces α</strong>
              <span class="slots">Empty Slot</span>
            </div>
          </div>

          <!-- Waist -->
          <div class="equip-slot">
            <div class="slot-label">Waist</div>
            <div class="slot-content">
              <strong>Blango Coil β</strong>
              <span class="slots">Empty Slot / Empty Slot</span>
            </div>
          </div>

          <!-- Legs -->
          <div class="equip-slot">
            <div class="slot-label">Legs</div>
            <div class="slot-content">
              <strong>Mizutsune Greaves β</strong>
              <span class="slots">Empty Slot</span>
            </div>
          </div>

          <!-- Talisman -->
          <div class="equip-slot">
            <div class="slot-label">Talisman</div>
            <div class="slot-content">
              <strong>Sheathe Charm III</strong>
            </div>
          </div>

          <!-- Mantle -->
          <div class="equip-slot">
            <div class="slot-label">Mantle</div>
            <div class="slot-content empty">Empty Slot</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Ready for expansion – add reactive data, props, or API calls here if needed
</script>

<style scoped>
.mh-wilds-build {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e8e6e3;
  background: #1a1c1e;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.5;
}

.section-header {
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #c9a227;
  padding-bottom: 0.75rem;
}

.section-header h2 {
  margin: 0 0 0.25rem;
  font-size: 1.6rem;
  color: #f0d878;
  letter-spacing: 0.02em;
}

.subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #a0a0a0;
}

.intro-card {
  background: #25282c;
  border-left: 4px solid #c9a227;
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
  margin-bottom: 1.5rem;
}

.intro-card p {
  margin: 0 0 0.75rem;
}

.intro-card p:last-child {
  margin-bottom: 0;
}

.card {
  background: #22252a;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #33383f;
}

.card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  color: #f0d878;
}

.card-note {
  margin: 0 0 1rem;
  color: #b0b0b0;
  font-size: 0.95rem;
}

.weapon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.weapon-item {
  background: #2a2e34;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-left: 4px solid #666;
}

.weapon-item.raw { border-left-color: #bbb; }
.weapon-item.fire { border-left-color: #e05a3c; }
.weapon-item.water { border-left-color: #4a9de0; }
.weapon-item.thunder { border-left-color: #e0c04a; }
.weapon-item.ice { border-left-color: #7ec8e8; }
.weapon-item.dragon { border-left-color: #9b5de5; }

.element-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.85;
}

.weapon-name {
  font-weight: 600;
  font-size: 0.98rem;
}

.monster {
  font-size: 0.85rem;
  color: #999;
}

.next {
  font-size: 0.8rem;
  color: #c9a227;
  margin-top: 0.15rem;
}

.highlight-note {
  background: #2e2a1e;
  border: 1px solid #c9a22755;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin: 0;
  font-size: 0.95rem;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.85rem;
}

.equip-slot {
  background: #2a2e34;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  border: 1px solid #3a4048;
}

.slot-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #888;
  margin-bottom: 0.35rem;
}

.slot-content strong {
  display: block;
  font-size: 1rem;
  color: #f0d878;
  margin-bottom: 0.25rem;
}

.slot-content .slots {
  font-size: 0.85rem;
  color: #999;
}

.slot-content.empty {
  color: #666;
  font-style: italic;
}

.decos {
  margin: 0.35rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.88rem;
  color: #b8b8b8;
}

.decos li {
  margin-bottom: 0.15rem;
}

.weapon-slot {
  grid-column: 1 / -1;
  background: #2e2a1e;
  border-color: #c9a22755;
}

@media (max-width: 600px) {
  .weapon-grid,
  .equipment-grid {
    grid-template-columns: 1fr;
  }
}
</style>