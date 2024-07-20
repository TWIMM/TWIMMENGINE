import React, { useEffect, useState } from 'react'
import '../CSS/Carousel.css'
import Logo from '../img/faviconsvg.svg'
import Logo2 from '../img/faviconsvg.svg'
import SendSharpIcon from '@mui/icons-material/SendSharp'
import Menuhamburger from '../Components/Menuhamburger'

function Headermobile() {



  /*   const [isScrolling , setIsScrolling] = useState(false)
    const [headerClass , setHeaderClass] = useState('headercontainer');
 
    const handleScroll = ()=>{
       if(window.scrollY > 60){
          setIsScrolling(true)
          setHeaderClass('headercontaineractive')
       } else if(window.scrollY < 60){
          setHeaderClass('headercontainer')
       }
    }
 
    useEffect(()=>{
      window.addEventListener('scroll' ,handleScroll)
 
      return ()=>{
       window.removeEventListener('scroll' , handleScroll)
      } 
    } , [])
     useEffect(()=>{
       console.log(isScrolling)
    } , [isScrolling])
   */

  return (
    <div className='containmobileheader'>
      <img className='logo1' style={{ width: '5%' }} src={"Files/faviconsvg.svg"} />


      <div className='butlistone' >

        <select className='selectlang' >

          <option className='lang' value={'FR'}> Fr</option>
          <option className='lang' value={'ANG'}> Ang </option>

        </select>


        <button className='account' >

        </button>


        <Menuhamburger />

      </div>

    </div>
  )
}

export default Headermobile