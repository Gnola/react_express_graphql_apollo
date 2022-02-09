## Set Up Project

In **root directory**

```bash
  touch server.js
  npm init -y
```

### Install Dependencies

In **root directory**

```bash
  npm i express express-graphql graphql # Required
  npm i -D nodemon # Dev Dependency
  npm i cors # Might need
```

### Edit Files

#### `package.json`

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

---

## Set Up React

```bash
  npx create-react-app client
  cd client
```

### Install Dependencies

In **/client**

```bash
  npm i @apollo/client graphql # Required
```

---

### Run Locally

| Locatio  | Command        | Runs         | URL                             | Access   |
| :------- | :------------- | :----------- | :------------------------------ | :------- |
| /root    |  `npm run dev` | **Server**   | *http::/localhost/6969/graphql* | GraphiQL |
| /client  |  `npm start`   | **Frontend** | *http::/localhost/3000*         | Site     |
