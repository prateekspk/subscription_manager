import React from 'react';

import Typography from '@mui/material/Typography';
import SubDisplayCard from './SubDisplayCard';


export default function DisplaySubList({SubList,selectedFrequency}) {



    if(SubList.length===0){
       
    return <div>No active subscriptions</div>

    }
  return <div>
      <Typography>All Subscriptions</Typography>
      { 
       SubList.map(sub=>{
           return <SubDisplayCard key={sub.id} selectedFrequency={selectedFrequency} sub={sub}/>       
       })   
      }
  </div>;
}
