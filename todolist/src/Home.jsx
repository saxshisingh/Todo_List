import { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCCircleFill, BsFillTrashFill} from "react-icons/bs";

function Home() {
    const [todos, setTodos]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
      axios.put('http://localhost:3001/update/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
    }

    const handleDelete = (id) =>{
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
    }

  return (
    <div className='home'>
      <h2>ToDo List</h2>
      <Create/>
      {
        todos.length === 0
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map((todo) => (
          <div className='task'>
            <div key={todo._id} className='checkbox' onClick={()=>handleEdit(todo._id)}>
              {todo.done ? 
              <BsFillCCircleFill className='icon'></BsFillCCircleFill>
            : <BsCircleFill className='icon'/>
            }
            <div className={todo.done ? "line_through":""}>
              <h3>{todo.task} - {todo.desc}</h3>
              </div>
            </div>
            <div>
              <span><BsFillTrashFill className='icon' onClick={()=>handleDelete(todo._id)}/></span>
            </div>
            </div>
          
            
        ))
      }
    </div>
  )
}

export default Home
