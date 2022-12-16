import React from 'react'
import {Box} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, blue, green } from '@mui/material/colors';
import { BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail ,MdLocationOn} from "react-icons/md";
import { useContext } from 'react';
import { DataContext} from "./context/DataProvider"


function Contact() {
    const {account} = useContext(DataContext);
  return (
    <>
       <div className='main_contact'>
        <div className="container">   
           <h2 className='my-4 text-white'>Contact Me!</h2>
           <div className='d-flex justify-content-between flex-wrap'>
          <Box className='d-flex flex-column align-items-center'> <Avatar sx={{color:blue[800]}}><BsLinkedin/></Avatar>
                    <p style={{fontWeight:"700", marginBottom:"0px", color:"white"}}>LinkedIn:</p>
                    <p className='text-white'>@LinkedIn</p>
                    </Box>
                     <Box className='d-flex flex-column align-items-center'> <Avatar  sx={{ bgcolor: deepOrange[500] }}><MdLocationOn/></Avatar>
                      <p style={{fontWeight:"700", marginBottom:"0px", color:"white"}}>Location:</p>
                      <p className='text-white'>@Lahore</p>
                     </Box>
                    <Box className='d-flex flex-column align-items-center'> <Avatar sx={{ bgcolor: deepPurple[500] }}><MdEmail/></Avatar>
                    <p style={{fontWeight:"700", marginBottom:"0px", color:"white"}}>Email:</p>
                    <p className='text-white'>{account.email}</p>
                    </Box>
           <Box className='d-flex flex-column align-items-center'> <Avatar  sx={{ bgcolor: green[500] }}><BsFillTelephoneFill/></Avatar>
       <p style={{fontWeight:"700", marginBottom:"0px", color:"white"}}>Phone:</p>
     <p className='text-white'>{account.phone}</p>
     </Box>
    </div>
    </div>     
    </div>
    </>
  )
}

export default Contact
