import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/header';
import Login from './components/login';
import Profile from './components/profile';
import Home from './components/home';
import Footer from './components/footer';
import Signup from './components/signUp'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Header></Header>
          <Switch>
          <Route exact path="/" components={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/signup" component={Signup} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
