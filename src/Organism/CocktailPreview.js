const CocktailPreview = (props) => (
    <div className='cocktail-preview' style={{backgroundImage: `url(${props.source})`}}/>
);

export default CocktailPreview;