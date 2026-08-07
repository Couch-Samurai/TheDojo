<template>
  <div class="mh-builds book-page">
    <!-- Decorative book header line -->
    <div class="book-header-line"></div>

    <!-- Tab bar – styled like chapter markers / hanging slips -->
    <nav class="tab-bar" role="tablist">
      <button
        v-for="build in visibleBuilds"
        :key="build.id"
        class="tab"
        :class="{ active: activeId === build.id }"
        role="tab"
        :aria-selected="activeId === build.id"
        @click="selectBuild(build.id)"
      >
        {{ build.title }}
      </button>
    </nav>

    <!-- Only the active build is rendered -->
    <section
      v-if="activeBuild"
      class="build-section"
      role="tabpanel"
      :key="activeId"
    >
      <header class="section-header">
        <h2>{{ activeBuild.title }}</h2>
        <p v-if="activeBuild.subtitle" class="subtitle">{{ activeBuild.subtitle }}</p>
      </header>

      <!-- Intro – looks like a handwritten note on the page -->
      <div v-if="activeBuild.intro?.length" class="intro-card">
        <p
          v-for="(paragraph, i) in activeBuild.intro"
          :key="i"
          v-html="paragraph"
        ></p>
      </div>

      <!-- Weapon Progression -->
      <div v-if="activeBuild.weapons?.length" class="card">
        <h3>
          <span class="chapter-mark">一</span>
          Weapon Progression
        </h3>
        <p
          v-if="activeBuild.weaponNote"
          class="card-note"
          v-html="activeBuild.weaponNote"
        ></p>

        <div class="weapon-grid">
          <div
            v-for="(weapon, wIndex) in activeBuild.weapons"
            :key="wIndex"
            class="weapon-item"
            :class="weapon.element"
          >
            <span class="element-tag">{{ weapon.elementLabel || weapon.element }}</span>
            <span class="weapon-name">{{ weapon.name }}</span>
            <span v-if="weapon.monster" class="monster">({{ weapon.monster }})</span>
            <span v-if="weapon.next" class="next">{{ weapon.next }}</span>
          </div>
        </div>

        <p
          v-if="activeBuild.weaponHighlight"
          class="highlight-note"
          v-html="activeBuild.weaponHighlight"
        ></p>
      </div>

      <!-- Equipment Loadout -->
      <div v-if="activeBuild.equipment" class="card equipment-card">
        <h3>
          <span class="chapter-mark">二</span>
          Equipment
        </h3>

        <div class="equipment-grid">
          <!-- Primary Weapon -->
          <div
            v-if="activeBuild.equipment.primaryWeapon"
            class="equip-slot weapon-slot"
          >
            <div class="slot-label">Primary Weapon</div>
            <div class="slot-content">
              <strong>{{ activeBuild.equipment.primaryWeapon.name }}</strong>
              <ul
                v-if="activeBuild.equipment.primaryWeapon.decos?.length"
                class="decos"
              >
                <li
                  v-for="(deco, d) in activeBuild.equipment.primaryWeapon.decos"
                  :key="d"
                >
                  {{ deco }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Secondary Weapon -->
          <div class="equip-slot">
            <div class="slot-label">Secondary Weapon</div>
            <div
              class="slot-content"
              :class="{ empty: !activeBuild.equipment.secondaryWeapon }"
            >
              {{ activeBuild.equipment.secondaryWeapon || 'Empty' }}
            </div>
          </div>

          <!-- Armor pieces -->
          <div
            v-for="piece in armorSlots"
            :key="piece.key"
            class="equip-slot"
          >
            <div class="slot-label">{{ piece.label }}</div>
            <div
              class="slot-content"
              :class="{ empty: !activeBuild.equipment[piece.key] }"
            >
              <template v-if="activeBuild.equipment[piece.key]">
                <strong>{{ activeBuild.equipment[piece.key].name }}</strong>
                <span
                  v-if="activeBuild.equipment[piece.key].slots"
                  class="slots"
                >
                  {{ activeBuild.equipment[piece.key].slots }}
                </span>
              </template>
              <template v-else>Empty</template>
            </div>
          </div>

          <!-- Talisman -->
          <div class="equip-slot">
            <div class="slot-label">Talisman</div>
            <div
              class="slot-content"
              :class="{ empty: !activeBuild.equipment.talisman }"
            >
              <strong v-if="activeBuild.equipment.talisman">
                {{ activeBuild.equipment.talisman }}
              </strong>
              <template v-else>Empty</template>
            </div>
          </div>

          <!-- Mantle -->
          <div class="equip-slot">
            <div class="slot-label">Mantle</div>
            <div
              class="slot-content"
              :class="{ empty: !activeBuild.equipment.mantle }"
            >
              {{ activeBuild.equipment.mantle || 'Empty Slot' }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Decorative bottom seal / colophon -->
    <div class="book-footer">
      <span class="seal">武</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const armorSlots = [
  { key: 'head', label: 'Head' },
  { key: 'chest', label: 'Chest' },
  { key: 'arms', label: 'Arms' },
  { key: 'waist', label: 'Waist' },
  { key: 'legs', label: 'Legs' },
]

const builds = ref([
  {
    id: 'hr-progression',
    title: 'HR Progression',
    subtitle: 'Rarity 6 stepping-stone set → Endgame',
    hidden: false,
    intro: [
      `This Armor setup intends to build <strong>Rarity 6</strong> pieces to use as a stepping point to endgame Armor sets.
       These unlock at <strong>HR 21</strong> and you can use your Low Rank Armor up to this point.
       Remember to use <strong>Armor Spheres</strong> to upgrade your Armor's defense.`,
      `From here, build toward the <strong>Recommended Build</strong> on the first Variant tab.
       Decorations do not matter too much — use what you have and farm up the required Jewels.`,
    ],
    weaponNote: `Craft weapons as you advance the story. Better options become available at <strong>HR 41+</strong>.
                 While leveling HR, craft and upgrade these:`,
    weapons: [
      { element: 'raw',     elementLabel: 'Raw',     name: 'Wyvern Blade "Verde" I', monster: 'Rathian' },
      { element: 'fire',    elementLabel: 'Fire',    name: 'Wyvern Blade "Blood" I', monster: 'Rathalos' },
      { element: 'water',   elementLabel: 'Water',   name: 'Kakaru Kumo Naki I',     monster: 'Mizutsune' },
      { element: 'thunder', elementLabel: 'Thunder', name: 'Thunderclap I',          monster: 'Lagiacrus' },
      { element: 'ice',     elementLabel: 'Ice',     name: 'Windclaw Blade I',       monster: 'Hirabami' },
      {
        element: 'dragon',
        elementLabel: 'Dragon',
        name: 'Stahlfakt I → Stahlrecht',
        monster: 'Gore Magala',
        next: 'then Blazing Rafel (Zoh Shia)',
      },
    ],
    weaponHighlight: `Remember to craft <strong>Rarity 8 Artians</strong> as soon as you're able to.`,
    equipment: {
      primaryWeapon: {
        name: 'Stahlrecht',
        decos: ['Attack Jewel III', 'Attack Jewel II', 'Expert Jewel'],
      },
      secondaryWeapon: null,
      head:  { name: 'Xu Wu Helm β',          slots: 'Empty Slot / Empty Slot' },
      chest: { name: 'Blango Mail β',         slots: 'Empty Slot' },
      arms:  { name: 'G. Fulgur Vambraces α', slots: 'Empty Slot' },
      waist: { name: 'Blango Coil β',         slots: 'Empty Slot / Empty Slot' },
      legs:  { name: 'Mizutsune Greaves β',   slots: 'Empty Slot' },
      talisman: 'Sheathe Charm III',
      mantle: null,
    },
  },

  {
    id: 'example-endgame',
    title: 'Example Endgame',
    subtitle: 'Replace this with a real build',
    hidden: false,
    intro: [
      `This is just a placeholder so you can see how the tabs work.`,
      `Set <code>hidden: true</code> on any build you want to remove from the tab bar.`,
    ],
    weapons: [
      { element: 'dragon', elementLabel: 'Dragon', name: 'Blazing Rafel', monster: 'Zoh Shia' },
    ],
    equipment: {
      primaryWeapon: {
        name: 'Blazing Rafel',
        decos: ['Attack Jewel III', 'Critical Jewel III'],
      },
      secondaryWeapon: null,
      head:  { name: 'Gore Helm β',      slots: 'Empty Slot / Empty Slot' },
      chest: { name: 'Numinous Shroud β', slots: 'Empty Slot' },
      arms:  { name: 'Gore Vambraces β',  slots: 'Empty Slot' },
      waist: { name: 'Gore Coil β',       slots: 'Empty Slot / Empty Slot' },
      legs:  { name: 'Gore Greaves β',    slots: 'Empty Slot' },
      talisman: 'Exploiter Charm II',
      mantle: null,
    },
  },
])

const visibleBuilds = computed(() =>
  builds.value.filter(b => !b.hidden)
)

const activeId = ref(null)

function selectBuild(id) {
  activeId.value = id
}

watch(
  visibleBuilds,
  (list) => {
    if (!list.length) {
      activeId.value = null
      return
    }
    const stillVisible = list.some(b => b.id === activeId.value)
    if (!stillVisible) {
      activeId.value = list[0].id
    }
  },
  { immediate: true }
)

const activeBuild = computed(() =>
  visibleBuilds.value.find(b => b.id === activeId.value) || null
)
</script>

<style scoped>
/* =========================================
   BOOK PAGE LOOK – Old Japanese Book Theme
   ========================================= */

.mh-builds.book-page {
  font-family: var(--font-body);
  color: var(--ink);
  line-height: 1.75;
  position: relative;
  background: var(--paper);
  padding: 2.5rem 2.25rem 3rem;
  border-radius: 2px;
  box-shadow:
    0 0 0 1px rgba(44, 36, 22, 0.08),
    0 4px 20px rgba(44, 36, 22, 0.1),
    0 10px 36px rgba(44, 36, 22, 0.06);
  /* subtle paper ruling lines */
  background-image: repeating-linear-gradient(
    transparent,
    transparent 31px,
    rgba(44, 36, 22, 0.025) 31px,
    rgba(44, 36, 22, 0.025) 32px
  );
}

/* Top vermilion header line like a traditional book */
.book-header-line {
  position: absolute;
  top: 0;
  left: 1.75rem;
  right: 1.75rem;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--vermilion) 15%,
    var(--vermilion) 85%,
    transparent
  );
  opacity: 0.75;
}

