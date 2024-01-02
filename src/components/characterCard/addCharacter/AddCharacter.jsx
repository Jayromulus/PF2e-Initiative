import { Button, Dialog, DialogContent, Grid, TextField } from "@mui/material";
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

function AddCharacter({ open, handleClose, character, update }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "900px",  // Set your width here
          },
        },
      }}
    >
      <DialogContent sx={{ bgcolor: 'background.card', px: 0, pt: 6 }}>
        <Grid container>
          <Grid item xs={9} md={7} sx={{ width: '100%', textAlign: 'center', pl: 4 }}>
            <TextField
              error={ character.name === '' }
              label="Name"
              variant='filled'
              value={character.name}
              onChange={e => update.name(e.target.value)}
              sx={{ pb: 4, width: '95%' }}
            />
          </Grid>

          <Grid item xs={9} md={3} sx={{ width: '100%', textAlign: 'center', pl: 2 }}>
            <TextField
              error={ !character.npc && character.maxHP <= 0 }
              label="Max HP"
              variant='filled'
              value={character.maxHP}
              onChange={e => update.maxHP(e.target.value)}
              sx={{ pb: 4, width: '95%' }}
              disabled={ character.npc }
            />
          </Grid>

          <Grid item xs={1} sx={{ textAlign: 'center', justifyContent: 'center', pl: 4 }}>
            <Button
              variant="contained"
              color="main"
              style={{ width: '100%', height: '65%' }}
              sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
              onClick={() => { update.npc(!character.npc) }}
            >
              {character.npc ? <NoAccountsIcon /> : <PersonIcon />}
            </Button>
          </Grid>

          <Grid item xs={8} sx={{ mx: 'auto' }}>
            <Button
              variant="contained"
              color="main"
              style={{ width: '100%', height: '100%' }}
              sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
              onClick={character.name && (character.npc || character.maxHP) ? update.addCharacter : () => console.log('cant add empty character')}
            >
              <b>ADD CHARACTER</b>
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default AddCharacter;