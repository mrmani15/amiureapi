import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadModal from './UploadModal';
import BlogList from './BlogList';

function Dashboard() {
	const [data, setData] = useState(null);
	const [uploadModal, setUploadModal] = useState(false);

	useEffect(() => {
		const url = '/dashboard';
		const token = JSON.parse(localStorage.getItem('token'));
		const config = {
			headers: {
				'auth-token': token,
			},
		};
		axios
			.get(url, config)
			.then(res => {
				setData(res.data.results);
			})
			.catch(err => console.log(err));
	}, [uploadModal]);

	const handleUpload = e => {
		e.preventDefault();
		setUploadModal(true);
	};
	const handleLogout = e => {
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('name');
		localStorage.removeItem('id');
		window.location.href = '/login';
	};

	const closeModal = () => {
		setUploadModal(false);
	};

	const readBlog = e => {};
	return (
		<div className='container'>
			<div className='card mt-3'>
				<div className='card-header d-flex justify-content-between p-3 shadow'>
					<h2 className='text-info font-weight-bolder'>Read Blogs</h2>
					<div>
						<button
							className='btn btn-info font-weight-bolder'
							onClick={handleUpload}
						>
							Create Blog
						</button>
						<button
							className='btn btn-danger font-weight-bolder ml-2'
							onClick={handleLogout}
						>
							Log out
						</button>
					</div>
				</div>
			</div>
			{uploadModal && (
				<UploadModal
					uploadModal={uploadModal}
					closeModal={closeModal}
				/>
			)}
			{data && <BlogList data={data} readBlog={readBlog} />}
		</div>
	);
}

export default Dashboard;
