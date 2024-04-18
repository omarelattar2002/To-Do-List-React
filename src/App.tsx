import React,{useState} from 'react';


type Task = {
    id:number,
    title:string,
    completed:boolean,
}


export default function App(){
    const [tasks,seTasks] = useState<Task[]>([])
    const [input,setInput] = useState('')
    const handleSubmit = (e:any) => {
        e.preventDefault()
        const addTask:Task = {
            id: tasks.length+1,
            title: input,
            completed: false,
        }
        seTasks([...tasks,addTask])
        setInput('')
    }

    const deleteTaks = (taskId: number) => {
        let filteredTasks = [...tasks].filter(t => t.id !== taskId)
        seTasks(filteredTasks)
        console.log(taskId)
    }


    const toggleCompletedTasks = (id:number) => {
        seTasks(
            tasks.map(task =>
                task.id === id? {...task,completed:!task.completed}:task
            )
        )
    }




    return(
        <div className='app'>
            <div className='container'>
                <h1>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Enter task' type='text'/>
                </form>

                <div>
                    {tasks.map((task)=>(
                        <div key={task.id} onDoubleClick={()=> toggleCompletedTasks(task.id)}>
                            <p className='task-box'>{task.title}<button onClick={()=>deleteTaks(task.id)}>remove</button>
                            <button>complete</button></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


