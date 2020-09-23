import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div className='container'>
			<div className='jumbotron mt-4'>
				<h1 className='display-4'>Hello, world!</h1>
				<p className='lead'>
					This is NODE MYSQL app with authentication
				</p>
				<hr className='my-4' />
				<p>I am deploying it on aws</p>
				<div className='d-flex'>
					<Link
						className='btn btn-primary btn-lg'
						to='/register'
						role='button'
					>
						Register
					</Link>
					<Link
						className='btn btn-primary btn-lg ml-4'
						to='/login'
						role='button'
					>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
