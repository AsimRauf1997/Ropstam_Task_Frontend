/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
	Breadcrumb,
	Button,
	Card,
	Col,
	Container,
	Form,
	Modal,
	Row,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import {
	AddNewCategory,
	getAllCategories,
} from '../store/actions/categoriesAction';
import { FaTrashAlt, FaRegEdit, FaPlusCircle } from 'react-icons/fa';
import { AddNewCar, deleteCar, getAllCars } from '../store/actions/carsAction';
import EditCarsModal from '../components/EditCarsModal';
import Message from '../components/Message';
import { useNavigate } from 'react-router-dom';

const Cars = () => {
	const [show, setShow] = useState(false);
	const [editShow, setEditShow] = useState(false);
	const [name, setName] = useState('');
	const [model, setModel] = useState('');
	const [make, setMake] = useState('');
	const [color, setColor] = useState('');
	const [hp, setHp] = useState('');
	const [registerationNo, setRegistrationNo] = useState('');
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [error, setError] = useState('');
	const [carObj, setCarObj] = useState({});

	const dispatch = useDispatch();
	const cars = useSelector((state) => state.cars);
	const { categories } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getAllCars(1, 5));
		dispatch(getAllCategories());
	}, [dispatch]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleEditClose = () => setEditShow(false);
	const handleEditShow = () => setEditShow(true);
	const editCategory = (row) => {
		setName(row.name);
		setModel(row.model);
		setRegistrationNo(row.registration_no);
		setSelectedCategory({
			value: row.category._id,
			label: row.category.name,
		});
		setColor(row.color);
		handleEditShow();
		setId(row._id);
	};
	console.log('selectedCategory:', selectedCategory);
	const addCar = () => {
		setTitle('Add');
		setName('');
		setModel('');
		setRegistrationNo('');
		setColor('');
		handleShow();
	};
	const handleAddCar = () => {
		if (!(name && registerationNo && model && selectedCategory && color)) {
			return setError('All Fields Are Required');
		}
		const data = {
			name: name,
			category: selectedCategory.value,
			registration_no: registerationNo,
			color: color,
			model: model,
		};
		dispatch(AddNewCar(data));
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	const columns = [
		{
			name: 'S.NO',
			cell: (_, i) => ++i,
		},
		{
			name: 'Car Name',
			cell: (row) => row?.name,
		},
		{
			name: 'Category Name',
			cell: (row) => row?.category?.name,
		},
		{
			name: 'Model',
			cell: (row) => row?.model,
		},
		{
			name: 'Registration Number',
			cell: (row) => row?.registration_no,
		},

		{
			name: 'Actions',
			center: true,
			width: '14%',
			cell: (row) => (
				<>
					<Row>
						<div
							style={{
								display: 'flex',
							}}
						>
							<a
								style={{
									backgroundColor: 'green',
								}}
								className='btn '
								onClick={() => {
									editCategory(row);
								}}
							>
								<FaRegEdit color='white' />
							</a>
							&nbsp;
							<a
								className='btn '
								style={{
									backgroundColor: 'red',
								}}
								onClick={() => {
									dispatch(deleteCar(row._id));
									setTimeout(() => {
										window.location.reload();
									}, 2000);
								}}
							>
								<FaTrashAlt color='white' />
							</a>
						</div>
					</Row>
				</>
			),
		},
	];
	return (
		<Container>
			<Breadcrumb
				style={{
					marginTop: 20,
				}}
			>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Cars</Breadcrumb.Item>
			</Breadcrumb>
			<Row
				style={{
					marginTop: '5%',
				}}
			>
				<Col>
					<Card>
						<Card.Header>
							<Row>
								<Col lg={2}>
									<Button
										variant='success'
										onClick={() => {
											addCar();
											handleShow();
										}}
									>
										{' '}
										Add A New Car
									</Button>
								</Col>
							</Row>
						</Card.Header>
						<Card.Body>
							<DataTable
								title='Cars'
								data={cars.cars}
								columns={columns}
								progressPending={cars.loading}
								paginationServer
								pagination
								paginationTotalRows={cars.size}
								onChangePage={() => {
									dispatch(getAllCars(2, 5));
								}}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
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
									value={name}
									onChange={(e) => {
										setName(e.target.value);
										setError('');
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
										value={selectedCategory}
										onChange={(selectedList) => {
											setSelectedCategory(selectedList);
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
									value={cars.registration_no}
									onChange={(e) => setRegistrationNo(e.target.value)}
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
									value={model}
									onChange={(e) => setModel(e.target.value)}
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
									value={color}
									onChange={(e) => setColor(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='success' onClick={handleAddCar}>
							Add
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
			<EditCarsModal
				show={editShow}
				handleClose={handleEditClose}
				id={id}
				carName={name}
				setCarName={setName}
				carColor={color}
				setCarColor={setColor}
				carModel={model}
				setCarModel={setModel}
				carRegistrationNo={registerationNo}
				setCarRegistrationNo={setRegistrationNo}
				carSelectedCategory={selectedCategory}
				setCarSelectedCategory={setSelectedCategory}
			/>
		</Container>
	);
};

export default Cars;
