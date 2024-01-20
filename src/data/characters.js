const characters = [
  {
    name: "High Health",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed'],
    currentHP: 91,
    maxHP: 106,
    npc: false
  },
  {
    name: "Medium Health",
    currentConditions: ['delaying', 'enfeebled', 'fatigued', 'immobilized', 'paralysed'],
    currentHP: 234,
    maxHP: 541,
    npc: false
  },
  {
    name: "Low Health",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened'],
    currentHP: 4,
    maxHP: 68,
    npc: false
  },
  {
    name: "Dying",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed', 'dying'],
    currentHP: 0,
    maxHP: 1093,
    npc: false
  },
  {
    name: "NPC",
    currentConditions: ['greaterCover'],
    currentHP: 0,
    maxHP: 0,
    npc: true
  },
];

export default characters;