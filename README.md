# Mars Mission

An educational website for inspiring interest in Mars.

You can view it at https://techswitch-mars-mission.herokuapp.com/
(or our staging environment at https://techswitch-mars-mission-stage.herokuapp.com/)

## Setup
The app is a react application built using Create React App.

You should be able to start it using 
`npm start`

And run the tests using
`npm test`

### Environment Variables
We use `.env` files to manage our environment variables. This should live in the root of your application.
To set this up:
1. Your API for the NASA API (obtained from https://api.nasa.gov/)
2. Create a .env file in your root folder with the following content:
        `export REACT_APP_NASA_API_KEY: "Your API Key";`
4. Make sure ".env" tis listed in your .gitignore file.
5. Access your API key using `process.env.REACT_APP_NASA_API_KEY`


```