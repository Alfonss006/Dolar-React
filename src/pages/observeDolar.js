import React, { Component } from 'react';
import Cabeza from '../components/head';
import Graph from '../components/Graph';
import '../components/sass/head.sass';


class ObserveDolar extends Component {
    BaseURL = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/';
    apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f';
    state = { 
        datalabels: [],
        data:[],
        isLoading: true,
        error: null,
        end: new Date().toISOString().split("T")[0],
        start: null,
        result: {
            Mensaje: null,
            Dolares: []
        }
     }

    getDolars = async () => {
         this.setState({ isLoading: true, result: {Mensaje: null} })
         try {
         await fetch(this.BaseURL + 'periodo/'
         + this.state.startYear + '/'
         + this.state.startMonth+ '/dias_i/'
         + this.state.startDay + '/'
         + this.state.endYear + '/'
         + this.state.endMonth + '/dias_f/'
         + this.state.endDay + '?formato=json&apikey=' 
         + this.apiKey)
         .then(result => result.json(),(error)=> {
            this.setState({isLoading:false, error: error})
         })
         .then(result => this.setState({result : result}), 
           (error)=> {
            this.setState({isLoading:false, error: error})
         })
         .catch (error => this.setState({isLoading:false, error: error}))
         }catch(e){}
         if(!this.state.result.Mensaje){
             this.setState({isLoading: false, datalabels : this.state.result.Dolares.map(item => item.Fecha), data: this.state.result.Dolares.map(item => parseFloat(item.Valor)) })
         }
         this.render();
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

        if(this.state.result.Mensaje){
            console.dir(this.state.error)
            return(
                <div className="container">
                    <Cabeza/>
                   <p> error {this.state.result.Mensaje}</p>
                </div>
            )
        }
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
}
 
export default ObserveDolar;