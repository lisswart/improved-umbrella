import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../App.css';
import Login from './Login';
import Signup from './Signup';
import Bookshelf from './Bookshelf';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("/me")
          .then(response => {
              if (response.ok) {
                  response.json().then(user => {
                      setUser(user);
                      setLoading(false);
                  });
              } else {
                  setLoading(false);
              }
          })
  }, []);

  function handleLogin(user) {
      setUser(user);
  }

  function handleLogout() {
      setUser(null);
  }

  return (
      <div id="page-container">
        <div id="content-wrapper">
          <Header user={user} onLogout={handleLogout} />
          <main role="main">
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route exact path="/login">
                      {
                          loading 
                          ? "loading..."
                          : user 
                          ? <Redirect to="/books"></Redirect> 
                          : <Login onLogin={handleLogin} />
                      }
                  </Route>
                  <Route exact path="/signup">
                      {
                          loading 
                          ? "loading..."
                          : user 
                          ? <Redirect to="/books"></Redirect> 
                          : <Signup onLogin={handleLogin} />
                      }
                  </Route>
                  <Route exact path="/books">
                      {
                          user 
                          ? <Bookshelf user={user} /> 
                          : <Redirect to="/login"></Redirect>
                      }
                  </Route>
              </Switch>
          </main>
          <Footer />
        </div>
      </div>
  );
};

export default App;