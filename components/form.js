import React, { Component } from 'react'
import Input from './input'
import Button from './button'

class Formulario extends Component{
  constructor(){
    super()

    this.state = {
      arrayData:[''],
      suma:''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(ev){

    ev.preventDefault();
    let arrNum = [];

    this.state.arrayData.forEach( (num) => {
      if ( typeof num === 'number'){
        arrNum.push(num)
      }
    })

    this.props.setData(arrNum,parseInt(this.state.suma))

  }
  handleAdd(){

      this.state.arrayData.push('');
      this.setState({ arrayData: this.state.arrayData })

  }
  handleDelete(){

    this.state.arrayData.pop();
    this.setState({ arrayData: this.state.arrayData })

  }
  handleChange(index,value){

    this.state.arrayData[index] = value
    this.setState({
      arrayData: this.state.arrayData
    })

  }
  render(){

    return(
      <div>

        <form onSubmit={ this.handleSubmit }>

            <Input
              type="number"
              name="Suma"
              small=" Recuerda que suma debe ser tipo numero "
              change={ (res) => this.setState({ suma: res })}
            />

            <h4>Array</h4>

            <div className="inputArray">
            {
              this.state.arrayData.map( (element, index) => {
                return ( <Input
                            name={`Posicion ${index}`}
                            type='number'
                            key={`key-${index}`}
                            change= { (value) => this.handleChange(index,value) }
                          />
                        )
              })
            }
            </div>

            <div className="row justify-content-around ">
              <Button
                type="submit"
                style="primary"
                text="Enviar"
              />
              <Button
                type="button"
                style="success"
                text="Agregar 1"
                action={ () => this.handleAdd() }
              />
              <Button
                type="button"
                style="danger"
                text="Quitar 1"
                action={ () => this.handleDelete()}
              />
            </div>

        </form>
        <style jsx>{`
        .inputArray {
          height:300px;
          max-height: 300px;
          overflow:auto;
        }
      `}</style>

      </div>
    )
  }
}

export default Formulario;
