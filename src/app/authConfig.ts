import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'http://127.0.0.1:8080/auth/realms/learn',
    redirectUri: window.location.origin,
    clientId: 'contact-client',
   // dummyClientSecret: '4f84acf5-0f55-4265-9e9d-97f8f2f1d54d',
    responseType: 'code',
    scope: 'openid roles',
    showDebugInformation: true,
    requireHttps: false,
    disablePKCE: true,
    tokenEndpoint : 'http://127.0.0.1:8080/auth/realms/learn/protocol/openid-connect/token',
    userinfoEndpoint:'http://127.0.0.1:8080/auth/realms/learn/protocol/openid-connect/userinfo'
  };
