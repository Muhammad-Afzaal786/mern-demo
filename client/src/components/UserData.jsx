import React from 'react'
import {Table,TableCell, TableBody, TableHead , TableRow, Button,Stack,styled} from "@mui/material"
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {API, deleteUser} from "../service/api"
import { ToastContainer, toast } from 'react-toastify';

const TABLE = styled(Table)`
    width : 60%;
`;
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

    <div className='main_users'>
      
     <ToastContainer/>
      <TABLE >
        
        <TableHead>
          <TableCell> ID</TableCell>
          <TableCell> NAME</TableCell>

          <TableCell>USERNAME</TableCell>
        
          <TableCell>Delete/Update</TableCell>


        </TableHead>
        <TableBody>
           {getData.map((val, idx)=>{
            
            return(
                <TableRow key={val._id}>
                <TableCell>{val._id}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                
                <TableCell >
                <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary"  size="small" component={Link} to={`/edituser/${val._id}`} >Edit</Button>
                <Button variant="contained" color="error" size="small" onClick={()=>deleteUserDetails(val._id)}>Delete</Button>
                </Stack>
               

                </TableCell>



            </TableRow>
            )
           
           })}
        </TableBody>
      </TABLE>
    </div>
  )
}

export default EditUser;
