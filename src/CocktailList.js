import Cocktail from './Organism/Cocktail';
import GetCocktail from './GetCocktail';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// import Cocktails from './utils/Cocktails';
// import React from 'react';

import React, { useEffect, useState } from 'react';


const CocktailList = () => {
    const [cocktails, setCocktail] = useState({});
    let cocktailList = <p>Fetching data..</p>
    

    useEffect(() => {
        fetch('https://api.airtable.com/v0/' + process.env.REACT_APP_AIRTABLE_BASE_ID + '/' + 
            process.env.REACT_APP_AIRTABLE_TABLE_NAME + '?api_key=' + process.env.REACT_APP_AIRTABLE_API_KEY)
        .then((res) => res.json())
        .then((data) => {
            let allCocktail = [];

            allCocktail = data.records.map((detail, index) => {
                let cocktail = detail.fields || {};
        
                return {
                    id: cocktail.id || '',
                    name: cocktail.name || '',
                    image: (cocktail.images[0] || '').url || '',
                    materials: cocktail.materials || '',
                    reciper: cocktail.reciper || '',
                    sense: cocktail.sense || [],
                }
            });

            setCocktail(allCocktail)

            console.log('Data:::: ', allCocktail);
        })
        .catch((error) => {
            console.log('ERR:::: ', error);
        });


    }, []);

 
    cocktailList = cocktails.length > 0 ?  (cocktails || []).map((cocktail, list) => {
        let sense = (cocktail.sense || []).join(' ');
    
        return <NavLink to={(cocktail.id || '').toString()} key={list}>
            <Cocktail source={cocktail.image} title={cocktail.name} sense={sense} id={cocktail.id} />
            </NavLink>
            }) :         
    <p>Get Waiting fetch Template</p>

    return (
        <div>
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
      </div>
      );
    }


export default CocktailList;

