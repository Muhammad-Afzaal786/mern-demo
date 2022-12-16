import React from 'react'
import {Button,Stack} from "@mui/material"
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {API, deleteUser} from "../service/api"
import { ToastContainer, toast } from 'react-toastify';

function EditUser() {
    const [getData, setData] = useState([]);
   
    useEffect(()=>{
        getUsers();
      },[])
      const getUsers = async () => {
        let response = await API.showUser();
        if (response.isSuccess) {
          setData(response.data)
        } else {
             console.log('Something went wrong! please try again later');
        }
      }
      const deleteUserDetails = async (id) =>{
        let res = await deleteUser(id);
        try{        
          toast.success(res.data.message)
          let response = await API.showUser();
          if (response.isSuccess) {
            setData(response.data)           
          } else {
               console.log('Something went wrong! please try again later');            
          }
        }catch(error){
           toast.error(res.data.message)
        }      
    }  
  return (
    <>
    <ToastContainer/>
   <div className='tab_div'>
   <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PHONE</th>
      <th scope="col">EMPLOYEE</th>
      <th scope="col">UPDATE/DELETE</th>

    </tr>
  </thead>
  <tbody>
  { getData.map((val)=>{
    return(
  
    <tr key={val._id}>
      <th scope="row">{val._id}</th>
      <td>{val.name}</td>
      <td>{val.email}</td>
      <td>{val.phone}</td>
      <td>{val.employee}</td>
      <td> <Stack direction="row" spacing={2}>
                 <Button variant="contained" color="secondary"  size="small" component={Link} to={`/edituser/${val._id}`} >Edit</Button>
                <Button variant="contained" color="error" size="small" onClick={()=>deleteUserDetails(val._id)}>Delete</Button>
                </Stack></td>
    </tr>
    )
   })} 
  </tbody>
</table>
   </div>
    </>


  )
}

export default EditUser;
