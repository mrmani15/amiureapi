import React from 'react';
import Modal from 'react-modal';

function ReadModal({ title, post, setFlag, closeModal }) {
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
	return (
		<Modal isOpen={setFlag} style={customStyles} ariaHideApp={false}>
			<div>
				<h3 className='text-center text-info'>{title}</h3>
				<p>{post}</p>
			</div>
			<button
				className='btn btn-danger'
				type='button'
				onClick={closeModal}
			>
				cancel
			</button>
		</Modal>
	);
}

export default ReadModal;
