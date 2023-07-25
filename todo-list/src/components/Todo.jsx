import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {toast} from "react-toastify"

const Todo = ({task,toggle,deleteTask,editTask}) => {
    const clickHandler = () => {
        toggle(task.id);
        toast.dark("Task Completed")
    }
    const deleteHandler = () => {
        deleteTask(task.id);
        toast.error("Delete Task");
    }
    const editHandler = () => editTask(task.id);
        
    return (
        <div className='flex justify-between items-center bg-[#8758ff] py-3 px-4 text-[#fff]
        rounded-md mb-4 cursor-pointer'>
            <div>
                <p onClick={clickHandler}
                    className={`${task.complete ? 'line-through text-[#c5aeff]' : "no-underline"} font-semibold`}
                    >{task.task}</p>
            </div>
            <div>
                <EditNoteIcon onClick={editHandler} />
                <DeleteSweepIcon onClick={deleteHandler} className='ml-3' />
            </div>
        </div>
    )
}

export default Todo
