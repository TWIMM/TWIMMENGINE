import React, { useEffect, useRef, useState }  from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Carousel.css'
import img from '../img/1.jpg'
import img2 from '../img/2.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Headerbutton from './Headerbutton'
import Play from '../img/play.png'
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import Headermobile from '../Mobilecomponents/Headermobile'


export default function Carousel() {
    const imageRef = useRef(null)
    const [screen_width , setWidth] = useState(window.screen.width); 
    const [screen_height , setHeight] = useState(window.screen.height); 
    const [translateTo , setTranslateTo] = useState(0);
    const [description , setDescription] = useState('Alaska , Canada'); 
    const [isTime , setIsTime ] = useState(false)
    const [carouselControlClass , setControlClass] = useState('slidetitle3active')
    const [indexCarousel , setIndex] = useState('01/02')
    const [carouselControlClass2 , setControlClass2] = useState('slidetitle3rightactive')
    const [arrayOfTitle , setArrayOfTitle] = useState([ 'Tanzani, Zanzibar' , 'Alaska , USA'])
    const [arrayOfImg , setImg ] = useState(['../img/8.png' , '../img/4.png'])
    const  [currentIndex , setCurrentIndex] = useState(0)
    const  [slideClassName , setSlideClassName] = useState('img1')

    useEffect(()=>{ 

      //change the title after 20s

      const changeTitle = (title)=>{
        setDescription(title)
      }
    
      if(isTime === false){
        changeTitle(arrayOfTitle[1])
        setIndex('01/02')
        setTimeout(()=>{setIsTime(true)} , 22000)
      } else if(isTime === true){
        changeTitle(arrayOfTitle[0])
        setIndex('02/02')
        setTimeout(()=>{setIsTime(false)} , 22000)
      }

    } , [isTime])

    const Next = ()=>{ 
     /*  
      const changeTitle = (title)=>{
        setDescription(title)
      } */
      setCurrentIndex((index) => (index +1) % arrayOfImg.length )
      setSlideClassName(`img${currentIndex}`)
      /* changeTitle(arrayOfTitle[currentIndex]) */
      setIsTime(!isTime)

    }
    const Prev = ()=>{  
     /*  const changeTitle = (title)=>{
        setDescription(title)
      } */
      setCurrentIndex((index) => (index - 1 + arrayOfImg.length) % arrayOfImg.length )
      setSlideClassName(`img${currentIndex}`)
      //changeTitle(arrayOfTitle[currentIndex])
      setIsTime(!isTime)

    }

  return (
    <div 
    onMouseEnter={()=>{setControlClass('slidetitle3') ; setControlClass2('slidetitle3right')}} 
    onMouseLeave={()=>{setControlClass('slidetitle3active') ; setControlClass2('slidetitle3rightactive')}}
    className='slidercontainer'>
    
      <div 
    
      className='headercontain'>
        <Headerbutton/>
      </div>
      <div 
        
      className='containmobileheader'>
      <Headermobile/>
      </div>


     
      <div className='slider1'>

        <div className='slidetitle'>
            <p style={{fontSize:'15px'}} className=''>
              Meilleurs villes
            </p>
            <h2 className=''>
              {description}
            </h2>
        </div>

        <div className='slidetitleplay'>
           
         
          <div className='wave'>
          <img className='play' src={Play} />
          </div>
        </div>


        <div className='slidetitle2'>
           
            <h1 className=''>
               {indexCarousel}
            </h1>
        </div>

        

        <img className={slideClassName} ref={imageRef} style={{width:'100%' }}/>
      </div>

      <div className={carouselControlClass}>
        <ArrowBackIcon onClick={Prev} sx={{color:'rgb(236, 159, 6)' , fontSize:'40px'}}/> 
      
      </div>

      <div className={carouselControlClass2}>
        <ArrowForwardIcon onClick={Next} sx={{color:'rgb(236, 159, 6)' , fontSize:'40px'}}/> 
      
      </div>

      <div className='backForward'>
        <ArrowBackIcon onClick={Prev} sx={{color:'rgb(236, 159, 6)' , fontSize:'30px'}}/> 
        <ArrowForwardIcon onClick={Next} sx={{color:'rgb(236, 159, 6)' , fontSize:'30px'}}/> 
      </div>

      <div className='slidetitle4'>
       
        <div className='subOne'>
          
              <p className='subSubOne'>
                Prix
              </p>

              <h1 className='subSubOne'>
                720$
              </h1>

              <p className='subSubOne'>
                Une semaine pour 2 personnes
              </p>

        </div>


        <div className='subOne'>
          
              <p className='subSubOne'>
                Rating
              </p>

              <h1 className='subSubOne'>
                5 étoiles
              </h1>

              <p className='subSubOne'>
                Haut standing
              </p>

        </div>



        <div className='subOne'>
          
              <p className='subSubOne'>
                Disponibilité
              </p>

              <h1 className='subSubOne'>
                15 
              </h1>

              <p className='subSubOne'>
                Septembre
              </p>

        </div>

   

   
      </div>
      <div className='subtitlelogo'>
         <FacebookIcon sx={{fontSize:'40px' , color:'rgb(255, 255, 255)'}}/>
        
      </div>
    
    </div>
  )
}
