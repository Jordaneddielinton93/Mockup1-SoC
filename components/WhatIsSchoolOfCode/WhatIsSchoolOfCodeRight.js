import Image from "next/image"

const WhatIsSchoolOfCodeRight = () => {

  let style = {
    // width:"50%",
    
    margin:"auto"
  }

  return ( 
    <aside style={style}>
      <Image src="/SoC.svg" onClick={()=>console.log("hi")} height="486px" width="405px"  alt="school of code image"/>
    </aside>
   );
}
 
export default WhatIsSchoolOfCodeRight;