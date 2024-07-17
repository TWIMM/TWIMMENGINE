import React from 'react'
import Logo from '../img/sticky-logo.png'
import Logo2 from '../img/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import marker from '../img/icons/1.png'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp'
import Gallery from './Gallery'

function Footer() {
  return (
    <div className='Footer'>
     
      <div className='one'>
         <img className='logo2' style={{width:'30%', marginRight:'auto' }} src={Logo2}/>
         <p style={{textAlign: 'left', fontSize:'10px',color:'white', marginRight:'auto'}} className=''> 
         We believe brand interaction is key in communication. 
         Real innovations and a positive customer experience are the heart of successful communication.
        </p> 
        <FacebookIcon sx={{ marginRight:'auto' }}/>
        
      </div>

      <div className='one'>
        
         <h3 style={{textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
           Nous contacter
         </h3> 
         <div style={{display:'flex' ,  flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
            <img  style={{width:'10px', marginRight:'auto' }} src={marker}/>
            <p style={{ fontSize:'10px', color:'white'}} className=''> 
              Manama Tower, Badda Link Road, Badda Dhaka, Bangladesh
            </p> 
         </div>

          <div style={{display:'flex' ,  flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
            <EmailIcon sx={{color:"rgba(53, 243, 202, 0.99) " , width:'16px'}}/>
            <p style={{ fontSize:'14px', color:'white', }} className=''> 
              travelpoint@gmail.com
            </p> 
         </div>  

         <div style={{display:'flex' , flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
            <LocalPhoneSharpIcon sx={{color:"rgba(53, 243, 202, 0.99) " , width:'16px'}}/>
            <p style={{ fontSize:'14px', color:'white', }} className=''> 
              +229 97988765
            </p> 
         </div>  

      </div>


      <div   className='onespec'>
         
         <h3 style={{textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
           Pages
         </h3> 
         
         <div style={{display:'flex' , width:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className='pages'> 
             <p style={{ fontSize:'15px', color:'white'}} className=''> 
                Home
            </p> 
         </div>
         <div style={{display:'flex' , width:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
             <p style={{ fontSize:'15px', color:'white'}} className='pages'> 
                About us
            </p> 
         </div>
         <div style={{display:'flex' , width:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
             <p style={{ fontSize:'15px', color:'white'}} className='pages'> 
                Tours
            </p> 
         </div>
         <div style={{display:'flex' , width:'100%', flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' , textAlign: 'left', color:'white', marginRight:'auto'}} className=''> 
             <p style={{ fontSize:'15px', color:'white'}} className='pages'> 
                Destinations
            </p> 
         </div>

      </div>

      <div  style={{width:'30%'}} className='one'> 
        <Gallery/> 
      </div>   

      



    </div>
  )
}

export default Footer