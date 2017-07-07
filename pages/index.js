import React, { Component } from 'react'
import Head from 'next/head'
import Form from '../components/form'
import Result from '../components/result'
import search from '../search'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      suma:'',
      data:[],
      showResult:false,
      exists: false,
    }

    this.handleGetResult = this.handleGetResult.bind(this);
  }
  handleGetResult(data,suma){
    this.setState({ data, suma, showResult:true, exists: search(suma,data) });
  }
  render(){
    return(
      <div>
        <Head>
          <title>Prueba Array</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous" />
        </Head>
        <div className="container">

            <div className="row justify-content-center">
                  <div className="col-md-6 text-center align-self-center">
                      <div className="titulo-padding">
                          <h1>Prueba Algoritmica</h1>
                      </div>
                  </div>
            </div>
            {/* FORMULARIO */}

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="">
                    <h2>Resultados</h2>
                    {
                      (this.state.showResult) && (
                        <div>
                          <Result exists={this.state.exists} data={this.state.data}/>
                        </div>
                      )
                    }
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                    <h2>Formulario</h2>
                </div>
                <Form setData={ this.handleGetResult } />
              </div>
            </div>

            <style jsx>{`
            .titulo-padding {
              padding:20px
            }
          `}</style>
        </div>
      </div>
    )
  }
}
