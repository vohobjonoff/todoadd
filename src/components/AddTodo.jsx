/* eslint-disable react/prop-types */
import { useState } from "react"
import { uid } from 'uid';


export default function AddTodo({todo,setTodo}) {

    const id = uid();
    const [task, settask] = useState('');
    const [editId, setEditId] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) {
            alert('bosh')
        } else if (task && editId) {
            
        } else{
            const newItem = { id: id, title: task, img: '' }
            setTodo([...todo, newItem])
            settask('')
        }
       
    }


  return (
      <div>
          <form action="" onSubmit={handleSubmit} >
              <input type="text"
                  name=""
                  id=""
                  value={task}
                  onChange={(e) => settask(e.target.value)}
              />
               <button>submit</button>
          </form>
    </div>
  )
}
