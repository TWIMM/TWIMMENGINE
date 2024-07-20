import React, { useState, useEffect } from 'react'
import Acceuil from './Components/Acceuil'
import AccueilMobile from './Mobilecomponents/AccueilMobile';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../JSGetterService/JSGetterSliceForYourRedux';

function Appcomponent() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.items);
    const status = useSelector((state) => state.data.status);
    const error = useSelector((state) => state.data.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchData("tickets"));
        } else {
            console.log(data);
        }
    }, [status, dispatch]);
    const [windowSize, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        })

        console.log(windowSize)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    if (windowSize.width >= 1250) {
        return <Acceuil />
    } else {
        return <AccueilMobile />
    }


}

export default Appcomponent