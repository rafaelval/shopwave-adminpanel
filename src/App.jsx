
import { useAuth0 } from '@auth0/auth0-react';
import styles from './App.module.css'
import { LoginAdvice } from './components/LoginAdvice/LoginAdvice';
import { ControlPanel } from './components/ControlPanel/ControlPanel';

function App() {
  const {isAuthenticated,isLoading} = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.App}>
        {isAuthenticated ? <ControlPanel/> : <LoginAdvice/>}
    </div>
  );
}

export default App;
