import styled from "styled-components"
export const PulseSphereStyled = styled.div`
      position:absolute ;
      left: ${props=>props.Left};
      top:${props=>props.top};
      width:200px;
      height:200px;
      background-color: #fbc779;
      background:radial-gradient(closest-side,#fbc779,#095A6C ,#012f40)
      };
      z-index:1;
      border-radius:100%;
      opacity:0.4;
      animation: Glow 4s ${props=>props.delay} infinite alternate;
      @keyframes Glow{
        from{
          
          width:100px;
          height:100px;
          
          /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0); */
        }
        to{
        
          width:200px;
          height:200px;
          /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); */

        }
      }
`