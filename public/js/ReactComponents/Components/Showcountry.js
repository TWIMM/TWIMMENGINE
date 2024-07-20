import React , {useState , useEffect} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import TownBookingTemplate from './TownBookingTemplate'

function Showcountry() {

  const [levelClass , setlevelClass] = useState(['loadstart' , 'loadsecond' , 'loadend','initial'])
  const [currentIndex , setCurrentIndex] = useState(0)
  const [myIndex , setMyIndex] = useState(0)
  const [townList , setTownList] = useState('second')
  const arrayOfChoice = ['second' , 'second0' , "second1","second1"];





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
    <div className='contain_room'>
     
      <div className='first'>
        {/*   <div className='arrow'   onClick={Prev}  >
            <ArrowBackIcon sx={{color:'rgb(236, 159, 6)' , fontSize:'40px'}}/> 
          
          </div> */}

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

      <div className='third'>
          
      </div>
      
      <div  className={arrayOfChoice[myIndex]}>
         
        <div  className='containtemplate'>
          <TownBookingTemplate Townname='Tanzani'/>
        </div>

         
        <div className='containtemplate'>
          <TownBookingTemplate Townname='Mali'/>
        </div>

         
        <div className='containtemplate'>
          <TownBookingTemplate Townname='Sénégal'/>
        </div>

         
      </div>

    </div>
  )
}

export default Showcountry