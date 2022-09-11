import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-spinners/ClipLoader';
import Message from '../../components/Message';
import { register } from '../../store/actions/userAction';

const Signup = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user);
	const { error, loading, success } = userInfo;
	const navigate = useNavigate();
	const [err, setErr] = useState();
	const [email, setEmail] = useState();
	const [name, setName] = useState();

	const handleEmail = (e) => {
		setErr('');
		setEmail(e.target.value);
	};
	const handleUserName = (e) => {
		setErr('');
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !name) {
			setErr('Fields Cant be Empty');
		} else {
			const data = {
				name,
				email,
			};
			dispatch(register(data));
		}
	};
	return (
		<div className='signup-container'>
			{error && <Message variant={'danger'}>{error}</Message>}
			{success && <Message variant={'success'}>{success}</Message>}
			{err && <Message variant={'danger'}>{err}</Message>}

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
						<Form.Group className='mb-3'>
							<Form.Label
								style={{
									fontSize: 14,
								}}
							>
								User Name
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter User Name'
								value={name}
								onChange={(e) => handleUserName(e)}
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label
								style={{
									fontSize: 14,
								}}
							>
								Email address
							</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => handleEmail(e)}
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
							{loading ? <Loader size={20} /> : 'SignUp'}
						</Button>
					</div>
				</Card.Body>
			</Card>
			<Row className='mt-3'>
				<Col>
					<span>
						Already have an account?{' '}
						<span>
							<Link
								style={{
									textDecoration: 'none',
									fontWeight: 'bold',
								}}
								onMouseOver='red'
								to='/login'
							>
								Login here
							</Link>
						</span>{' '}
					</span>
				</Col>
			</Row>
		</div>
	);
};

export default Signup;
