

const PageSection = ({children,height,width,bg_color}) => {
// if there is not a width passed as a prop set it to 100%
// if there is not a height passed as a prop set it to 100vh
// if there is not a bg_color passed as a prop set it to red
  let style={
    position:"relative",
    width:width?width:"100%",
    height:height?height:"100vh",
    background:bg_color?bg_color:"red",
    display:"flex"
  }

  return ( 
    <section style={style}>
      {children}
    </section>
   );
}
 
export default PageSection;