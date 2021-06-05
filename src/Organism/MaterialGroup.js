import Material from '../Material';
import MaterialList from './MaterialList';
import MaterialRecipe from './MaterialRecipe';
import Cocktails from '../utils/Cocktails'
import React from 'react';

class MaterialGroup extends React.Component {
render() { 
    var data = Cocktails.filter((data) => data.id === document.location.pathname.split('/').pop());
    var getData = data[0] || {};

    let head = getData.name || '';
    let image = getData.image || '';
    let materials = getData.materials || [];
    let reciper = getData.reciper || '';

    return(
        <div className='materials'>
            <Material head={head} image={image}/>
            <MaterialList materials={materials}/>
            <MaterialRecipe recipe={reciper}/>
        </div>
      );
  }
    

}

export default MaterialGroup;


