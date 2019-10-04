import React from 'react'
import {Formik, Form, Field} from 'formik'

function LocationContentFilter(props) {
    let onFilter = props.onFilter
    
    let pageOptions = []
    let noPages = Math.ceil(props.resultsCount / 100)
    for (let i=1; i <= noPages; i++) {
        pageOptions.push(<option value={i} label={i} />)
    }
    
    return(
    <div className="row"><div className="col p-3">

        <Formik
            initialValues = {{ nameFilter: '', pageFilter: 1}}
            
            onSubmit={(values, {setSubmitting})=> {
                onFilter(values.nameFilter, values.pageFilter)
                setSubmitting(false);
            }}
            
        >{({isSubmitting, values, handleChange, handleBlur, handleReset, dirty})=>(
        
            <Form>            
            
            <div className="row">
            
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='locationNameFilter'>Name</label>
                    <Field name='nameFilter' id='locationNameFilter' type='text' className="form-control"/>
                  </div>
                </div>
                
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='locationPageFilter'>Page</label>
                    <select
                        name='pageFilter'
                        id='locationPageFilter'
                        value={values.pageFilter}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        className="form-control"
                    >
                        {pageOptions}
                    </select>
                  </div>
                </div>
            </div>
            
            <div className="row"><div className="col">
              
              <button type="submit" disabled={isSubmitting} className="btn btn-info">
                Filter
              </button>
              
              <button
                type="button"
                className="btn btn-secondary"
                onClick={()=>{
                    onFilter('', 1)
                    handleReset()
                }}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              
            </div></div>
            
            </Form>
            
        )}</Formik>
        
    </div></div>
    )
}

export default LocationContentFilter