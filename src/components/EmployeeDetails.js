import React, { useEffect , useState } from 'react'
import {Table} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import  { fetchEmployeeDetails} from '../redux/actions/employeeDetailsActions'
import axios from 'axios'
function EmployeeDetails() {

  const dispatch=useDispatch();
  const employees=useSelector((state)=>state.employeeReducer)
  const details=useSelector((state)=>state.employeeDetailsReducer)
  const {id} = useParams();
  
  
  useEffect(()=>{
    dispatch(fetchEmployeeDetails(id));
  },[]) 

  return (
      <>
        <div style={{textAlign:"center" , fontSize:"50px",fontWeight:"bold"}} >
          Employee Details
        </div>
        
        <Table striped bordered hover>
        
            <tbody>
                <tr>
                    <td><b>Name</b></td>
                    <td>{details.name && details.name}</td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                    <td>{details.email && details.email}</td>
                </tr>
                <tr>
                    <td><b>Phone</b></td>
                    <td>{details.phone && details.phone}</td>
                </tr>
                <tr>
                    <td><b>Company</b></td>
                    <td>{details.company && details.company.name}</td>
                </tr>
                <tr>
                    <td><b>Username</b></td>
                    <td>{details.username && details.username}</td>
                </tr>
            </tbody>
        </Table>
    </>      
  )
}

export default EmployeeDetails