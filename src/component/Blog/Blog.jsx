import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookMark, handlemarkAsRead}) => {
    const {title, cover, author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className=''>
            <img className='w-[845px] h-[450px] mt-10 rounded-2xl'  src={cover} alt="" />
            <div className='flex justify-between items-center space-y-10 w-[845px]'>
                <div className='flex items-center justify-center gap-6 '>
                    <img className='rounded-full h-[50px] w-[50px]' src={author_img} alt="" />
                    <div className='items-center justify-center mb-6'>
                        <h4 className='mt-6'>{author}</h4>
                        <p className='mb-'>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <p>{reading_time} <span>min</span>
                    <button onClick={() => handleAddToBookMark(blog)}
                        className='ml-5'><FaRegBookmark></FaRegBookmark>
                        </button>
                    </p>
                </div>
            </div>
            <h2 className="text-[40px] font-bold">{title}</h2>
            <p className='text-gray-400'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a> #{hash}</a></span>)
                }
            </p>
            <button onClick={ () => handlemarkAsRead(reading_time)}
             className='text-purple-600 font-bold underline'>Mark As Read
             </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handlemarkAsRead: PropTypes.func
}

export default Blog;