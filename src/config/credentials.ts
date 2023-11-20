// credentials.ts
interface Credentials {
  project_id: string;
  region: string;
  app: string;
  credentials_path: string;
}

export const frontEndConfig: Credentials = {
  project_id: process.env.REACT_APP_PROJECT_ID || '',
  region: process.env.REACT_APP_REGION || '',
  app: process.env.REACT_APP_APP_NAME || '',
  credentials_path: process.env.REACT_APP_CREDENTIALS_PATH || '',
};
