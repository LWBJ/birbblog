import React from 'react'
import {Formik, Form, Field} from 'formik'

function SightingContentFilter(props) {
    let onFilter = props.onFilter
    
    let pageOptions = []
    let noPages = Math.ceil(props.resultsCount / 100)
    for (let i=1; i <= noPages; i++) {
        pageOptions.push(<option value={i} label={i} />)
    }
    
    return(
    <div className="row"><div className="col p-3">
    
        <Formik
            initialValues = {{ speciesFilter : '', locationFilter : '', dateFilter: '', pageFilter: 1}}
            
            onSubmit={(values, {setSubmitting})=> {
                onFilter(values.speciesFilter, values.locationFilter, values.dateFilter, values.pageFilter)
                setSubmitting(false);
            }}
            
        >{({isSubmitting, values, handleChange, handleBlur, handleReset, dirty})=>(
        
            <Form>
            
            <div className="row">
            
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='speciesFilter'>Species</label>
                    <Field name='speciesFilter' id='speciesFilter' type='text' className="form-control"/>
                  </div>
                </div>
                
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='locationFilter'>Location</label>
                    <Field name='locationFilter' id='locationFilter' type='text' className="form-control"/>
                  </div>
                </div>
              
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='dateFilter'>Date</label>
                    <Field name='dateFilter' id='dateFilter' type='date' className="form-control"/>
                  </div>
                </div>
                  
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='pageFilter'>Page</label>
                    <select
                        name='pageFilter'
                        className="form-control"
                        id='pageFilter'
                        value={values.pageFilter}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
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
                    onFilter('', '', '', 1)
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

export default SightingContentFilter