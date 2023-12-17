import { LinearProgress, Container, linearProgressClasses } from "@mui/material"

function HealthBar({ current, max, boss }) {
  let percent = (current / max) * 100;
  let original = percent;
  if (percent > 100) percent = 100;

  return (
    <LinearProgress 
      variant="determinate" 
      value={percent} 
      sx={{ 
        height: '1.5rem', 
        mb: 3,
        mx: 3,
        borderRadius: '1rem', 
        bgcolor: 'background.healthBG',
        [`& .${linearProgressClasses.bar}`]: {
          bgcolor: boss ? 'background.bossHealth' : original > 100 ? 'background.overheal' :original > 75 ? 'background.highHealth' : original > 33 ? 'background.midHealth' : 'background.lowHealth'
        }
      }} />
  )
}

export default HealthBar