import CharacterCard from "../../components/characterCard/CharacterCard";
import exampleCharacters from '../../data/characters';

function CardList() {
  return (
    <div className="list-container" style={{ overflowY: 'scroll', height: '100vh' }}>
      {
        exampleCharacters.map((char, index) => (
          <CharacterCard {...char} key={index} />
        ))
      }
    </div>
  )
}

export default CardList;