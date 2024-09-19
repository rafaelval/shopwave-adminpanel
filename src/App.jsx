import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
      </header>
    </div>
  );
}

export default App;
