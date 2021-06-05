const CocktailPreview = (props) => (
    // <img src={props.source} alt={props.title + ' recipes'} title={props.title + ' recipes'} style={{backgroundImage: `url(${props.source})`}}/>
    <div className='cocktail-preview' style={{backgroundImage: `url(${props.source})`}}/>
);

export default CocktailPreview;