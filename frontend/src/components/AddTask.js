import {useState} from 'react'
import React from "react";

const AddTask = ({  onAdd }) => {


    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')

    const [completed, setCompleted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Please add task')
            return
        }

        onAdd({title, day, completed})

        setTitle("")
        setDay("")
        setCompleted(false)

    }


    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add task' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input type="text" placeholder='Add day and time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set completed</label>
                <input type="checkbox" value={completed} onChange={(e) => setCompleted(e.currentTarget.checked)} checked={completed}/>
            </div>

            <input type="submit" value="save task" className="btn btn-block" />
        </form>
    )

}

export default AddTask