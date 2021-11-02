import React from "react";
import { Heading } from "@chakra-ui/layout";
import MainButton from "../MainButton";


export default function CurrentApplication({currentApplication,setCurrentApplication}){
// function to update interview stage
// function to update final stage
// function to accept / reject
let s1 = currentApplication.stage_1 || {};
let questions = ["Accepted bootcamp requirements","First Name","Last Name","Email","Phone Number","Date of Birth","Gender","Background","Other Background","City and Country of Origin","Current Post Code","National Insurance Number","Disability/illness or infirmity","Which disability/illness or infirmity","Region of Application","Current situation status","Industry of employment","Personal annual income", "Current household income","Primary language","Highest education qualification","Other education qualification","University degree subject","Relationship status","Children","How many children","Religion","Other religion","Current housing status","Reason for joining School of Code","Found about School of Code via"];
return <section>
<MainButton onClick={()=>setCurrentApplication({empty:true})} buttonText="< Back"/>
<section className="stage1section">
<Heading>Stage 1 - Applicant information</Heading>
{ questions.map((value,index)=>  <h2>{value}: {s1[index]}</h2>)}
</section>
  
</section>
}