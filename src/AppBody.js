import React from 'react';
import { useState } from 'react';
import "./AppBody.css"
import Modal from './Modal';
import AddSubForm from './AddSubForm';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DisplaySubList from './DisplaySubList';
import DisplayTotalHeader from './DisplayTotalHeader';
import {useSelector, useDispatch} from 'react-redux'
import { addSub } from './Redux/SubSlice'

import Header from './Header';

export default function AppBody() {

    // const [SubList,setSubList]=useState([])

    const {SubList} = useSelector((state)=>state.SubList)
  const dispatch = useDispatch()
  const [showModal,setShowModal] = useState(false)
  const [selectedFrequency,setSelectedFrequency] = useState('')
   

  const handleSubListChange =(sub)=>{
    dispatch(addSub(sub))
    
    // setSubList([...SubList,sub])
    setShowModal(false)
  }

  const handleSubDelete = (id) =>{
    // setSubList(SubList.filter(sub=>{
    //     return sub.id !==id
    // }))
    console.log("De;eted")
  }
  const handleSubEdit = (id)=>{
console.log("Delete the ID : "+ id)
  }
  return <div className='AppBody'>
           <button  onClick={()=>{console.log(SubList)}}>Console</button>
    <DisplayTotalHeader selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency} SubList={SubList}/>
     <DisplaySubList selectedFrequency={selectedFrequency} SubList={SubList} handleSubDelete={handleSubDelete} handleSubEdit={handleSubEdit}/>
     <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setShowModal(true)}>
        <AddIcon sx={{ mr: 1 }} />
        Add
      </Fab>
      <Modal className="modal" show={showModal} setShow={setShowModal}> <AddSubForm handleSubListChange={handleSubListChange}/></Modal>

  </div>;
}
