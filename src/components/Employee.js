import React from 'react'
import styles from './Employee.module.css'
import { deleteEmployees } from '../redux/actions/employeeActions';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Employee = ({index,id,email,name,phone ,openDeleteDialog,openUpdateDialog }) => {

  return (  
    <tr>
      <td>{index+1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
          <Link to={`/${id}`}>
            <Button variant="outline-primary">read</Button>
          </Link>
          
      </td>
      <td><Button variant='primary' onClick={()=>openUpdateDialog(id,{name,email,phone})}>edit</Button></td>
      <td><Button variant='danger' onClick={()=>openDeleteDialog(id)}>delete</Button></td>
    </tr>
  )
}

export default Employee 