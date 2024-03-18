import PropTypes from 'prop-types';
const BookMark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.object.isRequired
}
export default BookMark;