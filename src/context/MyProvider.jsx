import { useState, useEffect, useRef } from "react";
import MyContext from "./MyContext";


const MyProvider = (props) => {

    const inputRef = useRef();
    const [task, setTask] = useState({ id: 0, task: "", done: false });
    const [tasksArray, setTasksArray] = useState([]);
    const [taskDone, setTaskDone] = useState([])
  
  
    useEffect(() => {
      inputRef.current.focus();
  
    }, []);
  
    useEffect(()=>{
      let storage =localStorage.getItem("todoList")
      let getParsedItems = JSON.parse(storage)
      getParsedItems !== null && setTasksArray(getParsedItems)
  
      storage = null
      getParsedItems = null
    
      storage = localStorage.getItem("tasksDone")
      getParsedItems = JSON.parse(storage)
      getParsedItems !== null && setTaskDone(getParsedItems)
  
    },[])
  
  
    useEffect(()=>{
      localStorage.setItem('todoList', JSON.stringify(tasksArray))
    },[tasksArray])
  
  
    useEffect(() =>{
      localStorage.setItem('tasksDone', JSON.stringify(taskDone))
    }, [taskDone])
  
  
    const handleTick = (id, array) => {
      const tempTasks = array.map(task => {
        if(task.id === id){
          task.done = !task.done
          return task
        } else {
          return task
        }
      })

      const tasksArray2 = tempTasks.filter(task => task.done === false)
      const doneArray = tempTasks.filter(task => task.done === true)
    
      if(array === tasksArray){
        setTasksArray(tasksArray2)
        setTaskDone((previousDone) => [...previousDone, ...doneArray])
      } else {
        setTaskDone(doneArray)
        setTasksArray((previousTask)=>[...previousTask, ...tasksArray2])
      }
    
    }




      const handleSubmit = (e) => {
        e.preventDefault();
        //&& here acts like a ternary operator and acts as an IF ONLY
        task.task.length > 0 && setTasksArray([...tasksArray, task]); // this is the same as a push, it takes what was there already, spreads it and add the new task.
        setTask({ id: 0, task: "", done: false });
        storeTodo(task);
        inputRef.current.focus()
      };
    
      const handleDelete = (id, array) => {
        const tempArray = array.filter(item => item.id !== id)
        array === tasksArray ? setTasksArray(tempArray) : setTaskDone(tempArray)
        console.log(tasksArray);
      };
    
      const storeTodo = (input) => {
        localStorage.setItem("todoList", JSON.stringify([...tasksArray, input]));
      };


    return(
        <MyContext.Provider value={{handleSubmit, inputRef, task, setTask, handleDelete, handleTick, tasksArray, taskDone}}>

            {props.children}

        </MyContext.Provider>
    )





}


export default MyProvider