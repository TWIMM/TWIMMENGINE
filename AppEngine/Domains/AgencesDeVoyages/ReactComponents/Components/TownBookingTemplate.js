import React , {useState, useEffect} from 'react'
import '../CSS/searchcomponent.css'
import Destination from '../img/destination-list/3.png'
import Timetable from '../img/timetable.png'
import stars from '../img/star.png'
import SendSharpIcon from '@mui/icons-material/SendSharp'

function TownBookingTemplate(Trip) {

    const [ClassNameInd , setNewClassName] = useState('indicator')
    const [info, setInfo] = useState([])

    useEffect(()=>{
      console.log(Trip.Trip)
      if(Trip.Trip){
        setInfo(Trip.Trip)
      }
    } , []) 

  return (
    <div className='eachtown'>
        <div className='townimg' >  
            <button className='booknowmobile' >
                Book Now
                <SendSharpIcon/>
            </button>
        </div>  

        <h1  style={{fontWeight:'bold'}} className='textoffertitle'> {info.ville_name}</h1> 
        <p style={{ color: 'rgba(102, 101, 101, 0.8)'}}> Période ensoleillé </p> 
        
        <div className='caracteristique'> 
            <div className='date'> 
                <img style={{width:'20%'}} src={Timetable}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.7)'}}> 8 Oct</h5> 
            </div> 

            <div className='date'> 
                <img style={{width:'20%'}} src={Timetable}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.7'}}> 4 jours</h5> 
            </div> 

            <div className='date'> 
                <img style={{width:'30%'}} src={stars}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.7)'}}> 4.3</h5> 
            </div> 

        </div> 

        <div  style={{height:'20px'}} className='caracteristique'> 
           <p style={{ color: 'rgba(102, 101, 101, 0.7)'}}>  ...................................................... </p> 
        </div> 

        <div style={{height:'20px'}}  className='caracteristique'> 
           
           <h5 style={{ color: 'rgba(102, 101, 101, 0.7)'}}> Prix</h5> 
        </div> 

        <div style={{height:'60px'}} className='caracteristique'> 
            <p className='prix1'>
               {info.prix} FCFA
            </p>
        {/*    /*  <del className='prix2'>
                {number(info.prix) + 3000}   FCFA
            </del> */}
        </div> 

        
        <div className={ClassNameInd}> 
           
        </div> 
    </div>
  )
}

export default TownBookingTemplate