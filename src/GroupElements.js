import Header from './Header';
import Tags from './Tags';
import CocktailList from './CocktailList';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Get(params) {
  return (
    <div className='app'>
        <a href='/' to='/'>
            <Header />
        </a>
    
        <Tags />
        <CocktailList />
    </div>
  );
}


const GroupElements = () => (
    <Router>
      <Route path="/" render={() => <Get/>} />
    </Router>
);

export default GroupElements;
