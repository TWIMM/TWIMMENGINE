import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'



function Gallery() {
  return (
    
    <div style={{width:'100%'}} className='morestorygall'>
                
        <div style={{height:'150px' , width:'200px'}}  className='sto'>
            <button  className='booknow' >
                Voir plus
                <ArrowForwardIcon/> 
                </button> 
              
        </div>
        
        
        <div style={{height:'150px' , width:'200px'}}  className='sto'>
            <button className='booknow' >
                Voir plus
                <ArrowForwardIcon/> 
                </button> 
            
        </div>
        
          
        <div style={{height:'150px' , width:'200px'}}  className='sto'>
            <button className='booknow' >
                Voir plus
                <ArrowForwardIcon/> 
                </button> 
            
        </div>

           
        <div style={{height:'150px' , width:'200px'}}  className='sto'>
            <button className='booknow' >
                Voir plus
                <ArrowForwardIcon/> 
                </button> 
            
        </div>

        
    
    </div>
  )
}

export default Gallery