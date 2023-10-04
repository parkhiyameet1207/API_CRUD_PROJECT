import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import {deletestudentAsyncData, getAllAsyncData, getsinglestudentAsyncData } from '../../Services/Action/action';

import { Link, useNavigate } from 'react-router-dom';

function ViewStudent() {

  const student = useSelector((state) => state.studentreducer.students);

const navigate = useNavigate();


  const dispatch = useDispatch();


  const handleedit = (id) => {
    console.log(id , "this is a edit id ");

    dispatch(getsinglestudentAsyncData(id))
    
    navigate('/edit')
  }

  
  const handleRemove = (id) => {
   
    dispatch(deletestudentAsyncData(id));
    dispatch(getAllAsyncData());

  };

  const getdata = () => {
    dispatch(getAllAsyncData());
  }
 
  useEffect(() => {
    getdata();
  })




  return (
    <>



      <Container>

        <h1 className='text-center my-3'>View Students</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Address</th>
              <th>City</th>
              <th>STD</th>
              <th>Zip Code</th>
              
<th>Action</th>
              

            </tr>
          </thead>
          <tbody>
            {

              student.map((data) => {
                return (
                  <>
                  
                  <tr>
                    <td>{data.fname + data.lname}</td>
                    <td>{data.email}</td>
                    <td>{data.country}</td>
                   
                    <td>{data.address}</td>
                    <td>{data.city}</td>
                    <td>{data.std}</td>
                    <td>{data.zip}</td>
                    <td><button className='btn btn-danger' onClick={() => handleRemove(data.id)}>Remove</button>
                    <button className='btn btn-danger' onClick={() => handleedit(data.id)}>Edit</button></td>
                    

                  </tr>
                  </>
                )
              })
            }


          </tbody>
        </Table>



      </Container>
    </>
  )
}

export default ViewStudent