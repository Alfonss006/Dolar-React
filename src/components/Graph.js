import React, { Component } from 'react';
import Chart from 'chart.js';
import './sass/Graph.sass'

class Graph extends Component {
    
    componentDidMount(){
        this.createChart()
    }
    
    render() { 
        return ( 
        <div className="Graph_Chart">
            <p>Valor minimo : </p>
            <p>Valor maximo : </p>
            <p>Valor Promedio : </p>
            <canvas id="dolarChart"></canvas>
        </div> );
    }

    createChart = async () => {
       var ctx = document.getElementById('dolarChart').getContext('2d');
       var chart = new Chart( ctx ,
        {
            type: 'line',
            data: {
                labels: ['Dia x', 'Dia x+1', 'Dia x+2', 'Dia x+3', 'Dia x+4', 'Dia x+5'],
                datasets: [{
                    label: 'Valor dolar',
                    data: [598.56, 602, 603, 597.3, 599, 601.03],
                    backgroundColor: [
                        'rgba(0, 186, 104, 1)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    }
                } 
            }
        }
       )
       }
}
 
export default Graph;