/* ===== Tab bar – looks like hanging chapter slips ===== */
.tab-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(156, 43, 26, 0.18);
}

.tab {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.07em;
  background: var(--bg-elevated);
  border: 1px solid rgba(44, 36, 22, 0.15);
  color: var(--ink-soft);
  padding: 0.4rem 0.95rem;
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
  position: relative;
  top: 1px;
}

.tab:hover {
  color: var(--vermilion);
  border-color: rgba(156, 43, 26, 0.4);
  background: rgba(156, 43, 26, 0.05);
}

.tab.active {
  background: var(--paper);
  color: var(--vermilion);
  border-color: rgba(156, 43, 26, 0.35);
  border-bottom-color: var(--paper);
  font-weight: 600;
  box-shadow: 0 -1px 0 var(--paper);
}

/* ===== Section header ===== */
.section-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.section-header h2 {
  margin: 0 0 0.35rem;
  font-size: 1.65rem;
  color: var(--vermilion);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.06em;
  border: none;
  padding: 0;
}

.subtitle {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ink-faint);
  font-style: italic;
  letter-spacing: 0.02em;
}

/* ===== Intro – like a note written on the page ===== */
.intro-card {
  background: transparent;
  border: none;
  border-left: 2px solid var(--vermilion);
  padding: 0.2rem 0 0.2rem 1.25rem;
  margin-bottom: 2rem;
  box-shadow: none;
}

