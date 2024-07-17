import React , {useState , useEffect} from 'react'
import Star from '../img/star.png'
import Client from '../img/client/1.png'

function Reviewtemplate() {



  return (
    <div className='containreviewchild'>
        <h5 style={{ textAlign: 'left', color: ' rgba(13, 146, 106, 0.856)' , marginRight:'auto'}}> Travel reviews</h5> 
        <h1  style={{ marginRight:'auto'}} className='textoffertitle'> Russia</h1>
        <img style={{width:'4%' ,  marginRight:'auto'}} src={Star}/>  
        <p style={{textAlign: 'left', color:'rgba(51, 51, 51, 0.88)', marginRight:'auto'}} className=''> 
            The largest country in the world, Russia offers a broad array of travel experiences, 
            from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. 
            Historical sites and cultural activities in the country’s great cities abound as well. 
            Whether you’re exploring the grounds of Moscow’s Kremlin or wandering through the 
            steppes of Mongolia, a visit to Russia is an adventure not soon forgotten. 
            These top tourists attractions in Russia can inspire a great Russian itinerary for a memorable trip.
        </p> 

        <div style={{marginRight:'auto' , display:'flex' , width:'60%', flexDirection:'row', alignItems:'center' , justifyContent:'space-between'}}> 
            <img style={{width:'20%'}} src={Client}/> 
            <h6 className='textoffertitle'> Juliane robert</h6> 
        </div> 
        <h6 style={{ marginRight:'auto' , color:'rgba(51, 51, 51, 0.88) ' , fontSize:'14px'}}  className=''> Tourist</h6> 
    </div>
  )
}

export default Reviewtemplate