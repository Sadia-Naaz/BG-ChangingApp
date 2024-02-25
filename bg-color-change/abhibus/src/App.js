import { useState } from "react";
const Main=()=>{

}
const NavBar =()=>
     {
  const[Theme,setTheme]=useState("light");
  const toggleTheme=()=>{
  setTheme(Theme==="light"?"dark":"light");
  }
  return(
    <nav >
    <lable for ='theme-change'>Theme</lable>
    <input type="radio" id="theme"/>
    </nav>
  )
}


export const Theme =()=>{
  return (
    <>
    <NavBar/>
    <Main/>
    
    </>
  )
}