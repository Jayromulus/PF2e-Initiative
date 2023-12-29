import { Button, Dialog, DialogContent, Grid, Slider, TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useState } from "react";

function CharacterEdit({ editDisplay, handleClose, character, update }) {
  // const [confirm, , setConfirm,] = useState(false)

  function confirmDelete() {
    return
  }

  function formatLabel() {
    return character.currentHP;
  }

  return (
    <Dialog
      open={editDisplay}
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
      <DialogContent sx={{ bgcolor: 'background.card', px: 0, py: 6 }}>
        <Grid container>
          <Grid item xs={9} md={10} sx={{ width: '100%', textAlign: 'center', pl: 2 }}>
            <TextField
              label="Name"
              variant='filled'
              value={character.name}
              onChange={e => update.name(e.target.value)}
              sx={{ pb: 4, width: '95%' }}
            />
          </Grid>

          <Grid item xs={1} sx={{ textAlign: 'center', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="main"
              style={{ width: '100%', height: '65%' }}
              sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
            >
              <DeleteForeverIcon onClick={confirmDelete} />
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ px: 6 }} >
            {
              !character.npc ?
                <Slider
                  aria-label="healthbar"
                  defaultValue={character.currentHP / character.maxHP}
                  value={(character.currentHP / character.maxHP) * 100}
                  onChange={e => update.currentHP(Math.floor(character.maxHP * (e.target.value / 100)))}
                  step={1 / character.maxHP}
                  valueLabelFormat={formatLabel}
                  valueLabelDisplay="auto"

                  color={
                    (character.currentHP / character.maxHP) * 100 === 0 ?
                      'dying' :
                      (character.currentHP / character.maxHP) * 100 > 66 ?
                        'highHealth' :
                        (character.currentHP / character.maxHP) * 100 > 33 ?
                          'midHealth' :
                          'lowHealth'
                  }
                  // color={'primary'}
                  marks={[{ value: 0, label: '0' }, { value: 100, label: `${character.maxHP}` }]}
                />
                :
                <Slider
                  aria-label="healthbar"
                  disabled
                // defaultValue={character.currentHP / character.maxHP}
                // value={(character.currentHP / character.maxHP) * 100}
                // onChange={e => update.currentHP(Math.floor(character.maxHP * (e.target.value / 100)))}
                // step={1 / character.maxHP}
                // valueLabelFormat={formatLabel}
                // valueLabelDisplay="auto"

                // color={
                //   (character.currentHP / character.maxHP) * 100 > 66 ?
                //     'highHealth' :
                //     (character.currentHP / character.maxHP) * 100 > 33 ?
                //       'midHealth' :
                //       'lowHealth'
                // }
                // color={'primary'}
                // marks={[{ value: 0, label: '0' }, { value: 100, label: `${character.maxHP}` }]}
                />
            }
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default CharacterEdit;