import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import { buyPiza } from './pizaactions';
const Hookscontainer = () => {
    const numofpizas=useSelector(state=>state.numofpizas)
    
    const dispatch=useDispatch()
    return (<div>
        <center><h1>num of pizas{numofpizas}</h1>
        <button onClick={()=>dispatch(buyPiza())}>Buyhook</button></center>
        
    </div>  );
}
 
export default Hookscontainer;