.intro-card p {
  margin: 0 0 0.85rem;
  color: var(--ink-soft);
  font-size: 0.98rem;
}

.intro-card p:last-child {
  margin-bottom: 0;
}

.intro-card strong {
  color: var(--ink);
  font-weight: 600;
}

/* ===== Cards – like sections of a manuscript ===== */
.card {
  background: transparent;
  border: none;
  border-top: 1px solid rgba(44, 36, 22, 0.1);
  border-radius: 0;
  padding: 1.6rem 0 0.5rem;
  margin-bottom: 1.75rem;
  box-shadow: none;
}

.card h3 {
  margin: 0 0 1rem;
  font-size: 1.2rem;
  color: var(--gold);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.chapter-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 0.85rem;
  color: var(--paper);
  background: var(--vermilion);
  border-radius: 2px;
  font-weight: 600;
}

.card-note {
  margin: 0 0 1.2rem;
  color: var(--ink-soft);
  font-size: 0.95rem;
}

/* ===== Weapon grid ===== */
.weapon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 0.65rem;
  margin-bottom: 1.1rem;
}

.weapon-item {
  background: var(--bg-elevated);
  border: 1px solid rgba(44, 36, 22, 0.1);
  border-radius: 2px;
  padding: 0.7rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  border-left-width: 3px;
  border-left-style: solid;
}

