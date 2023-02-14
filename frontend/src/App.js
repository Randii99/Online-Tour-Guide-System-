   
import './App.css';
//import CounterClass from './components/CounterClass';
//mport CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddHotel from './components/AddHotel';
import AllHotels from './components/AllHotels';
import SearchHotel from './components/SearchHotel';
import EditHotel from './components/Edit';
import Allrooms from './components/Allrooms';
import{BrowserRouter as Router, Switch, Route} from  "react-router-dom"
import React from 'react';
import AllUser from './components/AllUser';
import UserView from './components/UserView';
import HotelReport from './components/HotelReport';

function App() {
  return (

<div>
<Router>

<div className='container mt-3'>
        
         <Switch>


         <Route exact path = {["/all"]} component = {AllHotels}/>
           <Route
           path ="/all"
           component={AllHotels}
           />

          <Route exact path = {["/update/:id"]} component = {EditHotel}/>
           <Route
           path ="/update"
           component={EditHotel}
           />
         
          <Route exact path = {["/add"]} component = {AddHotel}/>
           <Route
           path ="/add"
           component={AddHotel}
           />

          <Route exact path = {["/insert"]} component = {SearchHotel}/>
           <Route
           path ="/insert"
           component={SearchHotel}
           />

           <Route exact path = {["/allhotels"]} component = {Allrooms}/>
           <Route
           path ="/allhotels"
           component={Allrooms}
           />

          <Route exact path = {["/all2"]} component = {AllUser}/>
           <Route
           path ="/all2"
           component={AllUser}
           />

         <Route exact path = {["/view"]} component = {UserView}/>
           <Route
           path ="/view"
           component={UserView}
           />
          <Route exact path = {["/report"]} component = {HotelReport}/>
           <Route
           path ="/report"
           component={HotelReport}
           />

         </Switch>
   </div>
       </Router>

</div>
    
  );
}

export default App;
