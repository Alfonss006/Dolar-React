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
            
            <input 
            max={new Date().toISOString().split("T")[0]} 
            value={this.props.startDate} 
            onChange={this.props.handleChange} 
            type="date"
            name="start"
            />
            
            <span>Hasta</span>
            
            <input 
            max={new Date().toISOString().split("T")[0]} 
            value={this.props.startDate} 
            onChange={this.props.handleChange} 
            type="date"
            name="end"
            min={this.props.start}
            ></input>

            <input 
            className="head_buttom" 
            onClick={this.props.getDolars} 
            type="button" 
            value="Ver Valor"
            />
       </div>);
    }
}
 
export default Cabeza;