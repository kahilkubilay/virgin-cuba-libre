import Cocktail from './Organism/Cocktail';
import GetCocktail from './GetCocktail';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Cocktails from './utils/Cocktails';

const cocktailList = (Cocktails || []).map((cocktail, list) => {
    let sense = (cocktail.sense || []).join(' ');

    return <NavLink to={cocktail.id || ''} key={list}>
        <Cocktail source={cocktail.image} title={cocktail.name} sense={sense} id={cocktail.id}/>
    </NavLink>
});

const CocktailList = () => (
    <Router>
        <Switch>
        <Route path="/" exact>
            <div className='cocktails-list'>
                {cocktailList}
            </div>
          </Route>
          <Route path='/:id'>
            <GetCocktail/>
          </Route>
        </Switch>
    </Router>
);

export default CocktailList;    