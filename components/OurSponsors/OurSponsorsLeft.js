import PulseSphere from "../PulseSphere/PulseSphere";
import styles from "./OurSponsorsLeft.module.css"
import Image from "next/image"
const OurSponsorsLeft = () => {



  let listOfImages = [
    <Image src="/OAG.png" key="1" width="70" height="70"  alt="sponsor"/>,
    <Image src="/Sponsor2.png" key="1" width="107.32" height="68.6"  alt="sponsor"/>,
    <Image src="/Sponsor3.png" key="1" width="151.47" height="72.68"  alt="sponsor"/>,
    <Image src="/Sponsor4.png" key="1" width="193" height="144"  alt="sponsor"/>,
  ]

  return ( 
    <aside className={styles.LeftSection}>
      <h1 className={styles.Title}>Our Sponsors</h1>
      <div className={styles.SolarSystem}>

        
          {listOfImages.map((T,I)=>{
            return (
              <div 
                key={I} 
                className={styles.SolarSystem_ImgRotate} 
                style={{animationDelay:`${I+I}s`}}>

                  <div className={styles.SolarSystem_Img1}
                  style={{animationDelay:`${I+I}s`}}
                  >{T}</div>
             
              </div>
            )
          })}
          
       
        


        <div className={styles.SolarSystemCircle2}>
          <div className={styles.SolarSystemCircle2_innerCircle}></div>
          <div className={styles.SolarSystemCircle2_innerCircle}></div>
        </div>

        <div className={styles.SolarSystemCircle1}></div>

        <div className={styles.SolarSystemSun}>
          <Image src="/OurSponsorsSun.png" width="73.36" height="73.36"  alt="sponsor"/>
        </div>
      </div>
    </aside>
   );
}
 
export default OurSponsorsLeft;