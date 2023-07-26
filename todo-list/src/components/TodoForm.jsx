import React, { useState } from 'react'
import {toast } from 'react-toastify';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if(value === "" || value === " "){
            toast.info('Please fill your task',
            {position : toast.POSITION.TOP_CENTER});
            return;
        }
        else{
            addTodo(value);
            toast.success("Your task successfully added")
        }
        setValue("");
        console.log(value);
    }
    return (
        <div className='w-full'>
            <form onSubmit={submitHandler} className='w-full'>
                    <input type="text" placeholder='What is a task today?' value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className=' outline-none bg-transparent border-[1px] border-solid border-[#8758ff]
                    py-2 px-4 mt-4 mb-8 w-[300px] placeholder:text-[#ffffff4d] text-[#fff]
                    font-medium'
                    />
                    <button type='submit'
                    className='bg-[#8758ff] text-[#fff] border-none p-[0.55rem] cursor-pointer 
                    font-medium max-sm:mb-4'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
