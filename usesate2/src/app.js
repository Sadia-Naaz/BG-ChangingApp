 import "./style.css";
 import {useState}  from "react";
//  functional component-> Functional components are the basic js functions whichh starts from Capital lettrs 
// and returns a valid JSX.
//useState has to be used inside functional components only.
 const App =()=>{
    console.log("rerendered");//when there is state change than only react is gonna re render.
    const [count,setCount]=useState(100);

    const increment=()=>{
       setCount(count+1);//setCount(100+1)
        console.log(count);//it will get the value from it's lexiacal parent that is 100
        // so at ui we'll be getting updated value  and the console will get the previous value
    }
    return (
        <div id="container">
            <button onClick={increment}>click</button>
            <h1>{count}</h1>
            </div>
    )
};
export default App;