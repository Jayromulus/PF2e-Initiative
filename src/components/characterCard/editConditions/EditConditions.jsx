import { Dialog, DialogContent, Grid } from "@mui/material";
import conditions from "../../../data/conditions";

function EditConditions({ open, handleClose, character, update }) {
  function editList(newCond) {
    if (character.conditions.includes(newCond.toLowerCase())) {
      const newArr = [...character.conditions];
      newArr.splice(character.conditions.indexOf(newCond.toLowerCase()), 1);
      update.conditions([...newArr]);
    } else {
      const newArr = [...character.conditions];
      newArr.push(newCond.toLowerCase());
      update.conditions([...newArr]);
    }
  }

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
      }}>
      <DialogContent sx={{ bgcolor: 'background.card', px: 0, pb: 4 }}>
        <Grid container>
          {
            Object.keys(conditions).map((cond, ind) => {
              let current = conditions[cond];
              return (
                <Grid item xs={4} sm={2} key={ind} className="icon-center" sx={{ p: 2 }}>
                  <img 
                    src={current.img} 
                    alt={current.name} 
                    width="75px" 
                    className="condition-icon" 
                    style={{ 
                      opacity: 
                        character.conditions.includes(current.name.toLowerCase()) ? 
                          '100%' : 
                          '33%', 
                      // filter: 
                        // character.conditions.includes(current.name.toLowerCase()) ? 'hue-rotate(90deg)' : 'hue-rotate(0deg)' 
                        // background: 'url(black.png)',
                        filter: 'brightness(0.9) invert(.7) sepia(.9) hue-rotate(220deg) saturate(900%)'
                    }}
                    onClick={() => editList(current.name)}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default EditConditions;