import React from 'react';
import { Component } from 'react';
import './sass/head.sass';

class Cabeza extends Component {
    
    handleClick = e => {
        console.log('button was clicked')
    }


    render() {  
        return (
        <div>
            <div>
                <h1> Valor del dolar hist&oacute;rico</h1>
            </div>
            <input type="date"></input>
                hasta
            <input type="date"></input>

            <input className="head_buttom" onClick={this.handleClick} type="button" value="Ver Valor"/>
       </div>);
    }
}
 
export default Cabeza;