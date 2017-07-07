export default (props) => (

<div>

  { (props.exists) && (
      <div className="alert alert-success" >
        <strong> Verdadero! </strong> Existe un par de numero que den esa suma.
      </div>
    )
  }
  { (!props.exists) && (
    <div className="alert alert-danger" role="alert">
      <strong> Falso! </strong> No se encuentrar en el array numeros que cuando se sumen den esa suma.
    </div>
    )
  }

  <div className="alert alert-info" role="alert">
    <strong>Numeros del array:</strong> [ { props.data.map( (num,index) => `${ (index !== 0) ? ',' : '' } ${num} ` )} ]
  </div>

</div>

)
