import logo from './logo.svg';
import './App.css';
import keycloak from './keycloak';

function App() {

  const sair = () =>{
    keycloak.logout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá {keycloak.tokenParsed.given_name} {keycloak.tokenParsed.family_name}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="App-link" style={{marginTop: '0.5%'}} type='button' onClick={sair}>
          <div className="App-text">Sair</div>
        </button>
      </header>      
    </div>
  );
}

export default App;
