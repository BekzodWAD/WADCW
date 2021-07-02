import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { GetData, PostData, PutData } from '../utils/ajax';

const CategoryForm = ({ history, match }) => {
    
    const [formData, setFormData] = useState({
        Name: "",
        ColorCode: "Red"
    })

    useEffect(()=>{
        if (match.params.categoryId) {
            GetData(`/api/Categories/${match.params.categoryId}`)
                .then(res => {
                    const { name, colorCode, categoryId } = res;
                    setFormData({
                        CategoryId: categoryId,
                        Name: name,
                        ColorCode: colorCode
                    })
                })
        }
    }, [])

    const handleSubmit = values=>{
        try{
            if(match.params.categoryId)
                PutData(`/api/Categories/${match.params.categoryId}`, values, history.goBack)
            else
                PostData("/api/Categories", values, history.goBack)
        }catch(e){
            console.error(e);
        }
    }
    
    return (
        <div style={{width:'50%', margin: 'auto'}}>
            <h3>Create category</h3>
            {
                (!(match.params.categoryId) || (match.params.categoryId && formData.CategoryId)) ?
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={formData}
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
                    :null
            }
            
        </div>
    )
}

export default CategoryForm
