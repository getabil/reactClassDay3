import React from 'react'
import   "./style/footer.css";
import {FaFacebook,FaTwitter,FaTelegram} from 'react-icons/fa'
 import {GrLinkedinOption} from 'react-icons/gr';

export default function Footer() {

  // let currentDate= new Date()
  let newDate=  new Date().getFullYear()
  // const yyyy = newDate.getFullYear();
// let mm = newDate.getMonth() + 1; // Months start at 0!
// let dd = newDate.getDate();
// const formattedToday = dd + '/' + m5m + '/' + yyyy;

  return (

    <div className='footer'>
      
   <div className="icon">
    <div className="facebook icons">
      <FaFacebook/>
    </div>
    <div className="twiter icons">
      <FaTwitter/>
    </div>
   
    <div className="linkdin icons">
      <GrLinkedinOption/>
    </div>
    
    <div className="telegram icons">
      <FaTelegram/>
    </div>
    
   </div>
   <p> &copy; {newDate} |  
                         KIOT AppFactory Web Development Group</p>

    </div>
  )
  }

  