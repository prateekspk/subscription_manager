import React from 'react';
import Button from "@mui/material/Button";

import { useState,useEffect } from 'react';


export default function DisplayTotalHeader({SubList,selectedFrequency, setSelectedFrequency}) {

const frequencyList = ["Day","Week","Month","Year"]
const [index,setIndex]=useState(2)

const totalMonthly =SubList.length?(SubList.reduce((currentTotal,sub)=>{
   return sub.monthlyFees + currentTotal
},0)):0
const totalYearly =SubList.length?(SubList.reduce((currentTotal,sub)=>{
    return sub.yearlyFees + currentTotal
 },0)):0
 const totalWeekly =SubList.length?(SubList.reduce((currentTotal,sub)=>{
    return sub.weeklyFees + currentTotal
 },0)):0
 const totalDaily =SubList.length?(SubList.reduce((currentTotal,sub)=>{
    return sub.dailyFees + currentTotal
 },0)):0


 let total=0
 switch(selectedFrequency){
    case "Day":
      total= totalDaily
        break
        case "Week":
            total= totalWeekly
break
case "Month":
   total=totalMonthly
        break
        case "Year":
           total=totalYearly
break

 }
 useEffect(() => {
    setSelectedFrequency(frequencyList[index]) 
 }, [index]);


  return <div>
      <h3>Total </h3>
     {total} 
     <span> per  </span><Button onClick={()=>{ setIndex( index==frequencyList.length-1?0:index+1)}}>{selectedFrequency}</Button>
  </div>;
}
