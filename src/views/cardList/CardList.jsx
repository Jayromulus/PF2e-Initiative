import CharacterCard from "../../components/characterCard/CharacterCard"

function CardList() {
  let overConditions = ['broken', 'concealed', 'cover', 'friendly', 'invisible', 'undetected', 'unnoticed'];
  let highConditions = ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed'];
  let midConditions = ['delaying', 'enfeebled', 'fatigued', 'immobilized', 'paralysed'];
  let lowConditions = ['blinded', 'clumsy', 'deafened', 'frightened', 'doomed', 'dying'];
  let dmConditions = ['greaterCover'];
  return (
    <>
      <CharacterCard name='Overheal' currentHP={51} maxHP={36} charConditions={overConditions} />
      <CharacterCard name='High Health' currentHP={91} maxHP={106} charConditions={highConditions} />
      <CharacterCard name='Medium Health' currentHP={234} maxHP={541} charConditions={midConditions} />
      <CharacterCard name='Low Health' currentHP={4} maxHP={68} charConditions={lowConditions} />
      <CharacterCard name='DM Character' boss charConditions={dmConditions} />
    </>
  )
}

export default CardList