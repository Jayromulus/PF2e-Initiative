import { Card, Grid /*, useMediaQuery */ } from "@mui/material";
import HealthBar from "../healthBar/HealthBar";
import './CharacterCard.css';
import conditions from '../../data/conditions';
// import EditIcon from '@mui/icons-material/Edit';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useState, useEffect } from "react";
import EditCharacter from "./editCharacter/EditCharacter";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditConditions from "./editConditions/EditConditions";

// name, current and max hp, condition list, some way to edit the hp and some way to move the card(?)
function CharacterCard({ characters, index, name, currentHP, maxHP, npc, currentConditions, updatePosition, removeFromList, updateStorage }) {
  // const desktop = useMediaQuery('(min-width: 600px)');

  const [c_name, setName] = useState(name);
  const [c_currentHP, setCurrentHP] = useState(currentHP);
  const [c_maxHP, setMaxHP] = useState(maxHP);
  const [c_npc, setNPC] = useState(npc);
  const [c_currentConditions, setCurrentConditions] = useState(currentConditions);
  // set to false on character remove drag to remove from display (might not be the best)
  // const [characterInList, setCharacterInList] = useState(true);
  const [editDisplay, setEditDisplay] = useState(false);

  const [editConditions, setEditConditions] = useState(false);

  useEffect(updateStorage, [c_name, c_currentHP, c_maxHP, c_npc, c_currentConditions, updateStorage]);

  // for some reason this is required in order to update the cards. I really have no idea why this would be necessary but Jojo and Borg say it could be something to do with the mounted cards having access to the states which are not being updated when the array proper is being updated, which is stopping the re-render
  useEffect(() => { setName(name); updateCharacter() }, [name]);
  useEffect(() => { setCurrentHP(currentHP); updateCharacter() }, [currentHP]);
  useEffect(() => { setMaxHP(maxHP); updateCharacter() }, [maxHP]);
  useEffect(() => { setNPC(npc); updateCharacter() }, [npc]);
  useEffect(() => { setCurrentConditions(currentConditions); updateCharacter() }, [currentConditions]);

  function cardDisplay() {
    setEditDisplay(true);
  }

  function handleClose() {
    setEditDisplay(false);
    setEditConditions(false);
  }

  function conditionsDisplay() {
    setEditConditions(true);
  }

  function updateCharacter() {
    console.log(c_currentConditions);

    localStorage.characters = JSON.stringify([
      [...characters.value.slice(0, index)],
      {
        name: c_name,
        currentHP: c_currentHP,
        maxHP: c_maxHP,
        npc: c_npc,
        conditions: [...c_currentConditions ?? []]
      },
      [...characters.value.slice(index + 1)]
    ]);
  }

  return (
    <Card sx={{ bgcolor: 'background.card', color: 'text.purple', my: 4 }}>
      <Grid container>
        {/* {desktop && <Grid item xs={2} md={1}>
          <DragIndicatorIcon sx={{ height: '100%', width: '50%', pl: 4 }} />
        </Grid>} */}
        <Grid item xs={2} md={1}>
          <Grid container direction='column' alignItems='center' sx={{ height: '100%' }}>
            <Grid alignItems='center' item xs={6} onClick={() => updatePosition('up')}><KeyboardArrowUpIcon sx={{ width: '50px', height: '50px', pt: 0.5 }} /></Grid>
            <Grid alignItems='center' item xs={6} onClick={() => updatePosition('down')}><KeyboardArrowDownIcon sx={{ width: '50px', height: '50px', pt: 0.5 }} /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={11}>
          <Grid container>
            {/* character name and health bar */}
            <Grid item xs={12} md={6} onClick={cardDisplay}>
              <Grid container>
                <Grid item xs={12} md={9} className='text-center'
                // style={{
                //   filter: 'invert(4%) sepia(82%) saturate(5032%) hue-rotate(235deg) brightness(94%) contrast(97%)'
                // }}
                >
                  <h2>{c_name}</h2>
                </Grid>
                <Grid item xs={12} md={3} className='text-center'
                // style={{
                //   filter: 'invert(4%) sepia(82%) saturate(5032%) hue-rotate(235deg) brightness(94%) contrast(97%)'
                // }}
                >
                  {!c_npc && <h2 style={{ display: 'inline-block' }}>{c_currentHP}/{c_maxHP}</h2>}
                </Grid>
                <Grid item xs={12}>
                  <HealthBar current={c_currentHP} max={c_maxHP} npc={c_npc} />
                </Grid>
              </Grid>
            </Grid>
            {/* conditions display */}
            <Grid item xs={12} md={6} onClick={conditionsDisplay}>
              <Grid container sx={{ py: 2, pr: 2 }}>
                {Object.keys(conditions).filter(key => c_currentConditions?.includes(key)).map((cond, ind) =>
                  <Grid key={ind} item xs={3} md={1} sx={{ textAlign: 'center' }}>
                    <img
                      className="current-condition"
                      src={conditions[cond].img}
                      width="30"
                      alt={conditions[cond].name}
                      key={ind}
                      style={{
                        filter: 'invert(4%) sepia(82%) saturate(5032%) hue-rotate(235deg) brightness(94%) contrast(97%)'
                        //   filter: 'brightness(0.9) invert(.7) sepia(.9) hue-rotate(210deg) saturate(1000%)'
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <EditCharacter
        editDisplay={editDisplay}
        handleClose={handleClose}
        character={{
          name: c_name,
          currentHP: c_currentHP,
          maxHP: c_maxHP,
          npc: c_npc,
        }}
        update={{
          name: setName,
          currentHP: setCurrentHP,
          maxHP: setMaxHP,
          npc: setNPC,
          delete: removeFromList
        }} />

      <EditConditions
        open={editConditions}
        handleClose={handleClose}
        character={{ conditions: c_currentConditions ?? [] }}
        update={{ conditions: setCurrentConditions }}
      />
    </Card>
  )
}

export default CharacterCard;