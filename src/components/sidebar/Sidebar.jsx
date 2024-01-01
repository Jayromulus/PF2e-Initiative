import conditions from "../../data/conditions"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Grid, useMediaQuery } from "@mui/material";
import './Sidebar.css';
import AddCharacter from "../characterCard/addCharacter/AddCharacter";
import { useState } from "react";

function Sidebar({ characters, setCharacters }) {
  const desktop = useMediaQuery('(min-width: 600px)');
  const [name, setName] = useState('');
  const [maxHP, setMaxHP] = useState(0);
  const [npc, setNPC] = useState(false);
  const [addDisplay, setAddDisplay] = useState(false);

  function handleOpen() {
    setAddDisplay(true);
  }

  function handleClose() {
    setAddDisplay(false);
  }

  function addCharacter() {
    setCharacters([...characters, { name, maxHP, currentHP: maxHP, npc, conditions: [] }])
    setAddDisplay(false);
    setName('');
    setMaxHP(0);
    setNPC(false);
  }

  // console.log({ desktop })

  return (
    <div
      className="sidebar"
      style={{
        filter: 'invert(4%) sepia(82%) saturate(5032%) hue-rotate(235deg) brightness(94%) contrast(97%)'
      }}
    >
      <Grid container onClick={handleOpen}>
        <Grid item xs={6} md={2} className="icon-center"><PersonAddIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text" sx={{ pt: 1 }}><p>Add New Character</p></Grid>}

        {/* <Grid item xs={6} md={2} className="icon-center"><PersonRemoveIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text"><p>Remove Character</p></Grid>} */}
      </Grid>

      {/* <Divider variant="middle" /> */}
      {/* <hr style={{ width: '85%', marginRight: '2.5rem' }} /> */}

      <Grid container sx={{ pb: 4 }}>
        {
          Object.keys(conditions).map((cond, ind) => {
            let current = conditions[cond];
            return (
              <Grid item xs={6} sm={4} key={ind}>
                <Grid container>
                  <Grid item xs={12} md={2} className="icon-center"><img src={current.img} alt={current.name} width="50px" className="condition-icon" /></Grid>
                  {desktop && <Grid item xs={10} className="icon-text"><p>{current.name}</p></Grid>}
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>

      {/* <hr style={{ width: '85%', marginRight: '2.5rem' }} /> */}

      {/* <Grid container sx={{ pb: 4 }}>
        <p style={{ paddingLeft: '1.6em' }}>Status icons come from <a href="https://www.reddit.com/r/Pathfinder2e/comments/g19a98/roll20_token_markers_pathfinder_2e_conditions/" target="_blank" rel="noreferrer">this reddit post by FatMani</a></p>
      </Grid> */}

      <AddCharacter character={{ name, maxHP, npc }} update={{ name: setName, maxHP: setMaxHP, npc: setNPC, addCharacter }} open={addDisplay} handleClose={handleClose} />
    </div>
  )
}

export default Sidebar