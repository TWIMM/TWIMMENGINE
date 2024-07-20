import { configureStore } from "@reduxjs/toolkit";
import menuStateReducer from './menuStateSlice';
import JSGetterSliceForYourRedux from '../../../../JSGetterService/JSGetterSliceForYourRedux';
//must import JSGetterSliceForYourRedux to be abble to getcontroller dzta without rewriting extra fetch 
export default configureStore({
    reducer: {
        data: JSGetterSliceForYourRedux,
        menuState: menuStateReducer
    }
});