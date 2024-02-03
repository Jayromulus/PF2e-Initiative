import { Button, Dialog, DialogContent, Grid, Input, Slider, TextField } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

function EditCharacter({ editDisplay, handleClose, character, update }) {
  const [damage, setDamage] = useState(0);
  const [heal, setHeal] = useState(0)

  function formatLabel() {
    return character.currentHP;
  }

  function dealDamage() {
    update.maxHP(parseInt(character.maxHP) + parseInt(damage));
    setDamage(0);
    handleClose();
  }

  function dealDamagePlayer() {
    update.currentHP(parseInt(character.currentHP) - parseInt(damage));
    setDamage(0);
    handleClose();
  }

  function healDamagePlayer() {
    update.currentHP(parseInt(character.currentHP) + parseInt(heal));
    setHeal(0);
    handleClose();
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
          <Grid item xs={12} md={7} sx={{ width: '100%', textAlign: 'center', pl: 4 }}>
            <TextField
              label="Name"
              variant='filled'
              value={character.name}
              onChange={e => update.name(e.target.value)}
              sx={{ pb: 4, width: '95%' }}
            />
          </Grid>

          <Grid item xs={12} md={3} sx={{ width: '100%', textAlign: 'center', pl: 2 }}>
            <TextField
              label="Max HP"
              variant='filled'
              value={character.maxHP}
              onChange={e => update.maxHP(e.target.value)}
              sx={{ pb: 4, width: '95%' }}
            />
          </Grid>

          <Grid item xs={1} sx={{ textAlign: 'center', justifyContent: 'center', pl: 4 }}>
            <Button
              variant="contained"
              color="main"
              style={{ width: '100%', height: '65%' }}
              sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
              onClick={() => { update.delete(); handleClose(); }}
            >
              <DeleteForeverIcon />
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ px: 6 }} >
            {
              !character.npc ?
                <>
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
                  <Grid container>
                    <Grid item xs={8}>

                      <TextField
                        label="Incoming Damage"
                        variant='filled'
                        value={damage > 0 ? damage : ''}
                        onChange={e => setDamage(e.target.value)}
                        sx={{ pb: 4, width: '95%' }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="contained"
                        color="main"
                        style={{ width: '100%', height: '65%' }}
                        sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
                        onClick={dealDamagePlayer}
                      >
                        Damage
                      </Button>
                    </Grid>

                    <Grid container>
                      <Grid item xs={8}>

                        <TextField
                          label="Incoming Healing"
                          variant='filled'
                          value={heal > 0 ? heal : ''}
                          onChange={e => setHeal(e.target.value)}
                          sx={{ pb: 4, width: '95%' }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="main"
                          style={{ width: '100%', height: '65%' }}
                          sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
                          onClick={healDamagePlayer}
                        >
                          Heal
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
                :

                <Grid container>
                  <Grid item xs={8}>

                    <TextField
                      label="Incoming Damage"
                      variant='filled'
                      value={damage > 0 ? damage : ''}
                      onChange={e => setDamage(e.target.value)}
                      sx={{ pb: 4, width: '95%' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      color="main"
                      style={{ width: '100%', height: '65%' }}
                      sx={{ color: 'background.main', ':hover': { color: 'background.card' } }}
                      onClick={dealDamage}
                    >
                      Damage
                    </Button>
                  </Grid>
                </Grid>
              // <Slider
              //   aria-label="healthbar"
              //   disabled
              // // defaultValue={character.currentHP / character.maxHP}
              // // value={(character.currentHP / character.maxHP) * 100}
              // // onChange={e => update.currentHP(Math.floor(character.maxHP * (e.target.value / 100)))}
              // // step={1 / character.maxHP}
              // // valueLabelFormat={formatLabel}
              // // valueLabelDisplay="auto"

              // // color={
              // //   (character.currentHP / character.maxHP) * 100 > 66 ?
              // //     'highHealth' :
              // //     (character.currentHP / character.maxHP) * 100 > 33 ?
              // //       'midHealth' :
              // //       'lowHealth'
              // // }
              // // color={'primary'}
              // // marks={[{ value: 0, label: '0' }, { value: 100, label: `${character.maxHP}` }]}
              // />
            }
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default EditCharacter;