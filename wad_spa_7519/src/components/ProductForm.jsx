import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { GetData, PostData, PutData } from '../utils/ajax';

const ProductForm = ({ history, match }) => {

    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        Name: "",
        Description: "",
        CategoryId: 0
    })

    useEffect(()=>{
        GetData("/api/Categories")
        .then(res=>{
            setCategories(res); 
            console.log(res)})
        if(match.params.productId){
            GetData(`/api/Products/${match.params.productId}`)
            .then(res => {
                const { name, categoryId, description, productId } = res;
                setFormData({
                    ProductId: productId,
                    Name: name,
                    CategoryId: categoryId,
                    Description: description
                })
                console.log(formData)
            })
        }
        
        
    }, [])

    const handleSubmit = values => {
        console.log(values)
        try {
            if(!!match.params.productId)
                PutData(`/api/Products/${match.params.productId}`, values, history.goBack)
            else
                PostData("/api/Products", values, history.goBack)
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h3>Create product</h3>
            {
                (!(match.params.productId) || (match.params.productId && formData.ProductId)) ?
                    <Formik
                        setFieldsValue
                        onSubmit={handleSubmit}
                        initialValues={formData}
                    >
                        <Form className="form-group">
                            <label>Product name</label>
                            <Field name="Name" className="form-control" />
                            <label htmlFor="" as="textarea">Description</label>
                            <Field as="textarea" name="Description" className="form-control" rows={5} />
                            <label htmlFor="">Category</label>
                            <Field name="CategoryId" as="select" className="form-control">
                                <option >Choose category</option>
                                {
                                    categories.map(category => <option key={`option-${category.categoryId}`}
                                        value={category.categoryId}>{category.name}</option>)
                                }
                            </Field>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Formik>
                    : null
            }
            
        </div>
    )
}

export default ProductForm
