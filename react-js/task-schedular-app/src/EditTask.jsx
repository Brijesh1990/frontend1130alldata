import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function EditTask() {
    // edit data using api
    const[data,setData]=useState([]);
    const taskname=useRef("");
    const priority=useRef("");
    const adddate=useRef("");
    const Navigate=useNavigate();
    const{id}=useParams();

    //edit data using api 
    useEffect(()=>{
     axios.get(`http://localhost:4000/add-task/${id}`).then((response)=>{
        setData(response.data);
        taskname.current.value=response.data.taskname;
        priority.current.value=response.data.priority;
        adddate.current.value=response.data.adddate;
     })

    },[])


    // update data using api 
    const updFormData=(e)=>{
        e.preventDefault();
        var upd={
            taskname:taskname.current.value,
            priority:priority.current.value,
            adddate:adddate.current.value
        }

        // create api for update adata using axios.put()
        axios.put(`http://localhost:4000/add-task/${id}`,upd).then(()=>{
        // pass update messages 
          Swal.fire({
            title: "Wow!",
            text: "Your data successfully Updated!",
            icon: "success"
          });

          Navigate('/');
          
        })

    }




  return (
    <div>
        <div className='container w-50 mt-5 mx-auto p-5 bg-white'>
              <h2>Edit task here *</h2>
              <hr />
                <form>
                    <div className='form-group mt-4'>
                        <label className='text-success'>Edit taskName *</label>
                        <input type='text' ref={taskname} placeholder='Enter Task Name *' className='form-control' />
                    </div>

                    
                    <div className='form-group mt-4'>
                    <label className='text-success'>Edit Priority *</label>
                        <select ref={priority}  placeholder='Enter Task Priority *' className='form-control'>
                            <option value="">-select priority-</option>
                            <option value="Top priority">Top priority</option>
                            <option value="Low priority">Low priority</option>
                        </select>
                    </div>

                    <div className='form-group mt-4'>
                    <label className='text-success'>Edit addedDate *</label>
                        <input type='date' ref={adddate} placeholder='Enter Date *' className='form-control' />
                    </div>

                    <div className='form-group mt-4'>
                        <button type='button' onClick={updFormData} className='btn btn-danger bg-danger text-white' >Update your Task</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

