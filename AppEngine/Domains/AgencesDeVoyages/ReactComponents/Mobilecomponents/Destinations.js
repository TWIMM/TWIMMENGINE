import React , {useState , useEffect} from 'react'
import Headermobile from './Headermobile'
import Menu from './Menu'
import Img from '../img/destination-list/3.png'
import logoLocation from '../img/icons/10.png'

function Destinations() {
 
   const [Trips , setTrips] = useState([])

   const getAllTrips = () => {
    fetch('http://127.0.0.1:8000/api/getalltrip' , {
       method:'POST' , 
       headers:{
         'Accept':'application/json', 
         
        }
    }).then(
     response => response.json()
    ).then(
     response => setTrips(response.trip)
    )
   }

   useEffect( () => {
    getAllTrips()
   } , [])




  return (
    <div >
       <Headermobile/>
       <div style={{width:'100%', position:'fixed' , zIndex:'3' , top:'65px'}} className=''>
            <Menu />
       </div>
       <div style={{width:'100%',}} className='background'>
          <h2>  Trip organisés </h2>
          <p>  Home | Trip organisés </p>
       </div>

       <div style={{display:'flex',marginTop:'4%',width:'100%', flexDirection:'column', justifyContent:'space-between' ,  alignItems:'center'}}  >
          { 
            Trips?.map(  (eachTrip ) =>  <div className='tripcontainer' style={{display:'flex', flexDirection:'column', justifyContent:'center' ,marginTop:'4%' , alignItems:'center'}} > 
                   <img className='tripimage' src={require(`../img/destination-list/${eachTrip.picture}`)} style={{width:'95%'}}/ >
                   
                   <div style={{display:'flex' , width:'100%', fontSize:'20px', flexDirection:'row', justifyContent:'center' , color:'rgba(4, 119, 71, 0.99)' , marginRight:'auto' , alignItems:'center'}}> 
                      <img  src={logoLocation} style={{width:'5%'}}/ >
                      <p style={{marginRight:'auto' }}>  {eachTrip.ville_name} </p>
                      
                   </div>

                    
                   <div style={{width:'96%', color:' rgba(80, 80, 79, 0.8)' , fontSize:'17px',display:'flex' , flexDirection:'row', justifyContent:'center' , alignItems:'center'}}> 
                         <p>  {eachTrip.destinations} | </p>
                         <p>  {eachTrip.nombredepersonnes} personnes | </p>
                         <p style={{color: 'rgb(251, 159, 11)', fontSize:'20px'}}>  {eachTrip.prix} Fcfa  </p>
                   </div>

                   
              </div >
            )
          }

       </div>

    </div>
  )
}

export default Destinations