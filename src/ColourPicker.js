import React from 'react';

export default function ColourPicker({setSubColour}) {

const colourList = ["#f44336","#00bcd4","#03a9f4","#2196f3","#3f51b5","#673ab7","#9c27b0","#e91e63","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"]

  return <div>

      {colourList.map((colour)=>{
          return <button onClick={()=>setSubColour(colour)} style={{backgroundColor:colour, width:"50px",height: "50px",borderRadius:"25px"}}> </button>
      })}
  </div>;
}
