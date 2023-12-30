import CharacterCard from "../../components/characterCard/CharacterCard";
import exampleCharacters from '../../data/characters';
import { useState } from 'react';

function CardList() {
  const [characters, setCharacters] = useState(exampleCharacters);

  function updatePosition(direction, current) {
    if(direction === 'up' && current !== 0)
      setCharacters([...characters.slice(0, current - 1), characters[current], ...characters.slice(current - 1, current), ...characters.slice(current + 1)]);
    else if(direction === 'down')
      setCharacters([...characters.slice(0, current),...characters.slice(current + 1, current + 2), characters[current], ...characters.slice(current + 2)]);
  }

  function removeFromList(current) {
    setCharacters([...characters.slice(0, current), ...characters.slice(current+1)]);
  }

  return (
    <div className="list-container" style={{ overflowY: 'scroll', height: '100vh' }}>
      {
        characters.map((char, index) => (
          <CharacterCard {...char} updatePosition={(dir) => updatePosition(dir, index)} removeFromList={() => removeFromList(index)} key={index} />
        ))
      }
    </div>
  )
}

export default CardList;