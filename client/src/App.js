import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Form from './components/Form'


const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:6969/graphql"
  })
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Form />
      </div>
    </ApolloProvider>
  );
}

export default App;
