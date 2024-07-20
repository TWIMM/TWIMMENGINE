import React, { useState, useEffect } from 'react'
import { isMenuAvailable } from '../redux/menuStateSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';



function Menu() {


  const myStates = useSelector(state => state.menuState.value[0]);
  const [menuDisplayState, setState] = useState('Menuburger');
  const navigate = useNavigate();

  useEffect(() => {
    if (myStates === true) {
      setState('menuburgeractive')
    } else {
      setState('menuburgerinactive')
    }
  }, [myStates])


  return (
    <div className={menuDisplayState}>
      <button onClick={() => navigate('/')} className='butmenu'>
        Home
      </button>
      <button onClick={() => navigate('/destinations')} className='butmenu'>
        Destinations
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