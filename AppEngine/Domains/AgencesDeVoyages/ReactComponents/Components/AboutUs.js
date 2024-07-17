import React , {useState , useEffect} from 'react'
import Play from '../img/play.png'
import {useInView} from 'react-intersection-observer'

function AboutUs() {


    const [elementClassName , setClassName] = useState('row1');
    const [elementClassName2 , setClassName2] = useState('row2');
    const [elementClassName3 , setClassName3] = useState('colvac')
  
    const [ref , inView ] = useInView({
      triggerOnce:true, 
      rootMargin:'0px',
    })
  
  
    useEffect(()=> {
     
  
      if(inView === true){
        
       setClassName('row1active')
       setClassName2('row2active')
       setClassName3('colvacactive')
      
      } else {
        
        setClassName('row1')
        setClassName2('row2')
        setClassName3('colvac')
    } 
    } , [inView])


  return (
    <div className='abcontainer'>

      <div className='aboutus'>
        
          <div ref={ref} className={elementClassName}>
            <h1 className='titretitre'> Que savez-vous à propos de nous ?</h1> 
            <p className='textoffer'>  
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has not only five centuries
            </p> 
          </div>

          <div className={elementClassName2}>
            <img className='playtwo' src={Play} />
          </div>
      </div>

     
          <div className={elementClassName3} ref={ref}>
               <div className='part1_one'>
                    <h1 className='titretitre'>
                      Perfect Holiday Plan
                    </h1> 
                </div>
                <h5  className='textoffer'>
                    Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h5>
          </div>
     
    </div>
  )
}

export default AboutUs