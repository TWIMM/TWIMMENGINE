import React from 'react'
import '../CSS/searchcomponent.css'
import '../CSS/Carousel.css'
import logoLocation from '../img/icons/10.png'
import Timetable from '../img/timetable.png'
import travel from '../img/icons/9.png'

function SearchComponent() {
  return (
    <div className='searchcontainer'>
        <div className='containinput'>
               <img src={logoLocation} className='imgSearch1'/>
               <input className='input' type='text' placeholder='Destination'/>
               <div className='underinput'>
               </div>
                     
        </div>


        <div className='containinput'>
               <img src={Timetable} className='imgSearch2' />
               <input className='input' type='text' placeholder='Ville de départ'/>
               <div className='underinput'>
               </div>
                     
        </div>
            
        {/* 

                Date picker
                <input type='text' placeholder='Destination'/>
        */}

        <div className='containinput'>

            <img src={travel} className='imgSearch3'/>
            <select   className='selecttype' >
            
                <option className='lang' value={''}> Type de voyage</option>    
                <option className='lang' value={'FR'}> Voyage d'affaire </option>         
                <option  className='lang' value={'ANG'}> Vacances  </option>         
                <option  className='lang' value={'ANG'}> Week-end  </option>  
                <option  className='lang' value={'ANG'}> Event  </option>      

            </select>
            <div className='underinput'>
            </div>
        </div>
 
        <button className='booknow' >
            Search
        </button>

    </div>
  )
}

export default SearchComponent