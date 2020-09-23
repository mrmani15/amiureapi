import React from 'react';
import Blog from './Blog';

function BlogList({ data }) {
	return (
		<div>
			{data.map((blog, index) => {
				return <Blog blog={blog} key={index} />;
			})}
		</div>
	);
}

export default BlogList;
