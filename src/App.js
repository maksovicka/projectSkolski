import './App.css';
import Form from './components/Form';
import List from './components/List/List'
import {useState} from 'react';

function App() {

  const [newInput, setNewInput] = useState([]);
  const newInputHandler = (newInput) => {
    setNewInput((prevState => [newInput, ...prevState]))
  }
  console.log(newInput)

  return (
    <div className="App">
      <List inputs={newInput} />
      <Form newInputHandler={newInputHandler} />
    </div>
  );
}

export default App;
