import React, { useEffect, useState } from 'react'
import '../CSS/Carousel.css'
import Logo from '../img/faviconsvg.svg'
import Logo2 from '../img/faviconsvg.svg'
import SendSharpIcon from '@mui/icons-material/SendSharp'
import { useNavigate } from 'react-router-dom';

function Headerbutton() {

   const [isScrolling, setIsScrolling] = useState(false)
   const [headerClass, setHeaderClass] = useState('headercontainer');
   const navigate = useNavigate();

   const handleScroll = () => {
      if (window.scrollY > 60) {
         setIsScrolling(true)
         setHeaderClass('headercontaineractive')
      } else if (window.scrollY < 60) {
         setHeaderClass('headercontainer')
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   /*    useEffect(()=>{
         console.log(isScrolling)
      } , [isScrolling])
    */

   return (
      <div className={headerClass} >
         <img className='logo1' style={{ width: '3%' }} src={"Files/faviconsvg.svg"} />
         <img className='logo2' style={{ width: '3%' }} src={"Files/faviconsvg.svg"} />

         <div className='butlistone' >

            <div className='containbut'>
               <button className='but' >
                  Home
                  <div className='underbut'>
                  </div>
               </button>

            </div>

            <div className='containbut'>
               <button className='but' >
                  A propos
                  <div className='underbut'>
                  </div>
               </button>

            </div>

            <div className='containbut'>
               <button className='but' >
                  FAQ
                  <div className='underbut'>
                  </div>
               </button>

            </div>

            <div className='containbut'>
               <button className='but' >
                  Contact
                  <div className='underbut'>
                  </div>
               </button>

            </div>

         </div>


         <div className='butlistone' >

            <button onClick={() => navigate('/destinations')} className='booknow' >
               Nos produits
               <SendSharpIcon />
            </button>


            <select className='selectlang' >

               <option className='lang' value={'FR'}> Fr</option>
               <option className='lang' value={'ANG'}> Ang </option>

            </select>

            <button className='account' >

            </button>

         </div>

      </div>
   )
}

export default Headerbutton