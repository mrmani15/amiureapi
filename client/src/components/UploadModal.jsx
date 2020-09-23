import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

function ReadModal({ uploadModal, closeModal }) {
	const [title, setTitle] = useState('');
	const [blog, setBlog] = useState('');

	const customStyles = {
		content: {
			height: 'auto',
			width: '50%',
			top: '40%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};
	const handleChange = e => {
		if (e.target.name === 'title') {
			setTitle(e.target.value);
		} else {
			setBlog(e.target.value);
		}
	};
	const handleSubmit = e => {
		e.preventDefault();
		const url = 'http://localhost:5000/upload';
		const token = JSON.parse(localStorage.getItem('token'));
		const config = {
			headers: {
				'auth-token': token,
			},
    };
    const data = {
      id: parseInt(localStorage.getItem('id')),
      name: localStorage.getItem('name'),
      title: title,
      blog: blog
    }
		axios
			.post(url, data, config)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		closeModal();
	};
	return (
		<div>
			<Modal
				isOpen={uploadModal}
				style={customStyles}
				ariaHideApp={false}
			>
				<div>
					<h3 className='text-center text-info'>Write Your blog</h3>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<input
								onChange={handleChange}
								value={title}
								type='text'
								className='form-control'
								placeholder='Your title here'
								name='title'
							/>
						</div>
						<div className='form-group'>
							<textarea
								name='blog'
								cols='30'
								rows='10'
								onChange={handleChange}
								className='form-control'
								placeholder='Your blog here'
								value={blog}
							></textarea>
						</div>
						<div className='d-flex justify-content-between'>
							<button
								className='btn btn-danger'
								type='button'
								onClick={closeModal}
							>
								cancel
							</button>
							<button className='btn btn-primary' type='submit'>
								Add
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	);
}

export default ReadModal;
