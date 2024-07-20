import React , {useState} from 'react'
import '../CSS/searchcomponent.css'
import Destination from '../img/destination-list/7.png'
import Timetable from '../img/timetable.png'
import stars from '../img/star.png'
import SendSharpIcon from '@mui/icons-material/SendSharp'

function TownBookingTemplate() {

    const [ClassNameInd , setNewClassName] = useState('indicator')

  

  return (
    <div className='eachtowncopy'>
        <div className='townimgcopy' >  
            <button className='booknowmobile' >
                Book Now
                <SendSharpIcon/>
            </button>
        </div>  

        <h1  style={{fontWeight:'bold'}} className='textoffertitle'> Tanzania </h1> 
        <h3 style={{ color: 'rgba(102, 101, 101, 0.9)' , fontSize:'13px'}}> Période ensoleillé </h3> 
        
        <div className='caracteristique'> 
            <div className='date'> 
                <img style={{width:'20%'}} src={Timetable}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.9)'}}> 8 Oct</h5> 
            </div> 

            <div className='date'> 
                <img style={{width:'20%'}} src={Timetable}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.9'}}> 4 jours</h5> 
            </div> 

            <div className='date'> 
                <img style={{width:'30%'}} src={stars}/> 
                <h5 style={{ color: 'rgba(102, 101, 101, 0.9)'}}> 4.3</h5> 
            </div> 

        </div> 

      

        <div className='caracteristique'> 
            <p className='prix1'>
               650$
            </p>
            <del className='prix2'>
               750$
            </del>
        </div> 

        
    </div>
  )
}

export default TownBookingTemplate