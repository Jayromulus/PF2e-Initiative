import { Card, Grid } from "@mui/material";
import HealthBar from "../healthBar/HealthBar";
import './CharacterCard.css';
import conditions from '../data/conditions';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

// name, current and max hp, condition list, some way to edit the hp and some way to move the card(?)
function CharacterCard({ name, currentHP, maxHP, boss, charConditions }) {
  return (
    <Card sx={{ bgcolor: 'background.card', color: 'text.black', mt: 4 }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={9} className='text-center'>
              <h2>{ name }</h2>
            </Grid>
            <Grid item xs={3} className='text-center'>
              {!boss && <h2 style={{ display: 'inline-block' }}>{ currentHP }/{ maxHP }</h2>}
              {/* <EditIcon /> */}
            </Grid>
            <Grid item xs={12}>
              <HealthBar current={ currentHP } max={ maxHP } boss={ boss } />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          {/* <h2>conditions</h2> */}
          {Object.keys(conditions).filter(key => charConditions?.includes(key)).map((cond, ind) => 
            <img className="current-condition" src={conditions[cond].img} width="30" alt={conditions[cond].name} key={ind} />
          )}
        </Grid>
        <Grid item xs={1}>
          <DragIndicatorIcon sx={{ height: '100%', width: '50%', pl: 4 }} />
        </Grid>
      </Grid>
      {/* <br />
      <br />
      <HealthBar boss />
      <HealthBar current={45} max={56} />
      <HealthBar current={31} max={56} />
      <HealthBar current={12} max={56} /> */}
    </Card>
  )
}

export default CharacterCard