import React from 'react';
class Render extends React.Component {
    state = { 
        counters:[{id:1,value:0},{id:2,value:2}]
     }
    render() { 
        return ( <div>
    <table>
        <tbody>
            {this.state.counters.map(m=><tr><td>{m.value}</td>
            <td>{m.value}</td></tr>)}
        </tbody>
        
    </table>

        </div> );
    }
}
 
export default Render;