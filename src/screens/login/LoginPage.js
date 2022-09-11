import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-spinners/ClipLoader';
import Message from '../../components/Message';
import { userLogin } from '../../store/actions/userAction';
const LoginPage = ({ location }) => {
	const dispatch = useDispatch();
	const { error, userInfo, success, loading } = useSelector(
		(state) => state.userLogin
	);
	console.log(userInfo, success);
	const [err, setErr] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleEmail = (e) => {
		setErr('');
		setEmail(e.target.value);
	};
	const handlePass = (e) => {
		setErr('');
		setPassword(e.target.value);
	};
	useEffect(() => {
		if (userInfo.hasOwnProperty('password')) {
			navigate('/');
		}
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setErr('Field Cant be Empty');
		} else {
			const data = {
				email,
				password,
			};

			dispatch(userLogin(data));
			setTimeout(() => {
				if (userInfo) {
					console.log('Executed');
					return navigate('/');
				}
			}, 2000);
		}
	};
	return (
		<div className='login-container'>
			{err && <Message variant={'danger'}>{err}</Message>}
			{error && <Message variant={'danger'}>{error}</Message>}
			{success && <Message variant={'success'}>{success}</Message>}
			<Card
				style={{
					width: '30vw',
					backgroundColor: '#aedaa0',
					borderColor: '#ff900520',
				}}
			>
				<Card.Body
					style={{
						padding: 20,
						marginTop: 20,
					}}
				>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label
								style={{
									fontSize: 14,
								}}
							>
								Email address
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter email'
								value={email}
								onChange={(e) => handleEmail(e)}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label
								style={{
									fontSize: 14,
								}}
							>
								Password
							</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => handlePass(e)}
							/>
						</Form.Group>
					</Form>
					<hr />
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 15,
						}}
					>
						<Button
							style={{ width: '90vw' }}
							variant='primary'
							type='submit'
							onClick={handleSubmit}
						>
							{loading ? <Loader size={20} color={'white'} /> : 'Login'}
						</Button>
					</div>
				</Card.Body>
			</Card>
			<Row className='mt-3'>
				<Col>
					<span>
						New User?{' '}
						<span>
							<Link
								style={{
									textDecoration: 'none',
									fontWeight: 'bold',
								}}
								to='/signup'
							>
								Register here
							</Link>
						</span>{' '}
					</span>
				</Col>
			</Row>
		</div>
	);
};

export default LoginPage;
