/**
 * Palworld 1.0 Breeding Data (Starter Set)
 * Focused on S-Tier and commonly used pals.
 * Expand this object as you get more verified combos.
 */

export const specialCombos = [
  { parents: ['Relaxaurus', 'Sparkit'], child: 'Relaxaurus Lux' },
  { parents: ['Relaxaurus Lux', 'Blazamut'], child: 'Jormuntide' },
  { parents: ['Jormuntide', 'Blazehowl'], child: 'Jormuntide Ignis' },
  { parents: ['Relaxaurus Lux', 'Jormuntide Ignis'], child: 'Anubis' },
  { parents: ['Anubis', 'Vanwyrm'], child: 'Faleris' },
  { parents: ['Ragnahawk', 'Killamari'], child: 'Kitsun' },
  { parents: ['Kitsun', 'Astegon'], child: 'Shadowbeak' },
  { parents: ['Mossanda', 'Grizzbolt'], child: 'Mossanda Lux' },
  { parents: ['Mossanda', 'Rayhound'], child: 'Grizzbolt' },
  { parents: ['Frostallion', 'Helzephyr'], child: 'Frostallion Noct' },
  { parents: ['Bushi', 'Penking'], child: 'Anubis' },
  { parents: ['Ragnahawk', 'Tombat'], child: 'Anubis' },
  { parents: ['Quivern', 'Chillet'], child: 'Anubis' },
]

// Build reverse lookup: child → list of parent pairs
export const reverseMap = {}
specialCombos.forEach(({ parents, child }) => {
  if (!reverseMap[child]) reverseMap[child] = []
  reverseMap[child].push([...parents].sort())
})

// Known multi-step chains
export const knownChains = {
  Anubis: [
    {
      name: 'Classic Anubis Chain',
      steps: [
        { parents: ['Relaxaurus', 'Sparkit'], result: 'Relaxaurus Lux' },
        { parents: ['Relaxaurus Lux', 'Blazamut'], result: 'Jormuntide' },
        { parents: ['Jormuntide', 'Blazehowl'], result: 'Jormuntide Ignis' },
        { parents: ['Relaxaurus Lux', 'Jormuntide Ignis'], result: 'Anubis' },
      ],
    },
  ],
  Shadowbeak: [
    {
      name: 'Shadowbeak Route',
      steps: [
        { parents: ['Anubis', 'Vanwyrm'], result: 'Faleris' },
        { parents: ['Ragnahawk', 'Killamari'], result: 'Kitsun' },
        { parents: ['Kitsun', 'Astegon'], result: 'Shadowbeak' },
      ],
    },
  ],
  'Jormuntide Ignis': [
    {
      name: 'Jormuntide Ignis',
      steps: [
        { parents: ['Relaxaurus', 'Sparkit'], result: 'Relaxaurus Lux' },
        { parents: ['Relaxaurus Lux', 'Blazamut'], result: 'Jormuntide' },
        { parents: ['Jormuntide', 'Blazehowl'], result: 'Jormuntide Ignis' },
      ],
    },
  ],
  Faleris: [
    {
      name: 'Faleris from Anubis',
      steps: [
        { parents: ['Anubis', 'Vanwyrm'], result: 'Faleris' },
      ],
    },
  ],
}

// Self-breed only
export const selfBreedOnly = [
  'Orserk', 'Grizzbolt', 'Lyleen', 'Faleris', 'Shadowbeak',
  'Jetragon', 'Frostallion', 'Paladius', 'Necromus', 'Frostallion Noct',
]

// Forward examples
export const forwardExamples = {
  Anubis: [
    { with: 'Vanwyrm', produces: 'Faleris' },
    { with: 'Quivern', produces: 'Astegon' },
  ],
  'Relaxaurus Lux': [
    { with: 'Blazamut', produces: 'Jormuntide' },
    { with: 'Jormuntide Ignis', produces: 'Anubis' },
  ],
  Jormuntide: [
    { with: 'Blazehowl', produces: 'Jormuntide Ignis' },
  ],
  'Jormuntide Ignis': [
    { with: 'Relaxaurus Lux', produces: 'Anubis' },
  ],
  Kitsun: [
    { with: 'Astegon', produces: 'Shadowbeak' },
  ],
  Blazamut: [
    { with: 'Relaxaurus Lux', produces: 'Jormuntide' },
  ],
  Sparkit: [
    { with: 'Relaxaurus', produces: 'Relaxaurus Lux' },
  ],
  Vanwyrm: [
    { with: 'Anubis', produces: 'Faleris' },
  ],
  Astegon: [
    { with: 'Kitsun', produces: 'Shadowbeak' },
  ],
}

export const searchablePals = [
  'Anubis', 'Astegon', 'Blazamut', 'Blazehowl', 'Faleris',
  'Frostallion', 'Frostallion Noct', 'Grizzbolt', 'Jetragon',
  'Jormuntide', 'Jormuntide Ignis', 'Kitsun', 'Lyleen',
  'Mossanda', 'Mossanda Lux', 'Necromus', 'Orserk', 'Paladius',
  'Penking', 'Ragnahawk', 'Relaxaurus', 'Relaxaurus Lux',
  'Shadowbeak', 'Sparkit', 'Vanwyrm',
].sort()