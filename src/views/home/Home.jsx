import { Box, Grid } from "@mui/material"
// import Grid from '@mui/material/Unstable_Grid2'
import Sidebar from "../../components/sidebar/Sidebar"

function Home() {
  return (
    <Box sx={{ bgcolor: 'background.main', width: '100vw', height: '100vh', m: 0 }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={4} lg={3} sx={{ bgcolor: 'background.card',  pl: 4, pr: -4 }}>
          <div>
            <Sidebar />
          </div>
        </Grid>
        <Grid item xs={8} lg={9} sx={{ pl: 4, pr: -4 }}>
          <div>
            <h1>Main Content</h1>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home