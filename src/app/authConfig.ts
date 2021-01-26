import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/learn',
    redirectUri: window.location.origin + '/index.html',
    clientId: 'local-keycloak',
    dummyClientSecret: '4f84acf5-0f55-4265-9e9d-97f8f2f1d54d',
    responseType: 'code',
    scope: 'openid roles',
    showDebugInformation: true,
    disablePKCE: true

  };
