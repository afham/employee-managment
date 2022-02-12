import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeDetails from './components/EmployeeDetails';
import {Spinner} from 'react-bootstrap'
import { useSelector} from 'react-redux'

function App() {
  const loading = useSelector((state)=>state.employeeReducer.loading);
  console.log("LOading",loading)
  return (
 
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<EmployeeDetails />} />
        <Route path="/create" element={<Create/>} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
