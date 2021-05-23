import logo from './logo.svg';
import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className = "AppContent">
        <PersonCard firstName = "Jane" lastName = "Doe" age = {45} hairColor = "Black"/>
        <PersonCard firstName = "John" lastName = "Smith" age = {88} hairColor = "Brown"/>
        <PersonCard firstName = "Millard" lastName = "Fillmore" age = {50} hairColor = "Brown"/>
        <PersonCard firstName = "Maria" lastName = "Smith" age = {62} hairColor = "Brown"/>
      </div>
    </div>
  );
}

export default App;
