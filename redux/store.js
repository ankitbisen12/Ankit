import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './reducers/modeSlice';

const store = configureStore({
    reducer:{
        mode: modeReducer
    }
});

export default store;