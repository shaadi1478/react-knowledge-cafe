import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] rounded-lg p-5">
            <div>
                <h3 className="text-3xl">Spent time on read : {readingTime}<span> min</span></h3>
            </div>
            <h2 className="text-4xl">Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <BookMark key={idx} bookMark={bookmark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;