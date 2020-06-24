import React, { Component } from 'react';
import Cabeza from '../components/head';
import Graph from '../components/Graph';
import '../components/sass/head.sass';


class ObserveDolar extends Component {
    BaseURL = 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar/';
    apiKey = '9c84db4d447c80c74961a72245371245cb7ac15f'
    //periodo/2019/12/dias_i/21/2020/3/dias_f/07?
    state = { 
        Data: [],
        isLoading: true
     }

     getDolars = async (inital, final) => {
         fetch(this.BaseURL + '' + '?apikey=' + this.apiKey)
     }

    render() { 
        return (
            <div className="container">
                <Cabeza /><br></br>
                <Graph />
            </div>
         );
    }
}
 
export default ObserveDolar;