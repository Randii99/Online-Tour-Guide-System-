import React, {useState} from "react"
import axios from "axios";
import '../App.css';
// import MainScreen from './MainScreen'
// import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// import slider1 from "../images/Slider1.jpg"

function SearchHotel(){

  const [checkIn,setCheckin] = useState("");
  const [checkOut,setCheckout] = useState("");
  const [location ,setlocation ] = useState("");
  const [no_of_guests,setNum] = useState("");
  const [no_of_rooms,setRoom] = useState("");
  const [roomType,settype] = useState("");

  function sendData(e){
    e.preventDefault();
    const newRoom={
      checkIn,
      checkOut,
      location ,
      no_of_guests,
      no_of_rooms,
      roomType
     
     }
  
     axios.post("http://localhost:8070/room/insert",newRoom).then(()=>{

      alert("Hotel Added Succsessfully")
    }).catch((err)=>{
 
      alert(err)
 
    })
 
   }
    
return (

  <div title="">
      <div></div>
      <div class="bg-img">
     
        <center>
        <h1 style={{color:'white',alignContent:'center'}}> <i>Find Your Next Way</i></h1>
        </center>
      <div class="card-hotel">

        <form onSubmit={sendData}>
          

          <div class="form-group">
            <span class="fa fa-user"></span>
            <label htmlFor="checkin">Check In</label>
            <input type="date" class="form-control" required placeholder="Check In"
            onChange={(e) => {
              setCheckin(e.target.value)
            }} />
          </div>

          <div class="form-group">
            <span class="fas fa-user"></span>
            <label htmlFor="checkin">Check Out</label>
            <input type="date" class="form-control" required placeholder="Check Out"
            onChange={(e) => {
              setCheckout(e.target.value)
            }} />
          </div>

          <div class="form-group">
            <span class="fas fa-envelope"></span>
            <label htmlFor="checkin">Location</label>
            <input type="text" class="form-control" required placeholder="Location"
            onChange={(e) => {
              setlocation(e.target.value)
            }} />
          </div>

          <div class="form-group">
            <span class="fa fa-lock"></span>
            <label htmlFor="checkin">No Of Guests</label>
            <input type="number" class="form-control" required placeholder="No Of Guests"
            onChange={(e) => {
              setNum(e.target.value)
            }} />
          </div>

          <div class="form-group">
            <span class="fa fa-lock"></span>
            <label htmlFor="checkin">No Of Rooms</label>
            <input type="number" class="form-control" required placeholder="No Of Rooms"
            onChange={(e) => {
              setRoom(e.target.value)
            }} />
          </div>

          
          <div class="form-group">
            <span class="fa fa-lock"></span>
            <label htmlFor="checkin">Room Type</label>
      <select id="roomtype" class="form-control" required placeholder="Room Type" 
       onChange={(e)=> {

        settype(e.target.value);

       } }>
        <option selected>AC</option>
        <option>Non AC</option>
      </select>
          </div>
 
          <br />
 
          
            <button type="submit" class="gradient-button gradient-button-4"> SUBMIT</button>
            <button type="submit" class="gradient-button gradient-button-1" > PAY NOW</button>
            
         
        </form>
        


        <br /><br />
      </div>

    </div>
    </div>

  )
}

export default SearchHotel;
