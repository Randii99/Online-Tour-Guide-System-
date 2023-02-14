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

   axios.get("http://localhost:8070/hotel/all").then(res=>{

      if(res.data.success){
          this.setState({

            hotels:res.data.existingHotels

          });

          console.log(this.state.hotels)

      }
})

}

//Filter /Search Mechod
filterContent(hotels,searchTerm){

   const results=hotels.filter((hotels)=>hotels.district.toLowerCase().includes(searchTerm));
   this.setState({hotels:results});
 
 }
 
 handleTextSearch=(e)=>{
 
    const searchTerm=e.currentTarget.value;
    axios.get("http://localhost:8070/hotel/all").then(res=>{
 
     if(res.data.success){
        this.filterContent(res.data.existingHotels
         ,searchTerm)
     }
 });
 
 }




     render(){
       return(

      <div className="container" class="p-3 mb-2 bg-dark text-white">
         <div className="row">      </div>
         <div className="col-lg-9 mt-2 mb-2">     
         <h3> <strong> Search location Of The Hotel Here</strong></h3>
         </div>

           <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
            <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchTerm"
             onChange={this.handleTextSearch}
            
            ></input>
            </div>
      <table className="table table-dark table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
        
      <th scope="col">Count</th>
      <th scope="col">Hotel Name</th>
      <th scope="col">Official Email</th>
      <th scope="col">Telephone Number</th>
      <th scope="col">District</th>
      <th scope="col">Price</th>
      <th scope="col">Number Of Rooms</th>
      
           
           
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
           <a href ="insert" type="submit" class="btn btn-warning" style={{ marginTop: '20px', color:'white', width:'245px', height:'38px', margin:'10px'}} ><b>BOOK NOW</b></a>
           </td>

          
           </tr>
           ))}
       
        </tbody>
        
        
         </table>
      </div>
      ) 
 }

 }