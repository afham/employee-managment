import {useEffect,useState} from 'react'
import Employee from './Employee';
import { useLocation ,useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchEmployees ,addEmployees , deleteEmployees , updateEmployees } from '../redux/actions/employeeActions';
import { Table , Modal , Button , Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import DeleteDialog from './DeleteDialog';
import UpdateDialog from './UpdateDialog';
import CustomPagination from './Pagination';
import {Spinner} from 'react-bootstrap'

function Home() {
  const dispatch=useDispatch();
  const location = useLocation();
  
  const employees=useSelector((state)=>state.employeeReducer.dataState);
  const loading=useSelector((state)=>state.employeeReducer.loading);

  const [searchBar,setSearchBar] = useState('');

  const [itemToUpdate, setItemToUpdate] = useState('')

  const [deleteDialog, setDeleteDialog] = useState(false);  
  const [updateDialog, setUpdateDialog] = useState(false);  

  const [id , setId]=useState('')

  const [currentPage, setCurrentPage]=useState(1);
  const [itemsPerPage, setItemsPerPage]=useState(5);

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems=employees.filter((el)=>el.name.toLowerCase().includes(searchBar.toLowerCase())).slice(indexOfFirstItem,indexOfLastItem)
 
  useEffect(()=>{
    if(!location.state){
      dispatch(fetchEmployees())
    }
    else{
      dispatch(addEmployees(location.state))
    }  
  },[])

  useEffect(()=>{
    return ()=>{
      window.history.replaceState({}, document.title)
    }
  })

  const openDeleteDialog=(id)=>{
    setDeleteDialog(true)
    setId(id);
  }
  const openUpdateDialog=(id ,updItem)=>{
    setItemToUpdate(updItem)
    setId(id);
    setUpdateDialog(true)
  }
  const onDeleteHandler=()=>{ 
    dispatch(deleteEmployees(id));
    setDeleteDialog(false);
  }
  const onUpdateHandler=(updatedItem)=>{  
    dispatch(updateEmployees(id , updatedItem ));
    setUpdateDialog(false);
  }

  
  const paginate = (pageNumber)=> {
    console.log(pageNumber,"df")
    setCurrentPage(pageNumber)
  }

  return (
    <>
    { loading ?
      <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> :
      <div>
        <div style={{textAlign:"center" , fontSize:"50px",fontWeight:"bold"}} >
          LIST OF EMPLOYEES
        </div> 
        <div style={{marginLeft:"20px"}}>
          <Form.Label>Search By Name</Form.Label>
          <Form.Control style={{width:"300px"}} onChange={(e)=>setSearchBar(e.target.value)}></Form.Control>    
        </div>
        
        <Link to="/create" style={{float:"right" ,marginRight:"20px" , marginBottom:"20px"}}>
          <Button variant="primary">
             Add an Employee
          </Button>
        </Link>
   
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>sl.no</th>
                <th>Name</th>
                <th>email</th>
                <th>phone</th>
                <th>.</th>
                <th>.</th>
              </tr>        
            </thead>
            <tbody>
              {currentItems.map((emp,index) => (
                <Employee
                  id={emp.id}
                  index={((currentPage-1)*itemsPerPage)+index}
                  key={index}
                  name={emp.name}
                  email={emp.email}
                  phone ={emp.phone}
                  openDeleteDialog={openDeleteDialog}
                  openUpdateDialog={openUpdateDialog}
                  
                />
              ))}
            </tbody>
          </Table>
       </div>
       <CustomPagination paginate={paginate} itemsPerPage={itemsPerPage} totalItems={employees.length}/>
      
       <DeleteDialog show={deleteDialog} onHide={()=>setDeleteDialog(false)} onDeleteHandler={onDeleteHandler} />

       {
        updateDialog && <UpdateDialog itemToUpdate={itemToUpdate} show={updateDialog} onHide={()=>setUpdateDialog(false)} onUpdateHandler={onUpdateHandler} />
       }
      </div>
    }
    </>
    
  )
}

export default Home