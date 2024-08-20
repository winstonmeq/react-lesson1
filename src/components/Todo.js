

function Todo(props) {


    function buttonClick() {
        console.log('click me')
        console.log(props.text)
      }

      
    return (
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={buttonClick}>Delete</button>
        </div>
      </div>
    )

}

export default Todo;