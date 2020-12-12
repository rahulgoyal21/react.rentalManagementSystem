import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Header';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <Header />
        </header>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
        </Router>
        <footer className='App-footer'>Goyal</footer>
      </div>
    </Provider>
  );
};

export default App;
