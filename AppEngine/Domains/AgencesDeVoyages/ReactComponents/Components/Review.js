import React , {useState , useEffect} from 'react'
import Reviewtemplate from './Reviewtemplate'
import {useInView} from 'react-intersection-observer'



function Review() {


  const [elementClass1 , setClass1] = useState('reviewimg')
  const [elementClass2 , setClass2] = useState('reviewtemplate');

  const [ref1 , inView1 ] = useInView({
      triggerOnce:true, 
      rootMargin:'0px',
  })

  const [ref2 , inView2 ] = useInView({
      triggerOnce:true, 
      rootMargin:'0px',
  })

  useEffect(()=> {
   
    if(inView1 === true){
      setClass1('reviewimgactive')
    } else {
        setClass1('reviewimg')
    } 

    
  } , [inView1])

  useEffect(()=> {
    
    if(inView2 === true){
      setClass2('reviewtemplateactive')
    } else {
        setClass2('reviewtemplate')
    } 

    
  } , [inView2])





  return (
    <div className='containreview'>
      
        <div ref={ref1} className={elementClass1}>
           
        </div>

        <div ref={ref2} className={elementClass2}>
           <Reviewtemplate/>
        </div>

    </div>
  )
}

export default Review