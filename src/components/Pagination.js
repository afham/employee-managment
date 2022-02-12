import React from 'react'
import { Pagination } from 'react-bootstrap'

function CustomPagination({itemsPerPage,totalItems ,paginate}) {
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
      pageNumbers.push(i);
  } 
  return (
    <div style={{float:'right' ,marginRight:'20px'}}>
        <Pagination>
        {pageNumbers.map((num)=>(
                <Pagination.Item key={num} onClick={()=>paginate(num)}>
                    {num}
                </Pagination.Item>
        ))}
        </Pagination>
    </div>
  )
}

export default CustomPagination