
import { useEffect, useState } from "react";
import Image from "next/image"

import ButtonCTA_Primary from "../ButtonCTA_Primary/ButtonCTA_Primary";
import { HeroSectionLeftRightStyled } from "../HeroLeftSection/HeroSectionLeftRight.style";

const HeroRightAside = () => {
  let listOfImage = ["/Bootcamper1.png","/Bootcamper2.png","/Bootcamper3.png","/Bootcamper4.png"]

  let [toggle,setToggle]= useState("/Bootcamper1.png")

  useEffect(()=>{
      setTimeout(()=>{
        console.log(listOfImage[Math.floor(Math.random()*listOfImage.length)])
        let randomBootcamperIMG=listOfImage[Math.floor(Math.random()*listOfImage.length)]
        if(randomBootcamperIMG===toggle){
          setToggle("/Bootcamper5.png")
        }else{
          setToggle(randomBootcamperIMG)
        }
      },2000)

  },[toggle])



  return ( 
    <HeroSectionLeftRightStyled>

      <h2 style={{fontSize:"1.1rem",fontWeight:"lighter"}}>Bootcampers</h2>

      <Image src={toggle} width="177.15" height="196.31"  alt="sponsor"/>


      <ButtonCTA_Primary width={"150px"} fontSize="1.2rem">Enrol Now</ButtonCTA_Primary>
      {/* <PulseSphere Left={"65%"} top="10%" delay={"2s"}/> */}
    </HeroSectionLeftRightStyled>
   );
}
 
export default HeroRightAside;