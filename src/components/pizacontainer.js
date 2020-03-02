import React from 'react';
import {buyPiza} from "./pizaactions"
import {connect} from "react-redux"
const Pizacontainer = (props) => {
    return (<div>
        <center><h1>num of pizas{props.numofpizas}</h1>
        <button onClick={props.buyPiza}>buy pizas</button></center>
        

    </div>  );
}
 
const mapStateToProps=state=>{
    return {
        numofpizas:state.numofpizas
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyPiza:()=>dispatch(buyPiza())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Pizacontainer);