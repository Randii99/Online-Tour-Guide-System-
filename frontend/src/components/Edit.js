import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function EditHotel(){

  const [name,setNamee] = useState("");
  const [email,setMail] = useState("");
  const [phone_number,setNum] = useState("");
  const [district,setDist] = useState("");
  const [price,setPri] = useState("");
  const [no_of_rooms,setRoom] = useState("");


  const { id } = useParams();

  useEffect(() => {
      getHotels();
    }, []);
  
    //let navigate= useNavigate();
  
    function getHotels() {
      let hotel = true;
  
      fetch(`http://localhost:8070/hotel/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (hotel) {
            setNamee(result.name);
            setMail(result.email);
            setNum(result.phone_number);
            setDist(result.district);
            setPri(result.price);
            setRoom(result.no_of_rooms);
           
          }
          console.log(result);
        });
  
      return () => (hotel = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateHotel ={
        name,
        email,
        phone_number,
        district,
        price,
        no_of_rooms
      }

      axios
    .patch(`http://localhost:8070/hotel/update/${id}`, updateHotel)
    .then((_res) => {
      alert("Hotel Updated Successfully!");
     // navigate("/front");
      console.log(updateHotel);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
  <div className="container">
  <div class="text-center">
   <h2 style={{color :' #002b80'}}><strong>Update Hotel Details</strong></h2>
   </div>
   <hr/>
   <form className =  "hotel">
   <div class="row">
  

  <div class="form-group col-md-6">
  <label for="fullName"  class="form-label text-dark"><b>Hotel Name</b></label>
  <input type="text" class="form-control"  required id="name" placeholder="Enter Tourguide Name" value={ name} onChange={(e)=>{
 
 setNamee(e.target.value);
 
  }} /> <br/>
 </div>
 
 <div class="form-group col-md-6">
  <label for="tourGuideId" class="form-label text-dark"><b>Official Email</b></label>
  <input type="email" class="form-control" required id="email" placeholder="Tourguide Id" value={email} onChange={(e)=>{
 
 setMail(e.target.value);
 
 }}/> <br/>
 </div> 
 
 
 
 <div class="form-group col-md-6">
  <label for="age" class="form-label text-dark"><b>Telephone Number</b></label>
  <input type="number" class="form-control" required id="phone_number" placeholder="Enter Tourguide Age" value={phone_number}  onChange={(e)=>{
 
 setNum(e.target.value);
 
 }}/> <br/>
 </div>
 
 <div class="form-group col-md-6">
  <label for="address" class="form-label text-dark"><b>District</b></label>
  <input type="text" class="form-control" required id=" district" placeholder="Enter Tourguide Address" value={district} onChange={(e)=>{
 
 setDist(e.target.value);
 
 }}/> <br/>
 </div>
 
 <div class="form-group col-md-6">
  <label for="dateOfBirth" class="form-label text-dark"><b>Price</b></label>
  <input type="text" class="form-control" required id="price" placeholder="Enter Tourguide Birthday" value={price} onChange={(e)=>{
 
 setPri(e.target.value);
 
 }}/> <br/>
 </div>
 
 <div class="form-group col-md-6">
  <label for="contactNumber" class="form-label text-dark"><b>No Of Rooms</b></label>
  <input type="number" class="form-control"  required id="no_of_rooms" placeholder="Enter Tourguide Contact Number" value={no_of_rooms}  onChange={(e)=>{
 
 setRoom(e.target.value);
 
 }}/> <br/>
 </div>

 
 </div>
 
       
   </form><br></br><div>
       
          
       
       
       </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button  type="button" class="btn btn-dark"   onClick={updateData}> <i className="fa-solid fa-wrench "></i>&nbsp;&nbsp; UPDATE HOTEL DETAILS&nbsp;&nbsp;&nbsp;</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/all" class="btn btn-danger" style={{marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}}><strong><i className="fa-solid fa-pen"></i>&nbsp;&nbsp;GET All HOTELS</strong></a>
            </div>
            

 )

}