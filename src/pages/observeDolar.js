import React, { Component } from 'react';
import Cabeza from '../components/head';
import Graph from '../components/Graph';
import '../components/sass/head.sass';
import axios from 'axios';

class ObserveDolar extends Component {
    BaseURL = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/';
    apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f';
    state = { 
        datalabels: [],
        data:[],
        isLoading: true,
        Error: null,
        end: new Date().toISOString().split("T")[0],
        start: null,
        Mensaje: null
     }

    getDolars = async () => {
        console.log("hay click")
         this.setState({ isLoading: true, Error: null, Mensaje: null })
         axios.get(this.BaseURL + 'periodo/'
         + this.state.startYear + '/'
         + this.state.startMonth+ '/dias_i/'
         + this.state.startDay + '/'
         + this.state.endYear + '/'
         + this.state.endMonth + '/dias_f/'
         + this.state.endDay + '?formato=json&apikey=' 
         + this.apiKey).then(res => this.setState({isLoading: false, datalabels : res.data.Dolares.map(item => item.Fecha), data: res.data.Dolares.map(item => parseFloat(item.Valor)) })
         //, error => this.setState( {error: error.response.status, Mensaje: error.response.data.Mensaje }))
         ).catch(error => {this.setState( { Mensaje: error.response.data.Mensaje, Error: error.response.status })})
    }

    handleChange = e => {    
        let date = new Date(e.target.value+"T00:00:00");
        this.setState({
            [e.target.name + "Day"] : date.getDate(),
            [e.target.name + "Year"] : date.getFullYear(),
            [e.target.name + "Month"] : date.getMonth(),
            [e.target.name] : date.toISOString().split("T")[0]
        });
      };    

    render() { 

        if(this.state.Error){
            return(
                <div className="container">
                    <Cabeza
                    end={this.state.Date} 
                    handleChange={this.handleChange}
                    getDolars={this.getDolars}
                    start={this.state.start}/>
                   <p> error {this.state.Mensaje}</p>
                </div>
            )
        }
        if(this.state.data && !this.state.isLoading){
        return (
            <div className="container">
                
                <Cabeza 
                end={this.state.Date} 
                handleChange={this.handleChange}
                getDolars={this.getDolars}
                start={this.state.start}
                />
                
                <br></br>
                
                <Graph 
                datalabels={this.state.datalabels} 
                data={this.state.data}/>
            
            </div>
         );
        }
        return (
            <div className="container">
                <Cabeza 
                end={this.state.Date} 
                handleChange={this.handleChange}
                getDolars={this.getDolars}
                start={this.state.start}
                />
            </div>
        )
    }
}
 
export default ObserveDolar;