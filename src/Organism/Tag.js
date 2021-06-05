import Awesome from './Awesome';
import TagTitle from './TagTitle';

const Tag = (props) => (
    <div className='tag'>
        <Awesome symbol={props.awesome}/>
        <TagTitle title={props.title}/>
    </div>
);

export default Tag;