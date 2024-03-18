import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-4xl">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id} bookMark={bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array
}

export default BookMarks;