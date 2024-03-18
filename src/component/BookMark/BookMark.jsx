import PropTypes from 'prop-types';
const BookMark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div className='bg-white mt-4 rounded-lg  font-semibold p-5'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.object.isRequired
}
export default BookMark;