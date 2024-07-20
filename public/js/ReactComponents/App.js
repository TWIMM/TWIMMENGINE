import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import Acceuil from './Components/Acceuil';
import Appcomponent from './Appcomponent';
import Destinations from './Mobilecomponents/Destinations'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../JSGetterService/JSGetterSliceForYourRedux';


function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    } else {
      console.log(data);
    }
  }, [status, dispatch]);

  return (

    <Provider store={store}>
      <Routes>
        <Route path='/' element={< Appcomponent />} />
        <Route path='/destinations' element={< Destinations />} />

      </Routes>
    </Provider>

  );
}

export default App;
