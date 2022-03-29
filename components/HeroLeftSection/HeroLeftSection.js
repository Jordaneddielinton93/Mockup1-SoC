
import Image from "next/image"
import ButtonCTA_Primary from "../ButtonCTA_Primary/ButtonCTA_Primary";
import { HeroSectionLeftRightStyled} from "./HeroSectionLeftRight.style";

const HeroLeftAside = () => {
  
  return ( 
    <HeroSectionLeftRightStyled>
      
        <h2 style={{fontSize:"1.1rem",fontWeight:"lighter"}}>Sponsors & Partners</h2>

        <Image src="/Sponsor.svg" width="248" height="229"  alt="sponsor"/>


        <ButtonCTA_Primary width={"150px"} fontSize="1.2rem">Find Out</ButtonCTA_Primary>
      
    </HeroSectionLeftRightStyled>
   );
}
 
export default HeroLeftAside;