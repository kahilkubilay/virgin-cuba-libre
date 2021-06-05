import MaterialItem from './MaterialItem';

const MaterialList = (props) => (
    <ul className='material-list'>
        {(props.materials || []).map((material, keys) => (
            <MaterialItem item={material} key={keys}/>
        ))}
    </ul>
);

export default MaterialList;