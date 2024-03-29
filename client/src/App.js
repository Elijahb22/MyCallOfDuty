import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Footer from './components/footer';
import Signup from './pages/signUp';
import Apost from './pages/onepost';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header/>
        <div className="container">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/post/:id" component={Apost} />
          </Switch>
        </div>
      <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
