import React , {useState , useEffect} from 'react'
import { isMenuAvailable } from '../redux/menuStateSlice'
import {useSelector , useDispatch} from 'react-redux'



function Menu() {


    const myStates = useSelector(state => state.menuState.value[0]);
    const [menuDisplayState , setState] = useState('Menuburger');

    useEffect(()=>{
        if(myStates === true){
            setState('menuburgeractive')
        } else {
            setState('menuburgerinactive')
        }
    } , [myStates])


  return (
    <div className={menuDisplayState}>
      <button onClick={()=>{window.location.replace('/')}} className='butmenu'>
           Home
      </button>
      <button className='butmenu'>
           Rubriques
      </button>
      <button className='butmenu'>
           About us
      </button>
    </div>
  )
}

export default Menu