import "./style.css";
import {useState} from "react";
const TODO =()=>{
    const[inputValue,setInputValue]=useState(null);
    const [tasks, setTasks]=useState([]);

    const AddTask=()=>{
//collecting data from the input
setTasks([...tasks, inputValue]);
}
    const onChangeInput=(event)=>{
     let newValue = event.target.value;
     setInputValue(newValue); 
    }

    return (<div className="container">
         <h1>TO-DO List</h1>
    <div className="header">
       
    <input type="text" placeholder="task" onChange={onChangeInput} value={inputValue}/>
    <button id="add-task" onClick={AddTask}>Add Task</button>
    </div>
    <div className="tasks"> 
        {
            tasks.map((task,index)=><p key={index}>{task}</p>)
        }
    </div>
    </div>    )
}
export default TODO;