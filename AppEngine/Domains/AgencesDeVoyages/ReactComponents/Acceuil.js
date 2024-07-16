import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import SearchComponent from './SearchComponent'
import '../CSS/searchcomponent.css'
import Body from './Body'
import AboutUs from './AboutUs'
import Moreroom from './Moreroom'
import Review from './Review'
import Blog from './Blog'
import Newsletter from './Newsletter'
import Footer from './Footer'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function Acceuil() {

  const [isScrolling , setIsScrolling] = useState(false)
  const [headerClass , setHeaderClass] = useState('inactivearrow');

  const handleScroll = ()=>{
     if(window.scrollY > 100){
        setIsScrolling(true)
        setHeaderClass('activearrow')
     } else if(window.scrollY < 100){
        setHeaderClass('inactivearrow')
     }
  }

  const scrollToTop = ()=>{
    window.scrollTo({
      top:0, 
      behavior:'smooth',
    })
  }


  useEffect(()=>{
    window.addEventListener('scroll' ,handleScroll)

    return ()=>{
     window.removeEventListener('scroll' , handleScroll)
    } 
  } , [isScrolling])


  return (
    <div className=''>
      <Carousel />
      
      
      <div className='containsearchpart'>
        <SearchComponent />
      </div>

      <div className='containbody'>
        <Body />
      </div>

      <div className='containbody'>
        <AboutUs />
      </div>

      <div style={{marginBottom:'5%'}}  className='containbody'>
        <Moreroom />
      </div>

      <div style={{marginBottom:'5%'}}  className='containbody'>
        <Review />
      </div>

      <div style={{marginBottom:'5%'}}  className='containbody'>
        <Blog />
      </div>

      <div style={{marginBottom:'5%'}}  className='containbody'>
        <Newsletter />
      </div>

      <div className='containbody'>
        <Footer />
      </div>

      <div onClick={scrollToTop}  style={{ position:'fixed' , backgroundColor:'rgb(236, 159, 6)' , zIndex:'3' , left:'20px', bottom:'20px'}} className={headerClass}> 
    
        <ArrowUpwardIcon sx={{color:'white'}}/>
        
      </div>  

    </div>
  )
}
