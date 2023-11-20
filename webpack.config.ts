import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';

const config: webpack.Configuration = {
  // Your webpack configuration here
  plugins: [
    new Dotenv(),
    // other plugins...
  ],
};

export default config;
