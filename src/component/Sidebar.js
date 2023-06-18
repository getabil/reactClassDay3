
import React from 'react'
import   "./style/sidebar.css";
import {FaHome,FaRProject} from 'react-icons/fa'
import { MdGroups2 } from "react-icons/md";
function Sidebar() {
  const hhh=[1,2,3,4]
  return (
   <>
   <div className='sidebar'>
    <ul>
      <li>
   <a href='/'> {<FaHome/>} Dashboard </a>

      </li>
      <li>
   <a href='/'>{<FaRProject/>} manage Project</a>

      </li>
      <li>   <a href='/'>{<MdGroups2/>}Contributer</a>

      </li>
      <li>
   

      </li>
      
      </ul>
    </div>
   
   </>
 
    
  )
}

export default Sidebar
