import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks , readTime }) => {
//   console.log(bookmarks);
  return (
    <div className="md:w-1/3">
      <h1 className="text-xl font-bold">Bookmarked : {bookmarks.length}</h1>
      <div>
      <div className='text-xl font-semibold ml-5 bg-green-500 text-white px-4 py-5 rounded-md'>
                <h1>Read Times : {readTime} min</h1>
            </div>
      </div>
      {
        bookmarks.map((bookmark,idx)=><Bookmark readTime={readTime} bookmark={bookmark} key={idx}></Bookmark>)
      }
      {}
    </div>
  );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readTime:PropTypes.number,
};
export default Bookmarks;
