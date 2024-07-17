import React from 'react'
import Carousel from '../Components/Carousel'
import SearchComponent from '../Components/SearchComponent'
import Body from '../Components/Body'
import AboutUs from '../Components/AboutUs'
import Moreroom from '../Components/Moreroom'
import Review from '../Components/Review'
import Blog from '../Components/Blog'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Mobileshowcountry from './Mobileshowcountry'
import Menu from './Menu'

function AccueilMobile() {
  return (
    <div>
         <Carousel />
        
         <div style={{width:'100%', position:'fixed' , zIndex:'3' , top:'65px'}} className=''>
            <Menu />
         </div>
         <div className='containsearchpart'>
            <SearchComponent />
         </div>


         <div  style={{marginBottom:'5%'}}  className='containbody'>
          <Body />
         </div>


         <div style={{marginTop:'5%'}}   className='containbody'>
            <Mobileshowcountry />
         </div>

         <div  className='containbody'>
            <AboutUs />
         </div>

         <div style={{marginTop:'10%'}} className='containbody'>
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

    </div>
  )
}

export default AccueilMobile