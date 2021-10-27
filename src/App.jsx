import React from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
 
  


  const [task, setTask] = useState({ id: 0, task: "", done: false });
  const [tasksArray, setTasksArray] = useState([]);
  const [taskDone, setTaskDone] = useState([])

  const inputRef = useRef();


 

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

 

/*  //THIS LINE IS THE SAME 
const [tasksArray, setTasksArray] = useState(localStorage.getItem("todoList") === null ? [] : JSON.parse(localStorage.getItem("todoList")));

    //AS THIS LINE

    useEffect(()=>{
    let storage = localstorage.getItem("todoList") 
    let storageItem = JSON.parse(storage)
    storageItem !== null && setTasksArray(storage)
  },[]) */


/*   //THIS LINE IS THE SAME 

    const updateLocalStorage = () =>
    localStorage.setItem("todoList", JSON.stringify(tasksArray));
    updateLocalStorage();

    //AS THIS LINE
    
    useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasksArray))
  },[tasksArray]) */
  







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

  

/* 
  const markedTask = () =>{

    tasksArray.filter((itemDone) => )

  } */

  return (
    <main className="body">
      <Header
        handleSubmit={handleSubmit}
        task={task}
        setTask={setTask}
        inputRef={inputRef}
      />
      <Section
        task={task}
        tasksArray={tasksArray}
        handleDelete={handleDelete}
        handleTick={handleTick}
        taskDone={taskDone}
        
      />
      <Footer />
    </main>
  );
};

export default App;
