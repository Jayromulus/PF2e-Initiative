import conditions from "../data/conditions"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Grid } from "@mui/material";
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Grid container>
        <Grid item xs={2} className="icon-center"><PersonAddIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        <Grid item xs={10} className="sidebar-text"><p>Add New Character</p></Grid>
      </Grid>

      {/* <hr style={{ width: '85%', marginRight: '3.5rem' }} /> */}
      {/* <br /> */}

      <Grid container >
        <Grid item xs={2} className="icon-center"><PersonRemoveIcon sx={{ width: '50px', height: '50px' }} className="sidebar-icon" /></Grid>
        <Grid item xs={10} className="sidebar-text"><p>Remove Character</p></Grid>
      </Grid>

      <hr style={{ width: '85%', marginRight: '2.5rem' }} />

      <Grid container sx={{ pb: 3 }}>
        {
          Object.keys(conditions).map((cond, ind) => {
            let current = conditions[cond];
            return (
              <Grid item xs={6} key={ind}>
                <Grid container>
                  <Grid item xs={2} className="icon-center"><img src={current.img} alt={current.name} width="50px" className="condition-icon" /></Grid>
                  <Grid item xs={10} className="icon-text"><p>{current.name}</p></Grid>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default Sidebar