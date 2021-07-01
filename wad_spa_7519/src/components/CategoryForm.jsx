import React from 'react'
import { Formik, Form, Field } from 'formik';

const CategoryForm = () => {
    
    const handleSubmit = values=>{
        console.log(values);
    }
    
    return (
        <div style={{width:'50%', margin: 'auto'}}>
            <h3>Create category</h3>
            <Formik 
                onSubmit={handleSubmit}
                initialValues={{
                    Name: "",
                    ColorCode: "Red"
                }}
            >
                <Form className="form-group">
                    <label>Category name</label>
                    <Field name="Name" className="form-control" />
                    <label htmlFor="">Color</label>
                    <Field name="ColorCode" as="select" className="form-control">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CategoryForm
