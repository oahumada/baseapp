/*
    Defines the API route we are using.
*/
var api_url = '';

switch( process.env.NODE_ENV ){
  case 'development':
    api_url = 'https://127.0.0.1:8000/api';
  break;
  case 'production':
    api_url = 'https://vitamsalud.com/sysapp/api';
  break;
}

export const VITAMAPP_CONFIG = {
  API_URL: api_url,
}