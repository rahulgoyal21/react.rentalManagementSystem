import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Categories from './pages/Categories';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <header className='App-header'>
            <Header />
          </header>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/categories/:brandId' component={Categories} />
          </Switch>
        </Router>
        <footer className='App-footer'>Goyal</footer>
      </div>
    </Provider>
  );
};

export default App;
