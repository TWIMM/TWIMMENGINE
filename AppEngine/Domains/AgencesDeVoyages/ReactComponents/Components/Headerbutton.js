import React, { useEffect, useState } from 'react'
import '../CSS/Carousel.css'
import Logo from '../img/sticky-logo.png'
import Logo2 from '../img/logo.png'
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
         <img className='logo1' style={{ width: '10%' }} src={Logo} />
         <img className='logo2' style={{ width: '10%' }} src={Logo2} />

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
                  About Us
                  <div className='underbut'>
                  </div>
               </button>

            </div>

            <div className='containbut'>
               <button className='but' >
                  Rubriques
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
               Destinations
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