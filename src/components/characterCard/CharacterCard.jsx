import { Card, Grid /*, useMediaQuery */ } from "@mui/material";
import HealthBar from "../healthBar/HealthBar";
import './CharacterCard.css';
import conditions from '../../data/conditions';
// import EditIcon from '@mui/icons-material/Edit';
// import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useState, useEffect } from "react";
import CharacterEdit from "./characterEdit/CharacterEdit";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// name, current and max hp, condition list, some way to edit the hp and some way to move the card(?)
function CharacterCard({ name, currentHP, maxHP, npc, currentConditions, updatePosition }) {
  // const desktop = useMediaQuery('(min-width: 600px)');

  const [c_name, setName] = useState(name);
  const [c_currentHP, setCurrentHP] = useState(currentHP);
  const [c_maxHP, setMaxHP] = useState(maxHP);
  const [c_npc, setNPC] = useState(npc);
  const [c_currentConditions, setCurrentConditions] = useState(currentConditions);
  // set to false on character remove drag to remove from display (might not be the best)
  const [characterInList, setCharacterInList] = useState(true);
  const [editDisplay, setEditDisplay] = useState(false);

  useEffect(() => { setName(name); }, [name]);
  useEffect(() => { setCurrentHP(currentHP); }, [currentHP]);
  useEffect(() => { setMaxHP(maxHP); }, [maxHP]);
  useEffect(() => { setNPC(npc); }, [npc]);
  useEffect(() => { setCurrentConditions(currentConditions); }, [currentConditions]);

  function cardDisplay() {
    setEditDisplay(true);
  }

  function handleClose() {
    setEditDisplay(false);
  }

  return characterInList ? (
    <Card sx={{ bgcolor: 'background.card', color: 'text.black', my: 4 }}>
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
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12} md={6} onClick={cardDisplay}>
              <Grid container>
                <Grid item xs={12} md={9} className='text-center'>
                  <h2>{c_name}</h2>
                </Grid>
                <Grid item xs={12} md={3} className='text-center'>
                  {!c_npc && <h2 style={{ display: 'inline-block' }}>{c_currentHP}/{c_maxHP}</h2>}
                </Grid>
                <Grid item xs={12}>
                  <HealthBar current={c_currentHP} max={c_maxHP} npc={c_npc} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Grid container sx={{ py: 2 }} onClick={() => setCurrentConditions(c_currentConditions)}>
                {Object.keys(conditions).filter(key => c_currentConditions?.includes(key)).map((cond, ind) =>
                  <Grid key={ind} item xs={3} md={1} sx={{ textAlign: 'center' }}>
                    <img className="current-condition" src={conditions[cond].img} width="30" alt={conditions[cond].name} key={ind} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CharacterEdit
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
          delete: () => setCharacterInList(false)
        }} />
    </Card>
  ) : null
}

export default CharacterCard