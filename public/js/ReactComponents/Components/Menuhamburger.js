import React , {useState , useEffect} from 'react'
import { isMenuAvailable } from '../redux/menuStateSlice'
import {useSelector , useDispatch} from 'react-redux'



function Menuhamburger() {

     const [menuactive , setMenuActive] = useState('menu')
     const [isVisible , setIsVisible]   = useState(false)

     const dispatch = useDispatch();
     const myStates = useSelector(state => state.menuState.value);

     useEffect(()=> {
        if(isVisible === true){
          setMenuActive('menuactive')
          dispatch(isMenuAvailable(true))
        } else if(isVisible === false){
          setMenuActive('menu')
          dispatch(isMenuAvailable(false))
        }
     } , [isVisible])
     

  return (
    <div onClick={()=>  {setIsVisible(!isVisible)}} className={menuactive}>
        <div className='menuone'>
       
        </div>

        <div className='menutwo'>
      
      
        </div>

        <div className='menuthree'>
      
      
        </div>

    </div>
  )
}

export default Menuhamburger