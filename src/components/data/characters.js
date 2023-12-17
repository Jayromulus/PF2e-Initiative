const characters = [
  {
    name: "Overheal",
    currentConditions: ['broken', 'concealed', 'cover', 'friendly', 'invisible', 'undetected', 'unnoticed'],
    currentHP: 51,
    maxHP: 36,
    boss: false
  },
  {
    name: "High Health",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed'],
    currentHP: 91,
    maxHP: 106,
    boss: false
  },
  {
    name: "Medium Health",
    currentConditions: ['delaying', 'enfeebled', 'fatigued', 'immobilized', 'paralysed'],
    currentHP: 234,
    maxHP: 541,
    boss: false
  },
  {
    name: "Low Health",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened'],
    currentHP: 4,
    maxHP: 68,
    boss: false
  },
  {
    name: "Dying",
    currentConditions: ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed', 'dying'],
    currentHP: 0,
    maxHP: 1093,
    boss: false
  },
  {
    name: "Boss",
    currentConditions: ['greaterCover'],
    boss: true
  },
];

export default characters;