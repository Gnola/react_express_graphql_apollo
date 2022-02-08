# [GraphQL with React Tutorial](https://www.youtube.com/watch?v=YyUWW04HwKY&t=709s)

## Tech Used
- React
- Express
- GraphQL
- Apollo

## Set Up Server
- `npm init`

### Install Dependencies
- `npm i express`
- `npm i graphql`
- `npm i express-graphql`
- `npm i -D nodemon`
- `npm i cors`

### Edit `package.json`
```json
/* Change this */
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
/* To this */
"scripts": {
  "dev": "nodemon server.js"
},
```

### Start Server
- `npm run dev`

## Set Up React
- `npx create-react-app client`

In **/client**
- `npm i @apollo/client`
- `npm i graphql`

### Start Server
- `npm start`
---

### Resources
