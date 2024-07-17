import React, { useState, useEffect } from 'react'
import Showcountry from './Showcountry'
import {useInView} from 'react-intersection-observer'

function Body() {

  const [elementClassName , setClassName] = useState('col1');
  const [elementClassName2 , setClassName2] = useState('col2');

  const [ref , inView ] = useInView({
    triggerOnce:true, 
    rootMargin:'0px',
  })


  useEffect(()=> {
   

    if(inView === true){
      
     setClassName('active')
     setClassName2('active2')
    
    } else {
   
      setClassName('col1')
      setClassName2('col2')
    } 
  } , [inView])


  return (
    <div className='contain_body'>
        <div className='contain_offer'>
            
            <div className={elementClassName} ref={ref}>

                <div className='part'>
                   <div className='part1_one'>
                        <h1 className='chiffretitre'>
                          01
                        </h1>
                        <h3 className='textoffertitle'>
                          Travel
                        </h3>
                   </div>
                   <h5 className='textoffer'>
                      Sponsorships are like unicorns or leprechauns, talked about often but they don’t actually exist. There is only dollars and cents, the ...
                   </h5>
                </div>

                <div className='part'>
                    <div className='part1_one'>
                        <h1 className='chiffretitre'>
                          02
                        </h1>
                        <h3 className='textoffertitle'>
                          Experiences
                        </h3>
                   </div>
                   <h5 className='textoffer'>
                     My response is usually harsh. Offended at the suggestion that a career that’s taken more than a decade to create could be...
                   </h5>
                </div>

                <div className='part'>
                    <div className='part1_one'>
                        <h1 className='chiffretitre'>
                          03
                        </h1>
                        <h3 className='textoffertitle'>
                          Relax
                        </h3>
                   </div>
                   <h5 className='textoffer'>
                      I have always made a living to make movies, never the other way around. When I first started I washed in a seafood restaurant....
                   </h5>
                </div>
            </div>


            <div className={elementClassName2} ref={ref}>
                <div className='part1_one'>
                        <h1 className='titretitre'>
                           Special offers & Discounts
                        </h1> 
                </div>
                <h5  className='textoffer'>
                    Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h5>
            </div>
        </div>
        
        
        <div className='some_room'>
          <Showcountry/>
        </div>
    </div>
  )
}

export default Body