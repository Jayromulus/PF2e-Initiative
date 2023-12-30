import CharacterCard from "../../components/characterCard/CharacterCard";
import exampleCharacters from '../../data/characters';
import { useEffect, useState } from 'react';

function CardList() {
  const [characters, setCharacters] = useState(exampleCharacters);

  function updatePosition(current) {
    setCharacters([...characters.slice(0, current - 1), characters[current], ...characters.slice(current - 1, current), ...characters.slice(current + 1)]);
  }

  useEffect(() => console.log({ characters }), [characters]);

  return (
    <div className="list-container" style={{ overflowY: 'scroll', height: '100vh' }}>
      {
        characters.map((char, index) => (
          <CharacterCard {...char} updatePosition={() => updatePosition(index)} key={index} />
        ))
      }
    </div>
  )
}

export default CardList;