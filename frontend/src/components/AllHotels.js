import React,{Component} from "react";
import axios from "axios";

export default class AllHotels extends Component{


   constructor(props){

       super(props);

       this.state={

        hotels:[]
       };

   }
  componentDidMount(){

   this.retriveHotels();
  }
  retriveHotels(){
//retreive data to the admin
   axios.get("http://localhost:8070/hotel/all").then(res=>{

      if(res.data.success){
          this.setState({

            hotels:res.data.existingHotels

          });

          console.log(this.state.hotels)

      }
})

}
//delete data in the database
onDelete(id){

     fetch(`http://localhost:8070/hotel/delete/${id}`,{

           method:`DELETE`

          }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Hotel Deleted Successfully")
           this.retrieveHotels()

         })
        })
     }
     render(){
       return(

      <div className="container">
       

           <center>
           <h2 class="text-light bg-dark" >Manage Hotel Details</h2>
           </center>
      <table className="table table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
        
      <th scope="col">ID</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Official Email</th>
      <th scope="col">Telephone Number</th>
      <th scope="col">District</th>
      <th scope="col">Price</th>
      <th scope="col">Number Of Rooms</th>
      <th scope="col">Acction</th>
           
           
           </tr>
     </thead>
     <tbody>

       {this.state.hotels.map((hotels,index)=>(

        <tr>
           <th scope="row">{index+1}</th>
           <td>{hotels.name}</td>
           <td>{hotels.email}</td>
           <td>{hotels.phone_number}</td>
           <td>{hotels.district}</td>
           <td>{hotels.price}</td>
           <td>{hotels. no_of_rooms}</td>

          <td>
             <button type="button" class="btn btn-dark" onClick={()=>this.onDelete(hotels._id)}>Delete</button>
             </td>

             <td>
                        <a className="btn btn-dark" href={`/update/${hotels._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a></td>

           </tr>
           ))}
           
           
       
        </tbody>
        
        
        
         </table>
         <a href ="add" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>BACK</b></a>
         <a href ="report" type="submit" class="btn btn-danger"  style={{ marginTop: '60px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>GET REPORT</b></a>
      </div>
      ) 
 }

 }