import { useState } from "react"
import './style.css'

export const Example =()=>{
    const [count,setCount]=useState(0);
    const  increment=()=>{
        setCount(count+1);
        setCount(count+3);
        //which value will be printed as a final state ?
        //it shows the async behaviour of useState
    } 
    return (
        <div className="example-1">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            </div>
    )
}
;
// in the above example we are updating the count value twice
// we should know that setCount is not synchronous it does update the value immedietly instead it enques all the 
//updated values  in the call back queue.After execution of the whole function the call stack will be emptied.
//then the react re renders and then usestate will have the last updated value from the queue.


export const Example2=()=>{

    console.log("re-rendered");
    const [user,setUser]=useState({name:"xyz"});
    const updateName=()=>{
        setUser({name:"xyz"});
    }
    return (
        <div className="example-2">
            <div>{user.name}</div>
            <button onClick={updateName}>click</button>
        </div>
    )
}
//here both the states are same but we still re render because  they are not refrencially equal .Both are stored 
//on the different memory locations so are treated as seperated updates.