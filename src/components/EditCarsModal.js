/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { getCarById, updateCar } from '../store/actions/carsAction';
import { getAllCategories } from '../store/actions/categoriesAction';
import Message from './Message';

const EditCarsModal = ({
	show,
	handleClose,
	id,
	carName,
	setCarName,
	carModel,
	setCarModel,
	carSelectedCategory,
	setCarSelectedCategory,
	carColor,
	setCarColor,
	carRegistrationNo,
	setCarRegistrationNo,
}) => {
	const { categories } = useSelector((state) => state.categories);

	const [error, setError] = useState('');
	const title = 'Edit';

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllCategories(1, 100));
	}, []);
	console.log('Edit Car Selected Category:');

	const handleUpdateCar = () => {
		if (
			!(
				carName &&
				carRegistrationNo &&
				carSelectedCategory &&
				carColor &&
				carModel
			)
		) {
			return setError('All Fields Are Required');
		}
		const data = {
			name: carName,
			category: carSelectedCategory.value,
			registration_no: carRegistrationNo,
			color: carColor,
			model: carModel,
		};
		dispatch(updateCar(data, id));

		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	return (
		<Container>
			<Row>
				<Modal show={show} onHide={handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title>{title} Car</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{error && <Message variant={'danger'}>{error}</Message>}
						<Form>
							<Form.Group className='mb-3'>
								<Form.Label
									style={{
										fontSize: 14,
									}}
								>
									Car Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Car Name'
									value={carName}
									onChange={(e) => {
										setCarName(e.target.value);
										console.log(e.target.value);
									}}
								/>
							</Form.Group>
							<Row>
								<Col lg={12}>
									{' '}
									Categories
									<Select
										isClearable={false}
										placeholder={'Select option'}
										isSearchable={true}
										value={carSelectedCategory}
										onChange={(selectedList) => {
											setCarSelectedCategory(selectedList);
										}}
										options={categories?.map((x) => ({
											value: x._id,
											label: x.name,
										}))}
									/>
								</Col>
							</Row>
							<br />
							<Form.Group className='mb-3'>
								<Form.Label
									style={{
										fontSize: 14,
									}}
								>
									Registration Number
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Registration Number'
									value={carRegistrationNo}
									onChange={(e) => setCarRegistrationNo(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label
									style={{
										fontSize: 14,
									}}
								>
									Model
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Model'
									value={carModel}
									onChange={(e) => setCarModel(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className='mb-3'>
								<Form.Label
									style={{
										fontSize: 14,
									}}
								>
									Color{' '}
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Color'
									value={carColor}
									onChange={(e) => setCarColor(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='success' onClick={handleUpdateCar}>
							Edit
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
		</Container>
	);
};

export default EditCarsModal;
