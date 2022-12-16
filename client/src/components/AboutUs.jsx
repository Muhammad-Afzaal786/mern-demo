import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple, blue, green,grey,yellow } from '@mui/material/colors';
import Img from './assets/images/about.png'
import { ImHtmlFive } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import { SiJavascript,SiSemanticuireact,SiMongodb,SiCss3 } from "react-icons/si";

function AboutUs() {
  return (
    <>
     
      <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={Img} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                   <p className='abt'>ABOUT ME</p>
                   <h2>WHY HIRE FORE ME FOR YOUR NEXT PROJECT?</h2>
                   <p>Hi, I have been working as a MERN Developer developer, having a strong command of MERN(Beginner). I do clean and error-free code with a proper commendation for each step's clarification Feel free to share your projects it will be an honor to work with you.</p>
                   <div className='d-flex gap-1 flex-wrap'>
      <Avatar sx={{ color: blue[900] }}><SiSemanticuireact/></Avatar>
      <Avatar sx={{ color: green[500] }}><SiMongodb/></Avatar>
      <Avatar sx={{ color: deepOrange[500] }}><ImHtmlFive/></Avatar>
      <Avatar sx={{ color: blue[900] }}><SiCss3/></Avatar>
      <Avatar sx={{ color: yellow[900] }}><SiJavascript/></Avatar>
      <Avatar sx={{ color: green[500]  }}><FaNodeJs/></Avatar>

      <Avatar sx={{ color: grey[900] }}><AiFillGithub/></Avatar>

    </div>
    <div className='mt-4'>
    <button class="custom-btn btn-6"><span>Download CV</span></button>
    </div>
            </div>
        </div>
       </div>
     
    </>
  )
}

export default AboutUs