.weapon-item.raw     { border-left-color: #7a6b55; }
.weapon-item.fire    { border-left-color: #9c2b1a; }
.weapon-item.water   { border-left-color: #3a6b8c; }
.weapon-item.thunder { border-left-color: #8a6d2b; }
.weapon-item.ice     { border-left-color: #5a7a8c; }
.weapon-item.dragon  { border-left-color: #6b3a7a; }

.element-tag {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--ink-faint);
}

.weapon-name {
  font-weight: 600;
  font-size: 0.94rem;
  color: var(--ink);
  font-family: var(--font-display);
}

.monster {
  font-size: 0.84rem;
  color: var(--ink-faint);
}

.next {
  font-size: 0.8rem;
  color: var(--gold);
  margin-top: 0.12rem;
  font-style: italic;
}

.highlight-note {
  background: rgba(156, 43, 26, 0.05);
  border: 1px solid rgba(156, 43, 26, 0.18);
  padding: 0.75rem 1.1rem;
  border-radius: 2px;
  margin: 0;
  font-size: 0.94rem;
  color: var(--ink-soft);
}

.highlight-note strong {
  color: var(--vermilion);
}

/* ===== Equipment grid ===== */
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 0.7rem;
}

.equip-slot {
  background: var(--bg-elevated);
  border: 1px solid rgba(44, 36, 22, 0.1);
  border-radius: 2px;
  padding: 0.75rem 0.95rem;
}

.slot-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--ink-faint);
  margin-bottom: 0.25rem;
  font-family: var(--font-display);
}

.slot-content strong {
  display: block;
  font-size: 0.96rem;
  color: var(--ink);
  margin-bottom: 0.15rem;
  font-family: var(--font-display);
  font-weight: 600;
}

.slot-content .slots {
  font-size: 0.84rem;
  color: var(--ink-faint);
}

.slot-content.empty {
  color: var(--ink-faint);
  font-style: italic;
}

.decos {
  margin: 0.25rem 0 0;
  padding-left: 1.05rem;
  font-size: 0.86rem;
  color: var(--ink-soft);
}

.decos li {
  margin-bottom: 0.08rem;
}

.weapon-slot {
  grid-column: 1 / -1;
  background: rgba(156, 43, 26, 0.04);
  border-color: rgba(156, 43, 26, 0.16);
}

/* ===== Book footer / seal ===== */
.book-footer {
  margin-top: 2.5rem;
  text-align: center;
  opacity: 0.55;
}

.seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--seal);
  border: 2px solid var(--seal);
  border-radius: 2px;
  letter-spacing: 0;
}

@media (max-width: 600px) {
  .mh-builds.book-page {
    padding: 1.75rem 1.25rem 2.25rem;
  }

  .weapon-grid,
  .equipment-grid {
    grid-template-columns: 1fr;
  }
}
</style>