import { Box, Grid, useMediaQuery } from "@mui/material"
// import Grid from '@mui/material/Unstable_Grid2'
import Sidebar from "../../components/sidebar/Sidebar"
import CardList from "../cardList/CardList"
// import exampleCharacters from '../../data/characters';
import { useEffect, useState } from "react";

function Home() {
  const desktop = useMediaQuery('(min-width: 600px)');

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(JSON.parse(localStorage.characters) ?? []);
  }, [])

  // useEffect(() => {
  //   // localStorage.characters = JSON.stringify(characters);
  //   // console.log({ characters });
  //   updateStorage();
  // }, [characters]);

  function updateStorage() {
    console.log('updating storage')
    localStorage.characters = JSON.stringify(characters);
  }

  return (
    <Box sx={{ bgcolor: 'background.main', width: '100vw', height: '100vh', m: 0, color: 'text.black' }}>
      <Grid container sx={{ height: '100%' }}>
        {
          desktop &&
          <Grid item xs={4} lg={3} sx={{ bgcolor: 'background.card', pl: 0, pr: 0 }}>
            <div>
              <Sidebar characters={characters} setCharacters={setCharacters} />
            </div>
          </Grid>
        }
        <Grid item xs={12} sm={8} lg={9} sx={{ px: 4, overflowy: 'scroll' }}>
          <div>
            <CardList updateStorage={updateStorage} characters={characters} setCharacters={setCharacters} />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home