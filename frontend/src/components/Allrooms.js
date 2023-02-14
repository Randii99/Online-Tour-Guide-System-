import React,{Component} from "react";
import axios from "axios";

export default class Allrooms extends Component{


   constructor(props){

       super(props);

       this.state={

        rooms:[]
       };

   }
  componentDidMount(){

   this.retriveRooms();
  }
  retriveRooms(){
//retrieve user details to the admin
   axios.get("http://localhost:8070/room/allhotels").then(res=>{

      if(res.data.success){
          this.setState({

            rooms:res.data.existingRooms

          });

          console.log(this.state.rooms)

      }
})

}
// delete user details 
onDelete(id){

     fetch(`http://localhost:8070/room/delete/${id}`,{

           method:`DELETE`

          }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Hotel Deleted Successfully")
           this.retriveRooms()

         })
        })
     }
     render(){
       return(

      <div className="container">

           <center>
           <h2 class="text-light bg-dark" >Manage User Details...</h2>
           </center>
      <table className="table table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
        
      <th scope="col">ID</th>
      <th scope="col">Check In</th>
      <th scope="col">Check Out</th>
      <th scope="col">Location</th>
      <th scope="col">No Of Guests</th>
      <th scope="col">No Of Rooms</th>
      <th scope="col">Room Type</th>
      <th scope="col">Acction</th>
           
           
           </tr>
     </thead>
     <tbody>

       {this.state.rooms.map((rooms,index)=>(

        <tr>
           <th scope="row">{index+1}</th>
           <td>{rooms.checkIn}</td>
           <td>{rooms.checkOut}</td>
           <td>{rooms.location}</td>
           <td>{rooms.no_of_guests}</td>
           <td>{rooms.no_of_rooms}</td>
           <td>{rooms. roomType}</td>

          <td>
             <button type="button" class="btn btn-dark" onClick={()=>this.onDelete(rooms._id)}>Delete</button>
             </td>

           </tr>
           ))}
       
        </tbody>
        
        
         </table>
      </div>
      ) 
 }

 }