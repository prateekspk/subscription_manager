import React from 'react';

import styled from 'styled-components'


const ModalBackground = styled.div`
width:100vw;
height:100vh;
position:fixed;

background-color:rgba(0,0,0,0.5);`

const ModalBody = styled.div`
background-color:white;
margin:auto;
border-radius: 20px;
/* padding:20px; */
z-index: 1000;
/* transform: translate(-50%,-50%); */
width:50%
`

export default function Modal({show,setShow,children}) {

   

 


  return <>
  {show && (<ModalBackground onClick={()=>setShow(false)}>
      <ModalBody onClick={(e)=>e.stopPropagation()}>
{children}
<button onClick={()=>setShow(false)} >Close</button>
      </ModalBody>
  </ModalBackground>)}
  </>;
}
