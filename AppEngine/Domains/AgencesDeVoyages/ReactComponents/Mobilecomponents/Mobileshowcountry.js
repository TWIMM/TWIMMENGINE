import React , {useState , useEffect} from 'react'
import TownBookingTemplate from '../Components/TownBookingTemplate'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image1 from '../img/destination-list/3.png'

function Mobileshowcountry() {

    const [levelClass , setlevelClass] = useState(['loadstart' , 'loadsecond' , 'loadend','initial'])
    const [currentIndex , setCurrentIndex] = useState(0)
    const [myIndex , setMyIndex] = useState(0)
    const [townList , setTownList] = useState('second')
    const arrayOfChoice = ['thecountry' , 'thecountry2' , "thecountry3",'retourAuxSources'];
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
         (response) =>  {
           if(response.trip){
            setTrips(response.trip)
           }
           // console.log(Trips)
         }
      )
    }
  
    useEffect( () => {
      getAllTrips()
    } , [])
  
  
    
  
  
  
    const Next = ()=>{ 
   
      //setCurrentIndex(myIndex + 1)
      setMyIndex(myIndex + 1)
      //setTownList(`second${arrayOfChoice[currentIndex]}`)
  
    }
  
    const Prev = ()=>{ 
     
      setMyIndex(myIndex - 1)
     
    }
  
  
  
    useEffect(()=> {
      console.log(currentIndex)
  
      if(myIndex > 2){
        
        setMyIndex(0)
      
      } else if(myIndex < 0){
     
        setMyIndex(0)
      
      } 
    } , [myIndex])
  
  

  return (
    <div className='containroommobile'>
       
        <div  className={arrayOfChoice[myIndex]}>
             {
              Trips?.map(eachTrip =>  <div style={{width:'400px' }} className='containtemplate'>
                    <TownBookingTemplate Trip={eachTrip} />
              </div>)
             }
        </div>
        <div className='index_controllers'>
            <div className='arrow'  onClick={Next}>
                <ArrowForwardIcon /* onClick={Next}  */ sx={{color:'rgb(236, 159, 6)' , fontSize:'40px'}}/> 
            
            </div>

            <div className='index'>
                <p className='index1'>
                    0{myIndex+1}
                </p>

                <p className='index1'>
                    /
                </p>

                <p className='index2'>
                    03
                </p>
            </div>

            <div className='level'>
                <div className={levelClass[myIndex]}>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobileshowcountry