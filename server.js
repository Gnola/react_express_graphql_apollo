const express = require('express');
const schema = require('./Schemas/index.js')
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = 6969

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})
