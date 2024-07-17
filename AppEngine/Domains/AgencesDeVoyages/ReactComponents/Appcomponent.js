import React , {useState , useEffect} from 'react'
import Acceuil from './Components/Acceuil'
import AccueilMobile from './Mobilecomponents/AccueilMobile';

function Appcomponent() {

    const [windowSize , setSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    const handleResize =()=> {
        setSize({
            width:window.innerWidth,
            height:window.innerHeight
        })

        console.log(windowSize)
    }

    useEffect(()=> {
        window.addEventListener('resize' , handleResize)
    } , [])

    if(windowSize.width >= 1250){
        return   <Acceuil/>
    } else {
        return   <AccueilMobile/>
    }

 
}

export default Appcomponent