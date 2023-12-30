import { Box, Grid, useMediaQuery } from "@mui/material"
// import Grid from '@mui/material/Unstable_Grid2'
import Sidebar from "../../components/sidebar/Sidebar"
import CardList from "../cardList/CardList"

function Home() {
  const desktop = useMediaQuery('(min-width: 600px)');

  return (
    <Box sx={{ bgcolor: 'background.main', width: '100vw', height: '100vh', m: 0, color: 'text.black' }}>
      <Grid container sx={{ height: '100%' }}>
        {
          desktop &&
          <Grid item xs={4} lg={3} sx={{ bgcolor: 'background.card', pl: 0, pr: 0 }}>
            <div>
              <Sidebar />
            </div>
          </Grid>
        }
        <Grid item xs={12} sm={8} lg={9} sx={{ px: 4, overflowy: 'scroll' }}>
          <div>
            <CardList />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home