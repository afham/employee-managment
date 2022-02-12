import React , {useEffect, useState} from 'react'
import {Form, Modal , Button} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup';


function UpdateDialog({itemToUpdate,show , onHide , onUpdateHandler}) {
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik =useFormik({
      initialValues:{
        name:itemToUpdate.name,
        email:itemToUpdate.email,
        phone:itemToUpdate.phone
      },
      onSubmit:(values)=>{
        onUpdateHandler({name:values.name,email:values.email,phone:values.phone})
        formik.values.name='';
        formik.values.email='';
        formik.values.phone='';
        formik.touched.name=false;
        formik.touched.email=false;
        formik.touched.phone=false;
      },
      validationSchema:Yup.object({
        name:Yup.string()
        .max(15,"Must be less than 15 characters")    
        .required("required"),
        email:Yup.string()
        .email("Invalid email address")
        .required("required"),
        phone: Yup.string()
        .required("required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, "to short")
        .max(10, "to long"),
      })
    });

    const onCancel = () => {
        onHide();
        formik.values.name='';
        formik.values.email='';
        formik.values.phone='';
        formik.touched.name=false;
        formik.touched.email=false;
        formik.touched.phone=false;
    }

    return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Update Dialog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit} >  
          <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control id='name'  type="text" placeholder="Enter Employee Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name ? <Form.Text style={{color: 'red',}} >
              {formik.errors.name}
            </Form.Text> : null }
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control id='email' type="text" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>       
            {formik.touched.email && formik.errors.email ? <Form.Text style={{color: 'red',}} >
              {formik.errors.email}
            </Form.Text> : null }         
          </Form.Group>   
          <br></br>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control id='phone' type="text" placeholder="Enter Phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />       
            {formik.touched.phone && formik.errors.phone ? <Form.Text style={{color: 'red',}} >
              {formik.errors.phone}
            </Form.Text> : null }         
          </Form.Group> 
          <br></br>
          <Button variant="primary" type="submit" style={{marginRight:'10px'}} >
            Submit
          </Button>
        
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </Form>
        </Modal.Body>
       
    </Modal>

    )
}

export default UpdateDialog