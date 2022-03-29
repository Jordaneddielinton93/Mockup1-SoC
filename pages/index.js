import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageSection from '../components/PageSection/PageSection';
import HeroLeftAside from '../components/HeroLeftSection/HeroLeftSection';
import HeroRightAside from '../components/HeroRightSection/HeroRightSection';
import HeroMiddleMain from '../components/HeroMiddleSection/HeroMiddleMain';
import WaveAnimation from '../components/WaveAnimation/WaveAnimation';
import LandingPageAnimations from '../components/LandingPageAnimations/LandingPageAnimations';
import WhatIsSchoolOfCodeLeft from '../components/WhatIsSchoolOfCode/WhatIsSchoolOfCodeLeft';
import WhatIsSchoolOfCodeRight from '../components/WhatIsSchoolOfCode/WhatIsSchoolOfCodeRight';
import OurSponsorsLeft from '../components/OurSponsors/OurSponsorsLeft';
export default function Home() {
  
  

  return (
    <div className={styles.Home}>

      <Navbar/>
      {/* Landing Page */}
      <PageSection bg_color={"#011C25"}>
        <div style={{position:"fixed",width:"100%",height:"100vh",display:"flex"}}>
          <HeroLeftAside/>
          <HeroMiddleMain/>
          <HeroRightAside/>
          <LandingPageAnimations/>
        </div>
      </PageSection>

      {/* What is School Of Code */}
      <PageSection height={"70vh"} bg_color={"white"}>
        <WaveAnimation Top="-139px"/>
        <WhatIsSchoolOfCodeLeft/>
        <WhatIsSchoolOfCodeRight/>
        <WaveAnimation Bottom={"-139px"} rotation="180"/>
      </PageSection>

      {/* Our Sponsors */}
      <PageSection height={"130vh"}  bg_color={"#011C25"}>
        <OurSponsorsLeft/>
        {/* <OurSponsorsRight/> */}
      </PageSection>

      <PageSection bg_color={"white"}>

      </PageSection>
    </div>
  )
}
