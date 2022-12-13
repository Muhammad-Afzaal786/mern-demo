import React, { useState} from 'react';
//import { ToastContainer, toast } from 'react-toastify';
import { TextField, Box, Button, styled } from '@mui/material';
//import { useNavigate } from 'react-router-dom';

import {  loadUser, editUserData } from '../service/api';
//import { DataContext } from '../context/DataProvider';
import {useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Component = styled(Box)`
    margin-top : 5rem;
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Heading = styled('h1')({
    justifyContent:"center",
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;


const UserButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


const UserInitialValues = {
    name: '',
    username: '',
    password: '',
};

const EditUser = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState(UserInitialValues);
   
   useEffect(()=>{
    loadUserDetails();
   },[])
  
    const loadUserDetails = async () =>{
        const response = await loadUser(id);
        console.log(response.data)
        setUser(response.data, "Response")
    }  
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
  const editUsersData = async () =>{
   await editUserData(user, id)
   navigate('/userdata')
    }
    return (
        <Component>
            
            <Box>
               <Heading>PURSUE <span style={{color:"#FB641B"}}>Today</span></Heading>                     
                        <Wrapper>
                            <TextField type='text' variant="standard" value={user.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField type='text' variant="standard" value={user.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />                           
                        <UserButton variant="standard"  onClick={editUsersData}>Save User</UserButton>                          
                        </Wrapper>               
            </Box>
        </Component>
    )
}

export default EditUser;