import React, { Component } from 'react';
import Cabeza from '../components/head';
import Graph from '../components/Graph';
import '../components/sass/head.sass';


class ObserveDolar extends Component {
    BaseURL = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/';
    apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f'
    //periodo/2019/12/dias_i/21/2020/3/dias_f/07?
    state = { 
        datalabels: [],
        data:[],
        isLoading: true,
        error: null
     }
     componentDidMount(){
         this.getDolars()
     }

     getDolars = async () => {
         this.setState({ isLoading: true, error: null })
         
         await fetch(this.BaseURL + 'periodo/2020/5/dias_i/1/2020/6/dias_f/08' + '?formato=json&apikey=' + this.apiKey)
         .then(result => result.json())
         .then( result => this.setState({isLoading: false, datalabels : result.Dolares.map(item => item.Fecha), data: result.Dolares.map(item => parseFloat(item.Valor)) }))
         .catch(error => this.setState({isLoading:false, error: error}))
        
        }

    render() { 
        return (
            <div className="container">
                <Cabeza /><br></br>
                <Graph datalabels={this.state.datalabels} data={this.state.data}/>
            </div>
         );
    }
}
 
export default ObserveDolar;