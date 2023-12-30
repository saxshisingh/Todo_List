import { useState } from "react"
import axios from 'axios'
function Create() {
  const [isCompleteScreen, setIsCompleteScreen]= useState(false);
  const[task, setTask] = useState()
  const[desc, setDesc] = useState()
  const handleAdd=()=>{
      axios.post('http://localhost:3001/add', {task: task})
      axios.post('http://localhost:3001/add', {desc: desc})
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="create_form">
      <input type='text' placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
      <input type="text" placeholder="Please write the description" onChange={(e)=>setDesc(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
      <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
      </div>
    </div>
  )
}

export default Create
