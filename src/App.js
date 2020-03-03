import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard';


function Farmer(props) {
  return (
    <Button
      variant="success"
      onClick={() => props.onClick(props.type)}
    >
      {props.type}
    </Button>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dashboard />
      </div>
    )
  }
}

export default App;
