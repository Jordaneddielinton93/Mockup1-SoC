

import styled from 'styled-components';

export const FloatingParticlesStyled = styled.div`
  position:absolute;
  height:100vh;
  width:100%;
  top:0;
  left:0;
  z-index:1;
  .Particle-wrapper{
    width:100%;
    height:100%;
    position:relative ;
    overflow:hidden;
  }
  .Particle{
    position:absolute ;
    width:15px;
    height:15px;
    bottom:0;
    left:10%;
    background:#C36BE2 ;
    border-radius:100% ;
    animation: Riseing 10s linear infinite;
  }
  .Particle:nth-child(2){
    background:#49DBC9 ;
  }
  .Particle:nth-child(6){
    background:#F6BD79 ;
  }
  @keyframes Riseing{
    0%{
      transform:translateX(10px);
      bottom:-20px ;
      background:#C36BE2 ;
    }
    10%{
      transform:translateX(-10px);
      bottom:10%;
    }
    20%{
      transform:translateX(10px);
      bottom:20%;
    }
    30%{
      transform:translateX(-10px);
      bottom:30%;
      background:#49DBC9 ;
    }
    40%{
      transform:translateX(10px);
      bottom:40%;
    }
    50%{
      transform:translateX(-10px);
      bottom:50%;
    }
    60%{
      transform:translateX(10px);
      bottom:60%;
      background:#C36BE2 ;
    }
    70%{
      transform:translateX(-10px);
      bottom:70%;
    }
    80%{
      transform:translateX(10px);
      bottom:80%;
    }
    90%{
      transform:translateX(-10px);
      bottom:90%;
    }
    100%{
      transform:translateX(10px);
      bottom:100%;
      background:#49DBC9;

    }
  }
`