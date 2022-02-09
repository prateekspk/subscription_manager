import React from 'react';
import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import AddSubForm from './AddSubForm';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DisplaySubList from './DisplaySubList';
import DisplayTotalHeader from './DisplayTotalHeader';

function App() {
  const [SubList,setSubList]=useState([])
  const [showModal,setShowModal] = useState(false)
  const [selectedFrequency,setSelectedFrequency] = useState('')

  const handleSubListChange =(sub)=>{
    setSubList([...SubList,sub])
    setShowModal(false)
  }
  return (
    <div className="App">
     <button  onClick={()=>{console.log(SubList)}}>Console</button>
    <DisplayTotalHeader selectedFrequency={selectedFrequency} setSelectedFrequency={setSelectedFrequency} SubList={SubList}/>
     <DisplaySubList selectedFrequency={selectedFrequency} SubList={SubList}/>
     <Fab variant="extended" color="primary" aria-label="add" onClick={()=>setShowModal(true)}>
        <AddIcon sx={{ mr: 1 }} />
        Add
      </Fab>
      <Modal show={showModal} setShow={setShowModal}> <AddSubForm handleSubListChange={handleSubListChange}/></Modal>
     
      <header className="App-header">
     
      
      </header>
    </div>
  );
}

export default App;
