import React, { useEffect, useState } from 'react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import uuid from 'react-uuid'
import { useDispatch, useSelector } from 'react-redux'
// import { addcart } from '../../Services/Action/action'
import { useNavigate, useParams } from 'react-router'
import { addStudentasync, getAllAsyncData, updatestudentasync } from '../../Services/Action/action'
// import { parsedata } from './product.js'
// import '../Product/productData.css'



function Edit() {

	const dispatch = useDispatch();

	const navigate =useNavigate();


	const { student } = useSelector((state) => state.studentreducer);

	// console.log(student.id, "this is all edit Students");
	// // const student = students.filter((val) => val.id == students.id);

	const [inputValue, setinputvalue] = useState(student)

	// console.log(inputValue.id);

	

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;


		setinputvalue({...inputValue, [name]: value })



	}

	const handlesubmit = (e) => {
		e.preventDefault();
		dispatch(updatestudentasync(inputValue,inputValue.id));
		navigate("/view");

	}

	return (
		<>


			<form onSubmit={(e) => handlesubmit(e)}>
				<div class="space-y-12">


					<div class="border-b border-gray-900/10 pb-12">
						<h1 class="text-base font-semibold leading-7 text-gray-900 text-center text-1xl mt-10">Edit Student Information</h1>


						<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div class="sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
								<div class="mt-2">
									<input type="text" name="fname" id="first-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.fname} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
								<div class="mt-2">
									<input type="text" name="lname" id="last-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.lname} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-4">
								<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
								<div class="mt-2">
									<input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.email} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
								<div class="mt-2">
									<select id="country" name="country" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" value={inputValue.country} onChange={(e) => handleChange(e)}>
										<option>India</option>
										<option>Bharat</option>
										<option>Hindustan</option>
									</select>
								</div>
							</div>

							<div class="col-span-full">
								<label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
								<div class="mt-2">
									<input type="text" name="address" id="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.address} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-2 sm:col-start-1">
								<label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
								<div class="mt-2">
									<input type="text" name="city" id="city" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.city} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-2">
								<label for="region" class="block text-sm font-medium leading-6 text-gray-900">STD</label>
								<div class="mt-2">
									<input type="text" name="std" id="region" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.std} onChange={(e) => handleChange(e)} />
								</div>
							</div>

							<div class="sm:col-span-2">
								<label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
								<div class="mt-2">
									<input type="text" name="zip" id="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={inputValue.zip} onChange={(e) => handleChange(e)} />
								</div>
							</div>
						</div>
					</div>


				</div>

				<div class="mt-6 flex items-center justify-end gap-x-6">
					<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
					<button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
				</div>
			</form>


		</>

	)
}

export default Edit;