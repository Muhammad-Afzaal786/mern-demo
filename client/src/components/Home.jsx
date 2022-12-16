import React, { useContext } from "react";
import Img from "../components/assets/images/hack.jpg";
import { DataContext } from "./context/DataProvider";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from './Contact'
//import Scroll from "./Scroll";
function Home() {
  const { account } = useContext(DataContext);
  return (
    < >
   
     <div className="about_img">
     {/* <Scroll showBelow={250} /> */}
        <img src={Img} alt="" className="img-fluid" />
        <div className="about_content">
          <h1>Hey! I Am</h1>
          <h2>
            <span>{account.name}</span> 
          </h2>
          <p>I'M <span>{account.employee}</span> Software Developer Passionate and experienced in building web Applications</p>
          <div>
          <button class="button button1 btn_div">Project</button>
<button class="button button2 btn_div">Contact</button>
          </div>
        </div>
      </div>
<AboutUs/>
<Service/>
<Skills/>
<Projects/>
<Contact/>
   
    </>
  )
}

export default Home
