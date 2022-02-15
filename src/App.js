import { BookProvider } from "./context/BookContext";
import Pages from './pages';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


function App() {
  const client = new ApolloClient({
    uri: 'https://quidax-feec-graphql.herokuapp.com/graphql',
  });

  return (
     <ApolloProvider client={client}>
      <BookProvider>
        <Pages />
      </BookProvider>
      </ApolloProvider>
  );
}

export default App;
