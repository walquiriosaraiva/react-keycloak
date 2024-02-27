# react-keycloak

## criar arquivo .env
```bash
cp .env.example .env
```

## alterar os valores das variáveis abaixo para seu projeto conforme o seu realm e client do keycloak do projeto: https://github.com/walquiriosaraiva/keycloak
```
REACT_APP_API_REALM='app-react'
REACT_APP_API_URL='http://localhost:8080/auth'
REACT_APP_API_CLIENT_ID='react'
```