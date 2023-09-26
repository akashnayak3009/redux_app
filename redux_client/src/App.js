
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App() {
  const appStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: '#f0f0f0',
  };

  const headingStyle = {
    color: '#333',
  };

  return (
    <div className="App" style={appStyle}>
      <h4 style={headingStyle}>Redux App</h4>
      <h3 style={headingStyle}>Current Amount:</h3>
      <h3 style={headingStyle}>Total Bonus:</h3>
        <div style={{display:'flex', marginLeft:"350px"}}>
        <Account />
      <Bonus />
        </div>
    </div>
  );
}

export default App;
