const ButtonCTA_Primary = ({children,height,width,fontSize,borderRadius,color,bg_color}) => {

  let style={
    // border:"solid thick #7A7757",
    background:bg_color?bg_color:"white",
    height:height?height:"34px",
    width:width?width:"100px",
    borderRadius:borderRadius?borderRadius:"20px",
    fontSize:fontSize?fontSize:"",
    color:color?color:"black",
    cursor:"pointer"
  }

  return ( 
    <button style={style}>
      {children}
    </button>
   );
}
 
export default ButtonCTA_Primary;