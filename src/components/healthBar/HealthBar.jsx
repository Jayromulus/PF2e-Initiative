import { LinearProgress, linearProgressClasses } from "@mui/material"

function HealthBar({ current, max, npc }) {
  let percent = (current / max) * 100;
  let original = percent;
  if (percent > 100) percent = 100;
  // console.log({ original })

  return (
    <LinearProgress 
      variant="determinate" 
      value={percent} 
      sx={{ 
        height: '1.5rem', 
        mb: 3,
        mx: 3,
        borderRadius: '1rem', 
        bgcolor: percent > 0 ? 'background.healthBG' : 'background.dying',
        [`& .${linearProgressClasses.bar}`]: {
          bgcolor: 
            npc ? 
              'background.npcHealth' : 
            original === 0 ? // for some reason not changing the bar color but tbh it doesnt matter
              'background.dying' : 
            original > 100 ? 
              'background.overheal' : 
            original > 66 ? 
              'background.highHealth' : 
            original > 33 ? 
              'background.midHealth' : 
              'background.lowHealth'
        }
      }} />
  )
}

export default HealthBar;