import CharacterCard from "../../components/characterCard/CharacterCard";
import exampleCharacters from '../../components/data/characters';

function CardList() {
  return (
    <>
      {
        exampleCharacters.map((char, index) => (
          <CharacterCard {...char} key={index} />
        ))
      }
    </>
  )
}

export default CardList;