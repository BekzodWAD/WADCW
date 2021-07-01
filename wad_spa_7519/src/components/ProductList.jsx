import React, { useEffect, useState } from 'react'
import { GetData } from '../utils/ajax'
import ColorfullTag from './ColorfullTag';
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        GetData("/api/Products").then(data=>setData(data))
    }, [])

    return (
        <div style={{ margin: 'auto', width: '90%' }}>
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
                            <td>{row.category}</td>
                            <td><ColorfullTag clr="#BB2E3E" /></td>
                            <td>
                                <Link to={`/products/edit/${row.productId}`} ><button className="btn btn-primary">Edit</button></Link>
                                <button className="btn btn-danger ml-3">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
