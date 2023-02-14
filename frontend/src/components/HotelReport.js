import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Package from "../../../TourPackage/BACKEND/models/Package";

export default class HotelReport extends Component {


    constructor(props) {

        super(props);

        this.state = {

            hotels: []
        };

    }
    componentDidMount() {

        this.retriveHotels();
    }
    retriveHotels() {

        axios.get("http://localhost:8070/hotel/all").then(res => {

            if (res.data.success) {
                this.setState({

                    hotels: res.data.existingHotels

                });

                console.log(this.state.hotels)

            }


        })



    }
   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (

            <div className="container">
       

       <h1><center><strong>All Hotels Report</strong></center></h1>
       <table className="table table-hover" style={{marginTop:'40px'}}>
       <thead>
       <tr>
         
       <th scope="col">Count </th>
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
 
            </tr>
            ))}
            
            
        
         </tbody>
         
         
         
          </table>
          < button type="button" class="btn btn-danger" style={{marginTop:'15px' , width:'300px'}}  onClick={this.repotGen}><strong>Print Report</strong></button>
            </div>



        )
    }

}