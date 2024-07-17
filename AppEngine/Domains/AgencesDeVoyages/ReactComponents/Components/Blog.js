import React from 'react'
import Star from '../img/star.png'
import Client from '../img/client/1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import img1 from '../img/blog/3.png'
import img2 from '../img/blog/5.png'
import img3 from '../img/blog/6.png'
import img4 from '../img/blog/8.png'
import img5 from '../img/blog/9.png'




function Blog() {
  return (
    <div className='contain_blog'>
        
        <div className='blog1'>
            
            <div className='contain_imgblog'>
            
            </div>

            <div className='desc'>
                    
                <h5 style={{ textAlign: 'left', color: ' rgba(13, 146, 106, 0.856)' , marginRight:'auto'}}> Europe</h5> 
                <h1  style={{ marginRight:'auto'}} className='textoffertitle'> 
                  Why You Shouldn’t Ride Elephants In France.
                </h1>
                <img style={{width:'4%' ,  marginRight:'auto'}} src={Star}/>  
                <p style={{textAlign: 'left', color:'rgba(51, 51, 51, 0.88)', marginRight:'auto'}} className=''> 
                    The largest country in the world, Russia offers a broad array of travel experiences, 
                    from treks up the slopes of glacier-capped mountains to strolls along the shoreline of Earth’s oldest lake. 
                    Historical sites and cultural activities in the country’s great cities abound as well. 
                    Whether you’re exploring the grounds of Moscow’s Kremlin or wandering through the 
                    steppes of Mongolia, a visit to Russia is an adventure not soon forgotten. 
                    These top tourists attractions in Russia can inspire a great Russian itinerary for a memorable trip.
                </p> 

                <div style={{marginRight:'auto' , display:'flex' , width:'40%', flexDirection:'row', alignItems:'center' , justifyContent:'space-around'}}> 
                    <button className='booknow' >
                       Lire plus
                       <ArrowForwardIcon/> 
                    </button> 
                </div> 
               
        
            </div>


        </div>

        <div className='morestory'>
            
            <div className='sto'>
                   <button  className='booknow' >
                       Lire plus
                       <ArrowForwardIcon/> 
                    </button> 
                    <h2 className='labelname'> Why You Shouldn’t Ride Elephants In Thailand   </h2>
            </div>

  
            <div className='sto'>
                   <button className='booknow' >
                       Lire plus
                       <ArrowForwardIcon/> 
                    </button> 
                    <h2  className='labelname'> Why You Shouldn’t Ride Elephants In Thailand   </h2>
            </div>

  
            <div className='sto'>
                   <button  className='booknow' >
                       Lire plus
                       <ArrowForwardIcon/> 
                    </button> 
                    <h2  className='labelname'> Why You Shouldn’t Ride Elephants In Thailand   </h2>
            </div>

            <div className='sto'>
                   <button className='booknow' >
                       Lire plus
                       <ArrowForwardIcon/> 
                    </button> 
                    <h2  className='labelname'> Why You Shouldn’t Ride Elephants In Thailand   </h2>
            </div>

           
            
        </div>


    </div>
  )
}

export default Blog