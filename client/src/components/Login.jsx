import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = e => {
		if (e.target.id === 'email') {
			setEmail(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			email,
			password,
		};
		const url = 'http://localhost:5000/login';
		axios
			.post(url, data)
			.then(res => {
				const { name, id, token } = res.data;
				localStorage.setItem('name', JSON.stringify(name));
				localStorage.setItem('id', JSON.stringify(id));
				localStorage.setItem('token', JSON.stringify(token));
				window.location.href = '/';
			})
			.catch(err => console.log(err));
	};
	return (
		<div className='container'>
			<div className='card form-card shadow'>
				<div className='card-header'>
					<h2 className='text-center text-primary'>Login</h2>
				</div>
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='email'>Email address:</label>
							<input
								onChange={handleChange}
								value={email}
								type='email'
								className='form-control'
								placeholder='Enter your email'
								id='email'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password:</label>
							<input
								onChange={handleChange}
								value={password}
								type='password'
								className='form-control'
								placeholder='Enter your Password'
								id='password'
							/>
						</div>
						<div>
							<button className='btn btn-primary' type='submit'>
								Submit
							</button>
							<Link to='/register' className='ml-5'>
								Go to Register
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
