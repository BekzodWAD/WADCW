import React, { useEffect, useState } from 'react'
import { DeleteData, GetData } from '../utils/ajax'
import ColorfullTag from './ColorfullTag';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [data, setData] = useState([]);

    const handleFetchData = () => {
        GetData("/api/Categories").then(data => setData(data))
    }

    const handleDelete = id => {

        DeleteData(`/api/Categories/${id}`, handleFetchData)
    }
    useEffect(() => {
        handleFetchData()
    }, [])

    return (
        <div style={{ margin: 'auto', width: '90%', marginTop: 20 }}>
            <Link to="/categories/create">Create category</Link>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Color tag</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        data.map(row => <tr>
                            <td>{row.name}</td>
                            <td><ColorfullTag clr={row.colorCode} /></td>
                            <td>
                                <Link to={`/categories/edit/${row.categoryId}`} ><button className="btn btn-primary">Edit</button></Link>
                                <button onClick={() => handleDelete(row.categoryId)} className="btn btn-danger ml-3">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
