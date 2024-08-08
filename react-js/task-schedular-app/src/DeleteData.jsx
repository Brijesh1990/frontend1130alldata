import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function DeleteData() {
  // delete data api 
  const[data,setData]=useState([]);
  const Navigate=useNavigate();
  const {id}=useParams();
  // delete data call api using axios.delete()
  useEffect(()=>{

        axios.delete(`http://localhost:4000/add-task/${id}`).then(()=>{

          // pass deleted messages 
          Swal.fire({
            title: "Wow!",
            text: "Your data successfully deleted!",
            icon: "success"
          });

          Navigate('/');
        })

  },[]);
  return (
    <div>
      
    </div>
  )
}
