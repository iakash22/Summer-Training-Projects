import React,{useState} from 'react'
import {toast} from 'react-toastify';

const EditFormTodo = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task);
    const submitHandler = (e) => {
        e.preventDefault();
        if(value === task.task){
            toast("No changes",
            {theme : "colored"});
        }
        else{
            toast("Updated")
        }
        editTodo(value,task.id);

        setValue("");
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Update your task..' value={value}
                onChange={(e) => setValue(e.target.value)}
                className=' outline-none bg-transparent border-[1px] border-solid border-[#8758ff]
                    py-2 px-4 mt-4 mb-8 w-[300px] placeholder:text-[#ffffff4d] text-[#fff]
                    font-medium'/>
                <button type='submit' className='bg-[#8758ff] text-[#fff] border-none p-[0.55rem]
                cursor-pointer font-medium'>UPDATE</button>
            </form>
        </div>
    )
}

export default EditFormTodo
