import ButtonCTA_Primary from "../ButtonCTA_Primary/ButtonCTA_Primary";
import styles from "./WhatIsSchooOfCodeLeft.module.css"
const WhatIsSchoolOfCodeLeft = () => {

  return ( 
    <aside  className={styles.leftside}>
      <div className={styles.mainContent}>
        <h1 className={styles.mainContent_Title}>What is School of Code</h1>
        <p className={styles.mainContent_Paragraph}>School of code offers a free intensive coding bootcamp , with no prior experience or coding knowledge needed , are you ready for the journey of a life time ?. 
        </p>
        <p className={styles.mainContent_Paragraph}>
          It is about opening the opportunity of tech up to everyone. Our free coding bootcamp takes you from 0 to programmer and launches you into a tech career with our Employer Partners. We&apos;ve achieved 85% employment into tech across all of our bootcamps so far, including during the COVID-19 pandemic.
        </p>
        <p className={styles.mainContent_Paragraph}>
          Take a look back at how it all started with our Cohort 1 video.
        </p>
        
      </div>
      <svg width="100%" viewBox="0 0 867 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M865.828 32.8284C867.391 31.2663 867.391 28.7337 865.828 27.1716L840.373 1.71573C838.81 0.153631 836.278 0.153631 834.716 1.71573C833.154 3.27783 833.154 5.81049 834.716 7.37258L857.343 30L834.716 52.6274C833.154 54.1895 833.154 56.7222 834.716 58.2843C836.278 59.8464 838.81 59.8464 840.373 58.2843L865.828 32.8284ZM0 34H863V26H0V34Z" fill="#011C25"/>
        </svg>
        <div className={styles.ButtonWrapper}>
          <ButtonCTA_Primary 
          fontSize={"1.3rem"} width="150px" height="50px" borderRadius="40px">
            Apply Now
          </ButtonCTA_Primary>
          <ButtonCTA_Primary fontSize={"1.3rem"} width="150px" height="50px" borderRadius="40px">
            Partner Up
          </ButtonCTA_Primary>
        </div>
        
    </aside>
   );
}
 
export default WhatIsSchoolOfCodeLeft;