import MaterialHeader from './Organism/MaterialHeader';

const Material = (props) => (
    <div className='material-container' style={{backgroundImage: `url(${props.image})`}}>
        <MaterialHeader head={props.head}/>
    </div>
);

export default Material;