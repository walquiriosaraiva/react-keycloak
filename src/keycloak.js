import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  realm: process.env.REACT_APP_API_REALM,
  url: process.env.REACT_APP_API_URL,
  clientId: process.env.REACT_APP_API_CLIENT_ID,
});

export default keycloak;
