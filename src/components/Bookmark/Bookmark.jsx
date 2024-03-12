import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    console.log(bookmark)
    return (
        <div className='ml-5 mt-5'>
            
            <h1 className='text-2xl px-5 py-4 rounded-xl mt-4 bg-gray-200'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    bookmark : PropTypes.object,
    
}
export default Bookmark;