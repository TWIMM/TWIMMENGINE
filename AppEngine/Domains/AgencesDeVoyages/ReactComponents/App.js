import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import Acceuil from './Components/Acceuil';
import Appcomponent from './Appcomponent';
import Destinations from './Mobilecomponents/Destinations'


function App() {

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
