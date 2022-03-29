
import ButtonCTA_Primary from "../ButtonCTA_Primary/ButtonCTA_Primary";
import styles from './HeroMiddleMain.module.css'
const HeroMiddleMain = () => {
  return ( 
    <main className={styles.HeroMiddle}>
      <div className={styles.Title}>
        <h1 className={styles.TitleBadge}>
          <span className={styles.TitleBadgeThe}>THE</span>
        </h1>
        <h1 className={styles.TitleSchool}>SCHOOL</h1>
        <div className={styles.TitleWrap}>
          <h1 className={styles.TitleWrapOf}>OF</h1>
           <ButtonCTA_Primary 
            height={"80px"}
            fontSize={"1.8rem"}
            width="250px"
            borderRadius="40px"
            color="white"
            bg_color="linear-gradient(160deg, #011c25 0%, #043f4d 100%)"
            >
              APPLY NOW
            </ButtonCTA_Primary>
         </div>
        <h1 className={styles.TitleCode}>Code</h1>
        <h3 className={styles.TitleFreeCodingBC}>FREE CODING BOOTCAMP</h3>
      </div>
      
    </main>
   );
}
 
export default HeroMiddleMain;