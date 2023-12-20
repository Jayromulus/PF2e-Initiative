import { Card, Dialog, DialogContent, Grid } from "@mui/material";
import HealthBar from "../healthBar/HealthBar";
import './CharacterCard.css';
import conditions from '../data/conditions';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useRef, useState, Fragment } from "react";
import CharacterEdit from "./characterEdit/CharacterEdit";

// name, current and max hp, condition list, some way to edit the hp and some way to move the card(?)
function CharacterCard({ name, currentHP, maxHP, npc, currentConditions }) {
  const [c_name, setName] = useState(name);
  const [c_currentHP, setCurrentHP] = useState(currentHP);
  const [c_maxHP, setMaxHP] = useState(maxHP);
  const [c_npc, setNPC] = useState(npc);
  const [c_currentConditions, setCurrentConditions] = useState(currentConditions);
  // set to false on character remove drag to remove from display (might not be the best)
  const [characterInList, setCharacterInList] = useState(true);
  const [editDisplay, setEditDisplay] = useState(false);

  function cardDisplay() {
    console.log(c_name);
    setEditDisplay(true);
  }

  function handleClose() {
    setEditDisplay(false);
  }

  return characterInList ? (
    <Card sx={{ bgcolor: 'background.card', color: 'text.black', mt: 4 }}>
      <Grid container>
        <Grid item xs={6} onClick={cardDisplay}>
          <Grid container>
            <Grid item xs={9} className='text-center'>
              <h2>{c_name}</h2>
            </Grid>
            <Grid item xs={3} className='text-center'>
              {!c_npc && <h2 style={{ display: 'inline-block' }}>{c_currentHP}/{c_maxHP}</h2>}
              {/* <EditIcon /> */}
            </Grid>
            <Grid item xs={12}>
              <HealthBar current={c_currentHP} max={c_maxHP} npc={c_npc} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          {/* <h2>conditions</h2> */}
          {Object.keys(conditions).filter(key => c_currentConditions?.includes(key)).map((cond, ind) =>
            <img className="current-condition" src={conditions[cond].img} width="30" alt={conditions[cond].name} key={ind} />
          )}
        </Grid>
        <Grid item xs={1}>
          <DragIndicatorIcon sx={{ height: '100%', width: '50%', pl: 4 }} />
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