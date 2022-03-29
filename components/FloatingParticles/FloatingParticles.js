import { FloatingParticlesStyled } from "./FloatingParticles.style";

const FloatingParticles = () => {
  return ( 
    <FloatingParticlesStyled>
      <div className="Particle-wrapper">
        {
          [0,1.1,4.3,5.1,0.5,1.3,2.3,5,6,1,3].map((num,i)=>{
            return (
              <div key={num} style=
              {{
                left:`${i}0%`,
                animationDelay:`${num}s`
              }}
                className="Particle">
              </div>
            )
          })
        }
        
      </div>
    </FloatingParticlesStyled>
   );
}
 
export default FloatingParticles;