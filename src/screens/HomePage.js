import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<Container
			style={{
				position: 'absolute',
				top: '20%',
				left: '20%',
			}}
		>
			<Row>
				<Col lg={4} className='categories'>
					<Link
						to={'/categories'}
						style={{
							textDecoration: 'none',
						}}
					>
						<Card
							style={{
								width: '20rem',
								height: '10rem',
								backgroundColor: '#aedaa0',
							}}
						>
							<Card.Body
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									color: 'black',
								}}
							>
								Go To Categories Page
							</Card.Body>
						</Card>
					</Link>
				</Col>
				<Col lg={4} className='categories'>
					<Link
						to={'/cars'}
						style={{
							textDecoration: 'none',
						}}
					>
						<Card
							style={{
								width: '20rem',
								height: '10rem',
								backgroundColor: '#aedaa0',
							}}
						>
							<Card.Body
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									cursor: 'pointer',
									color: 'black',
								}}
							>
								Go To Cars Page
							</Card.Body>
						</Card>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
