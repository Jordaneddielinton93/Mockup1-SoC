import { WaveAnimationStyle } from "./WaveAnimation.style";
// import wave1 from "/wave-top.png"
// import wave2 from "/wave-mid.png"
// import wave3 from "/wave-bot.png"
const WaveAnimation = ({Top,Bottom,rotation}) => {
  return ( 
    <WaveAnimationStyle Top={Top} Bottom={Bottom} rotation={rotation+"deg"}>
      <div className="waveWrapper waveAnimation">
        <div className="bgTop">
          <div className="wave waveTop" style={{"background-image": `url(/wave-top.png)`}}>

          </div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{"background-image": `url(/wave-top.png)`}}>

          </div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{"background-image": `url(/wave-top.png)`}}>
            
          </div>
        </div>
      </div>
    </WaveAnimationStyle>
   );
}
 
export default WaveAnimation;