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
import {
	AddNewCategory,
	deleteCategory,
	getAllCategories,
	updateCategory,
} from '../store/actions/categoriesAction';
import { FaTrashAlt, FaRegEdit, FaPlusCircle } from 'react-icons/fa';

const Categories = () => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [title, setTitle] = useState('');

	const dispatch = useDispatch();
	const { categories, loading } = useSelector((state) => state.categories);
	useEffect(() => {
		dispatch(getAllCategories(1, 5));
	}, []);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const editCategory = (row) => {
		setTitle('Edit');
		setName(row.name);
		setId(row._id);
		setShow(true);
	};
	const addCategory = (row) => {
		setTitle('Add');
		setName('');
		setShow(true);
	};
	console.log(name, id);
	const columns = [
		{
			name: 'S.NO',
			cell: (_, i) => ++i,
		},
		{
			name: 'Category Name',
			cell: (row) => row.name,
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
								onClick={() => handleDeleteCategory(row._id)}
							>
								<FaTrashAlt color='white' />
							</a>
						</div>
					</Row>
				</>
			),
		},
	];
	const handleEditCategory = () => {
		dispatch(updateCategory(name, id));
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	const handleAddCategory = () => {
		dispatch(AddNewCategory(name));
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	const handleDeleteCategory = (id) => {
		dispatch(deleteCategory(id));
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};
	return (
		<Container>
			<Breadcrumb
				style={{
					marginTop: 20,
				}}
			>
				<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
				<Breadcrumb.Item active>Categories</Breadcrumb.Item>
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
											addCategory();
											handleShow();
										}}
									>
										{' '}
										Add A New Category
									</Button>
								</Col>
							</Row>
						</Card.Header>
						<Card.Body>
							<DataTable
								title='Categories'
								data={categories}
								columns={columns}
								pagination
								progressPending={loading}
								paginationServer
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{title} Category</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className='mb-3'>
								<Form.Label
									style={{
										fontSize: 14,
									}}
								>
									Category Name
								</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter Category Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='success'
							onClick={() => {
								title === 'Add' ? handleAddCategory() : handleEditCategory();
							}}
						>
							{title === 'Edit' ? 'Edit' : 'Add'}
						</Button>
					</Modal.Footer>
				</Modal>
			</Row>
		</Container>
	);
};

export default Categories;
