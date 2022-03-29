import PulseSphere from "../PulseSphere/PulseSphere";
import FloatingParticles from "../FloatingParticles/FloatingParticles"
const LandingPageAnimations = () => {
  return ( 
    <>
      <PulseSphere Left={"25%"} top="10%" />
      <PulseSphere Left={"65%"} top="40%" delay={"2s"} />
      <FloatingParticles/>
    </>
   );
}
 
export default LandingPageAnimations;