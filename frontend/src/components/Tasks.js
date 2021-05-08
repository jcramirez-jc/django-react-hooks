import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Tasks = ({tasks, onDelete, setTasks}) => {

      const setClear = onDelete
      const setToggle = setTasks
      const [todo, setTodo] = useState([])



      const fetchTask = async (id) => {

        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
      }



      const deleteTask = async (id) => {
            const res = await fetch(`api/tasks/${id}`, {
              method: 'DELETE',
            })
              setClear()

            }

      const toggleReminder = async (id) => {
             const taskToToggle = await fetchTask(id)
                const updTask = { ...taskToToggle, completed: !taskToToggle.completed }

                const res = await fetch(`api/tasks/${id}/`, {
                  method: 'PUT',
                  headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify(updTask),
                })

                const data = await res.json()
                setClear()

  }




    return(
        <>
              {tasks.map(function(task, index){
                return(
                    <div key={index} className={`task ${task.completed ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>

                        <h3>{task.title}<FaTimes style={{color:"red", cursor:"pointer"}} onClick={() => deleteTask(task.id)}/></h3>
                        <p>{task.day}</p>
                    </div>
                    )
              })}
          </>
    )
}

export default Tasks;