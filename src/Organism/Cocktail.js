import CocktailPreview from './CocktailPreview';
import CocktailTitle from './CocktailsTitle';
import CocktailSense from './CocktailSense';

const Cocktail = (props) => (
    <div className='cocktail'>
        <CocktailPreview source={props.source} title={props.title} />
        <CocktailTitle title={props.title} />
        <CocktailSense sense={props.sense} />
    </div>
);

export default Cocktail;
