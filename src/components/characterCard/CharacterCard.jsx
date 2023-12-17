import { Card } from "@mui/material"
import HealthBar from "../healthBar/HealthBar"

function CharacterCard() {
  return (
    <Card sx={{ bgcolor: 'background.card' }}>
      <HealthBar boss />
      <HealthBar current={45} max={56} />
      <HealthBar current={31} max={56} />
      <HealthBar current={12} max={56} />
    </Card>
  )
}

export default CharacterCard