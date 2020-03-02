import React from 'react';
import {Provider} from "react-redux"
import store from "./components/store"
import Pizacontainer from './components/pizacontainer';
import Hookscontainer from './components/hookscontainer';
import Render from './components/test';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Render/>
    <p>front end react developer</p>
    
      <Pizacontainer/>
      <Hookscontainer/>
     
  



    
  </div></Provider>
    
  );
}

export default App;
