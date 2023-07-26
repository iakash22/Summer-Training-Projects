import React,{useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid';
import EditFormTodo from './EditFormTodo';

const TodoWrapper = () => {
    const [tasks,setTask] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
        setTask(savedTodos);
    }, []);


    const addTodo = (todo) => {
        const newTask = [...tasks, {id : uuidv4(), task : todo, complete : false, isEditing : false}];
        setTask(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const toggle = (id) => {
        const newTask = tasks.map((task) => task.id === id ? {
            ...task, complete : !task.complete} : task
        )
        setTask(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const editTask = (id) => {
        const newTask = tasks.map((task) => task.id === id ? {
            ...task, isEditing : !task.isEditing} : task
        );
        setTask(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const deleteTask = (id) => {
        const newTask = tasks.filter((task) => task.id !== id);
        setTask(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const editTodo = (task,id) => {
        setTask(tasks.map((todo) => todo.id === id ? {
            ...todo, task, isEditing : !todo.isEditing
        } : todo))
    }


    return (
        <div className=' bg-[#1A1A40] mt-20 p-8 rounded-md'>
            <div className='flex items-center justify-evenly gap-x-2 '>
                <img src="https://img.icons8.com/arcade/64/overview-pages-3.png" className='max-sm:hidden' alt="" />
                <h1 className='text-[#fff] mb-2 text-[1.75rem] font-bold max-sm:text-[1.5rem]'>Lets Create Your Todo List</h1>
            </div>
            <TodoForm addTodo={addTodo}/>
            {
                tasks.map((task,index) => {
                    return(
                        task.isEditing ?  (<EditFormTodo editTodo={editTodo} task={task} />) :
                        (<Todo key={index} task={task} 
                            toggle={toggle}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />)
                    )
                })
            }
        </div>
    )
}

export default TodoWrapper
