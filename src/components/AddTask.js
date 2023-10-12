export const AddTask = ({ tasklist, setTasklist,task,setTask }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id) //this is edit state
    {
      const date = new Date();
      const updatedTasklist=tasklist.map((todo)=>(
        todo.id === task.id ? {id:task.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:{id:todo.id,name:todo.name,time:todo.time}));
      setTasklist(updatedTasklist);
      setTask({});
    }
    else //this is add state
    {
      const date = new Date();
      const newTask = {
        id :date.getTime(),
        name: e.target.task.value,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist,newTask])
      setTask({});
  
    }

    
  }


  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task,name: e.target.value})} />
        <button type="submit">{task.id? "Update":"Add"}</button>
      </form>
    </section>
  )
}