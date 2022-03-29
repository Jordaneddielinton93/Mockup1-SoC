
import { PulseSphereStyled } from "./PulseSphere.style"

export default function PulseSphere({delay,Left,top}){

  return (
    <PulseSphereStyled  
      delay={delay}
      Left={Left} 
      top={top}
      className="Main-Middle-Sphere">
    </PulseSphereStyled>
  )
}