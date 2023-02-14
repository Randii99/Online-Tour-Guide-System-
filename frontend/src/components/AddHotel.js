import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";

function AddHotel(){

  const [name,setNamee] = useState("");
  const [email,setMail] = useState("");
  const [phone_number,setNum] = useState("");
  const [district,setDist] = useState("");
  const [price,setPri] = useState("");
  const [no_of_rooms,setRoom] = useState("");



  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   const newHotel={

     name,
     email,
     phone_number,
     district,
     price,
     no_of_rooms
    


   }
   //add data
   axios.post("http://localhost:8070/hotel/add",newHotel).then(()=>{

     alert("Hotel Added Succsessfully")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(

   <div className="container" >
      <form  onSubmit={sendData}>
           <div class="text-center">
           <h2 style={{color :' #002b80'}}><b>ADD HOTEL DETAILS</b></h2>
           </div>
           
           <hr/>
           <br/>
           <br/>

   <div className="formcontainer" >  
   <div class ="container"> 
     
  
  <div class="row">
    <div class="form-group col-md-6 ">
      
      <label for="Name"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hotel Name </b></label>
      
      
      <input type="text" class="form-control"  required id="HotName" 
      onChange={(e)=> {

        setNamee(e.target.value);

       } }/>
    </div>
   
    
    <div class="form-group col-md-6">
      <label for="id"> <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Official Email </b></label>
      <input type="email"  required class="form-control" id="packId" 
       onChange={(e)=> {

        setMail(e.target.value);

       } }/>  <br/>
      
    </div>
  


    <div class="form-group col-md-6">
      <label for="desti"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telephone Number </b></label>
      <input type="number"  required class="form-control" id="desti" 
      onChange={(e)=> {

        setNum(e.target.value);

       } }/>
      
    </div>

    <div class="form-group col-md-6">
      <label for="numDays"> <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;District </b></label>
      <input type="text"  required class="form-control" id="numDays" 
      onChange={(e)=> {

        setDist(e.target.value);

       } }/>  <br/>
      
    </div>

    <div class="form-group col-md-6">
      <label for="numPass"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price </b></label>
      <input type="text" required class="form-control" id="numPass" 
      onChange={(e)=> {

        setPri(e.target.value);

       } }/>

    </div>

    <div class="form-group col-md-6">
      <label for="hotel"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Of Rooms </b></label>
      <input type="text" required class="form-control" id="hotel" 
      onChange={(e)=> {

        setRoom(e.target.value);

       } }/><br/>
       <br/>

    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <button type="submit" class="btn btn-primary" style={{ marginTop: '20px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>ADD HOTEL </b></button>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

    
    <a href ="all" type="submit" class="btn btn-danger" style={{ marginTop: '20px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>GET All HOTELS </b></a>
  
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </div>
    </div>
   </form>
   </div>
   )
} 

export default AddHotel; 