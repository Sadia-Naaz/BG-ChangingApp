import {BrowserRouter,Routes,Rout} from "react";


const Test =()=>{
    return(<BrowserRouter>
    <Routes>
   <Route element={<h1>Lazy Loading</h1>}/>
  <Route element = {<p>It is the process of loading the content only when the user demand for it</p>}/>
   </Routes>
   <BrowserRouter/>
    )
};
export default Test;
