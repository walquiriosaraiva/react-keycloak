import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import keycloak from './keycloak';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

keycloak.init({ onLoad: 'check-sso' }).then((authenticated) => {
  if (authenticated) {
    console.log('Usuário autenticado');
    renderApp();  // Renderize o aplicativo somente após a autenticação bem-sucedida
  } else {
    console.log('Usuário não autenticado');
    console.log('Mensagem de erro:', keycloak);
    keycloak.login();
  }
});

serviceWorker.unregister();