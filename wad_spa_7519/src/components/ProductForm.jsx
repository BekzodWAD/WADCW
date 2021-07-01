import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { PostData } from '../utils/ajax';

const ProductForm = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        
    }, [])

    const handleSubmit = values => {
        try {
            PostData("/api/Products", values)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h3>Create product</h3>
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    Name: "",
                    Description: "",
                    CategoryId: 0
                }}
            >
                <Form className="form-group">
                    <label>Product name</label>
                    <Field name="Name" className="form-control" />
                    <label htmlFor="" as="textarea">Description</label>
                    <Field as="textarea" name="Description" className="form-control" rows={5}/>
                    <label htmlFor="">Category</label>
                    <Field name="CategoryId" as="select" className="form-control">
                        <option value={1}>Red</option>
                        <option value={2}>Green</option>
                        <option value={3}>Blue</option>
                    </Field>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductForm
