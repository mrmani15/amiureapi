import React, { useState } from 'react';
import ReadModal from './ReadModal';

function Blog({ blog }) {
	const [title, setTitle] = useState('');
	const [post, setPost] = useState('');
	const [ModalFlag, setModalFlag] = useState(false);

	const readBlog = e => {
		e.preventDefault();
		const data = JSON.parse(e.target.value);
		setTitle(data.title);
		setPost(data.blog);
		setModalFlag(true);
	};

	const closeModal = () => {
		setModalFlag(false);
	};
	return (
		<div className='border mt-2 p-3'>
			<span className='text-primary'>{blog.username}</span>
			<h2 className='text-info'>{blog.title}</h2>
			<p>{blog.blog.slice(0, 100)}</p>
			<button onClick={readBlog} value={JSON.stringify(blog)}>
				Read More
			</button>
			{ModalFlag && (
				<ReadModal
					title={title}
					post={post}
					setFlag={ModalFlag}
					closeModal={closeModal}
				/>
			)}
		</div>
	);
}

export default Blog;
