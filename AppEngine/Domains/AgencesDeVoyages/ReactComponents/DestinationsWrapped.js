import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Headermobile from './Mobilecomponents/Headermobile';
import Menu from './Mobilecomponents/Menu';
import logoLocation from './img/icons/10.png';
import { Provider } from 'react-redux';
import store from './redux/store';

const sampleTrips = [
   {
      picture: '1.png',
      ville_name: 'Paris',
      destinations: 'Eiffel Tower, Louvre Museum',
      nombredepersonnes: 5,
      prix: 150000,
   },
   {
      picture: '2.png',
      ville_name: 'New York',
      destinations: 'Statue of Liberty, Central Park',
      nombredepersonnes: 3,
      prix: 200000,
   },
   // Add more sample trip objects as needed
];

function Destinations() {
   const [Trips, setTrips] = useState([]);

   // Replace API call with simulation data
   const getAllTrips = () => {
      // Simulate API call delay
      setTimeout(() => {
         setTrips(sampleTrips);
      }, 1000); // 1 second delay
   };

   useEffect(() => {
      getAllTrips();
   }, []);

   return (
      <div>
         <Headermobile />
         <div style={{ width: '100%', position: 'fixed', zIndex: '3', top: '65px' }}>
            <Menu />
         </div>
         <div style={{ width: '100%' }} className='background'>
            <h2>Trip organisés</h2>
            <p>Home | Trip organisés</p>
         </div>

         <div
            style={{
               display: 'flex',
               marginTop: '4%',
               width: '100%',
               flexDirection: 'column',
               justifyContent: 'space-between',
               alignItems: 'center',
            }}
         >
            {Trips.map((eachTrip, index) => (
               <div
                  key={index}
                  className='tripcontainer'
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     marginTop: '4%',
                     alignItems: 'center',
                  }}
               >
                  <img
                     className='tripimage'
                     src={require(`./img/destination-list/${eachTrip.picture}`)}
                     style={{ width: '95%' }}
                  />
                  <div
                     style={{
                        display: 'flex',
                        width: '100%',
                        fontSize: '20px',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        color: 'rgba(4, 119, 71, 0.99)',
                        marginRight: 'auto',
                        alignItems: 'center',
                     }}
                  >
                     <img src={logoLocation} style={{ width: '5%' }} />
                     <p style={{ marginRight: 'auto' }}>{eachTrip.ville_name}</p>
                  </div>
                  <div
                     style={{
                        width: '96%',
                        color: 'rgba(80, 80, 79, 0.8)',
                        fontSize: '17px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <p>{eachTrip.destinations} | </p>
                     <p>{eachTrip.nombredepersonnes} personnes | </p>
                     <p style={{ color: 'rgb(251, 159, 11)', fontSize: '20px' }}>
                        {eachTrip.prix} Fcfa
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

const DestinationsWithRedux = () => (
   <Provider store={store}>
      <Destinations />
   </Provider>
);

const domContainer = document.querySelector('#destination_dist');

if (domContainer) {
   ReactDOM.createRoot(domContainer).render(<DestinationsWithRedux />);
} else {
   console.error('Could not find the DOM container with the id "destination_dist"');
}
