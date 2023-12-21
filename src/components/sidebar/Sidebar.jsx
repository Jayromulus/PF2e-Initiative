import conditions from "../data/conditions"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Divider, Grid, useMediaQuery } from "@mui/material";
import './Sidebar.css';

function Sidebar() {
  const desktop = useMediaQuery('(min-width: 600px)');

  console.log({ desktop })

  return (
    <div className="sidebar">
      <Grid container>
        <Grid item xs={6} md={2} className="icon-center"><PersonAddIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text"><p>Add New Character</p></Grid>}

        <Grid item xs={6} md={2} className="icon-center"><PersonRemoveIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        {desktop && <Grid item xs={10} className="sidebar-text"><p>Remove Character</p></Grid>}
      </Grid>

      {/* <Divider variant="middle" /> */}
      {/* <hr style={{ width: '85%', marginRight: '2.5rem' }} /> */}

      <Grid container sx={{ pb: 4 }}>
        {
          Object.keys(conditions).map((cond, ind) => {
            let current = conditions[cond];
            return (
              <Grid item xs={6} key={ind}>
                <Grid container>
                  <Grid item xs={12} md={2} className="icon-center"><img src={current.img} alt={current.name} width="50px" className="condition-icon" /></Grid>
                  {desktop && <Grid item xs={10} className="icon-text"><p>{current.name}</p></Grid>}
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>

      <hr style={{ width: '85%', marginRight: '2.5rem' }} />

      {/* <Grid container sx={{ pb: 4 }}>
        <p style={{ paddingLeft: '1.6em' }}>Status icons come from <a href="https://www.reddit.com/r/Pathfinder2e/comments/g19a98/roll20_token_markers_pathfinder_2e_conditions/" target="_blank" rel="noreferrer">this reddit post by FatMani</a></p>
      </Grid> */}
    </div>
  )
}

export default Sidebar