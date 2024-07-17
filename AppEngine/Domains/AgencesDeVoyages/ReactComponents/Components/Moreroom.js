import React , {useState , useEffect, useRef} from 'react'
import Moretowntemplate from './Moretowntemplate'
import {useInView} from 'react-intersection-observer'

function Moreroom() {

    const [elementClass1 , setClass1] = useState('containtemplatetown')
    const [elementClass2 , setClass2] = useState('containtemplatetown');
    const [elementClass3 , setClass3] = useState('containtemplatetown');
    const [elementClass4 , setClass4] = useState('containtemplatetown');


    const [ref1 , inView1 ] = useInView({
        triggerOnce:true, 
        rootMargin:'0px',
    })

    const [ref2 , inView2 ] = useInView({
        triggerOnce:true, 
        rootMargin:'0px',
    })

    const [ref3 , inView3 ] = useInView({
        triggerOnce:true, 
        rootMargin:'0px',
    })

    const [ref4 , inView4 ] = useInView({
        triggerOnce:true, 
        rootMargin:'0px',
    })
    


    useEffect(()=> {
   
        if(inView2 === true){
          setClass2('containtemplateactive2')
        } else {
            setClass2('containtemplatetown')
        } 
    
        
    } , [inView2])



    useEffect(()=> {
   
        if(inView3 === true){
          setClass3('containtemplateactive3')
        } else {
            setClass3('containtemplatetown')
        } 
    
        
    } , [inView3])
    
   
    useEffect(()=> {
    
        if(inView4 === true){
        setClass4('containtemplateactive4')
        } else {
            setClass4('containtemplatetown')
        } 

        
    } , [inView4])
        

    useEffect(()=> {
    
        if(inView1 === true){
        setClass1('containtemplateactive')
        } else {
            setClass1('containtemplatetown')
        } 

        
    } , [inView1])


  return (
    <div style={{width:'97%'}}  className='contain_room'>
        <div  className={elementClass1} ref={ref1}>
          <Moretowntemplate />
        </div>

         
        <div   className={elementClass2} ref={ref2}>
          <Moretowntemplate/>
        </div>

         
        <div   className={elementClass3} ref={ref3}>
          <Moretowntemplate/>
        </div>
        <div   className={elementClass4} ref={ref4}>
          <Moretowntemplate/>
        </div>
    </div>
  )
}

export default Moreroom