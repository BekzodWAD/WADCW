import React, { useEffect, useState } from 'react'
import { DeleteData, GetData } from '../utils/ajax'
import ColorfullTag from './ColorfullTag';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [data, setData] = useState([]);

    const handleFetchData = ()=>{
        GetData("/api/Products").then(data => setData(data))
    }

    const handleDelete = id=>{
        
        DeleteData(`/api/Products/${id}`, handleFetchData)        
    }
    useEffect(()=>{
        handleFetchData()
    }, [])

    return (
        <div style={{ margin: 'auto', width: '90%', marginTop: 20}}>
            <Link to="/products/create">Create product</Link>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th></th>                    
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        data.map(row=><tr>
                            <td>{row.name}</td>
                            <td>{row.description}</td>
                            <td>{row.category.name}</td>
                            <td><ColorfullTag clr={row.category?.colorCode} /></td>
                            <td>
                                <Link to={`/products/edit/${row.productId}`} ><button className="btn btn-primary">Edit</button></Link>
                                <button onClick={()=>handleDelete(row.productId)} className="btn btn-danger ml-3">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
