import Todo from './components/Todo';
import { useState } from 'react';
import Allmet from './pages/AllMeetUp'

function App() {

const [hideTodo, setHideTodo] = useState(true);

function hideHandler() {
  setHideTodo(false)
}

  return (
    <div>
      <h1>My Todos</h1>    
      {hideTodo ? <Todo text='Learn React' onClick={hideHandler} />: null}
      <Todo text= 'Master React' />  
      <Todo text='Explore React' /> 
      <button onClick={hideHandler}>Hide</button>    
      <Allmet />
  
     
    </div>
  );
}

export default App;
