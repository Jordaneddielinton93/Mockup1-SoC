
import Image from "next/image"
import ButtonCTA_Primary from "../ButtonCTA_Primary/ButtonCTA_Primary";
import { NavBarStyled } from "./Navbar.styles";
const Navbar = () => {
  return ( 
    <NavBarStyled>
      
      <h1 className="NavLogo">
        <Image width={54} height={54}
        src="/schoolOfCodeLogo.png" 
        alt="School of code logo"/>
      </h1>

      <ul className="NavUL">
        <li className="NavUL-Links">Blog</li>
        <li className="NavUL-Links">Graduates</li>
        <li className="NavUL-Links">Instensive</li>
        <li className="NavUL-Links">Sponsors & Partners</li>
        <li className="NavUL-Links">Careers</li>
      </ul>

      <ButtonCTA_Primary>Apply Now</ButtonCTA_Primary>

      
    </NavBarStyled>
   );
}
 
export default Navbar;