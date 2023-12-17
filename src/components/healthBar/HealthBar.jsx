import { LinearProgress, Container, linearProgressClasses } from "@mui/material"

function HealthBar({ current, max, boss }) {
  let percent = (current / max) * 100;

  return (
    <LinearProgress 
      variant="determinate" 
      value={percent} 
      sx={{ 
        height: '1.5rem', 
        my: 3,
        mx: 3,
        borderRadius: '1rem', 
        bgcolor: 'background.bossHealth',
        [`& .${linearProgressClasses.bar}`]: {
          bgcolor: boss ? 'background.bossHealth' : percent > 75 ? 'background.highHealth' : percent > 33 ? 'background.midHealth' : 'background.lowHealth'
        }
      }} />
  )
}

export default HealthBar