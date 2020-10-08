
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './terms.css'
export function TermModel(props) {
   
    return (
  
       < div
        className='modal'
          
        >
       
          <div className='header'>
             <button type='button' onClick={()=>{props.onNoClick()}} className='headerButton' >X</button>
               </div>

               <embed src="https://cc8060f3-e265-447e-a403-e749c85bff4b.filesusr.com/ugd/34aceb_e25880bde7f34cb39e1fb60c3f635b26.pdf" frameborder="0" width="100%" height="500px"></embed>

       
        
        </div>
   
    );
  }

export default TermModel;