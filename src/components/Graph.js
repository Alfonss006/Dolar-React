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
            <p>Valor minimo : {Math.min(...this.props.data)}</p>
            <p>Valor maximo : {Math.max(...this.props.data)}</p>
            <p>Valor Promedio : {Math.round(
                this.props.data.reduce((prev , current) => current += prev)/ this.props.data.length
                )}</p>
            <canvas id="dolarChart"></canvas>
        </div> );
    }

    createChart = async () => {
       var ctx = document.getElementById('dolarChart').getContext('2d');
       var chart = new Chart( ctx ,
        {
            type: 'line',
            data: {
                labels: this.props.datalabels,
                datasets: [{
                    label: 'Valor dolar',
                    data: this.props.data,
                    backgroundColor: [
                        'rgba(0, 186, 104, 1)'
                    ],
                    borderColor: [
                        'rgba(9, 188, 9, 1)'
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