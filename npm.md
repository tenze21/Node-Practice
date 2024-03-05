## NPM notes 
- Nodemon was installed with the command `npm i nodemon -D`. This installs nodemon as a dev dependency i.e., it is only used for development.
- Nodemon keeps tract of our code and run it automatically so that we don't have to do `node app.js` repeatedly.
- `npm init -y` initializes npm with all the values set to default.

  ```"scripts": {
    "start":"node app.js",
    "dev":"nodemon app.js"
  },```
- The above code is from package.json you can use this to set shortcuts. For example Now I can do `npm start` instead of `node app.js` and `npm run dev` instead of `npm run nodemon app.js`

- `npm uninstall package-name` uninstalls the package.

### Package-lock.json
- This file keeps tract of the package versions we used for our project so that someone else using our code doesn't install a different version of the packages, which could lead to petentials break downs in the application.