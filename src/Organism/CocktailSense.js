const CocktailSense = (props) => (
    <ul>
    {props.sense.split(' ').map((text, index) => (
        <li key={index}>{text}</li>
    ))}  
</ul>
)

export default CocktailSense;