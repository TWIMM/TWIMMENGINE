import React from 'react'
import Newsletters from '../img/others/1.png'
import EmailIcon from '@mui/icons-material/Email'


function Newsletter() {
  return (
    <div className='containnewsletter'>
        
        <img className='newscover' style={{  cursor: 'pointer'}} src={Newsletters} />
        <div className='newscol2'>
        
        </div>

        <div className='newscol3'>
          <div>   
            <h1 className='titretitre' style={{fontSize:'40px', fontWeight:'1000'}}>   
                Newsletter
            </h1>
            <p style={{ color: 'rgba(51, 51, 51, 0.7)'}}>   
                Sign up to receive the best offers
            </p>
          </div>

          <div className='inputnews'>   
             <div>  <EmailIcon sx={{ top:'50%', width:'26px' , color:' rgba(126, 125, 122, 0.5)'}}/> </div>
             <input placeholder='EMAIL' className='inputmynews' type='text'/>
             <button style={{borderRadius:'0px'}} className='booknow' >
                Subscribe
             </button>
   
          </div>

          
        </div>
    </div>
  )
}

export default Newsletter