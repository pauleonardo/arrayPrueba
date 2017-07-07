export default (props) => (
  <div>
      <button
        type={props.type}
        className={`btn btn-${props.style}`}
        onClick={
          (props.type !== "submit") && props.action
        }
        >
          {props.text}</button>
  </div>
)
