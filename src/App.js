import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import AppLayout from './pages/AppLayout';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/app'>
                <RequireAuth>
                  <AppLayout />
                </RequireAuth>
              </Route>
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
            </Switch>
          </header>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
