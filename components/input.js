export default (props) => (
  <div className="form-group">
      <label htmlFor="prueba"> {props.name} </label>
      <input
        id="prueba"
        className="form-control"
        type={`${props.type}`}
        placeholder={`${props.name}`}
        onChange={ (res) => {props.change( parseInt( res.target.value ) )} } 
      />
      {(props.small)&&(<small className="form-text text-muted"> {`${props.small}`} </small>)}
  </div>
)
