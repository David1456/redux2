import React from 'react';
import { BUY_PIZA } from './pizatype';
const initialState={
    numofpizas:2
}
const Pizareducer = (state=initialState,action) => {

    switch(action.type){
        case BUY_PIZA:return{
            ...state,
            numofpizas:state.numofpizas+2
        }

        default :return state
    }
    
}
 
export default Pizareducer;