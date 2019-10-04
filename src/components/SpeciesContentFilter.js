import React from 'react'
import {Formik, Form, Field} from 'formik'

function SpeciesContentFilter(props) {
    let onFilter = props.onFilter
    
    let pageOptions = []
    let noPages = Math.ceil(props.resultsCount / 100)
    for (let i=1; i <= noPages; i++) {
        pageOptions.push(<option value={i} label={i} />)
    }
    
    return(
    <div className="row"><div className="col p-3">

        <Formik
            initialValues = {{ nameFilter: '', pageFilter: 1, rarityFilter: ''}}
            
            onSubmit={(values, {setSubmitting})=> {
                onFilter(values.nameFilter, values.pageFilter, values.rarityFilter)
                setSubmitting(false);
            }}
            
        >{({isSubmitting, values, handleChange, handleBlur, handleReset, dirty})=>(
        
            <Form>            
            
            <div className="row">
            
                <div className="col-12 col-sm-6">
                  <div className="form-group">
                    <label htmlFor='speciesNameFilter'>Name</label>
                    <Field name='nameFilter' id='speciesNameFilter' type='text' className="form-control"/>
                  </div>
                </div>
                
                <div className="col">
                  <div className="form-group">
                    <label htmlFor='speciesRarityFilter'>Rarity</label>
                    <select
                        name='rarityFilter'
                        id='speciesRarityFilter'
                        value={values.rarityFilter}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        className="form-control"
                    >
                        <option value="" label="All"/>
                        <option value="C" label="Common"/>
                        <option value="U" label="Uncommon"/>
                        <option value="R" label="Rare"/>
                    </select>
                  </div>
                </div>
                
                <div className="col">
                  <div className="form-group">
                    <label htmlFor='speciesPageFilter'>Page</label>
                    <select
                        name='pageFilter'
                        id='speciesPageFilter'
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
                    onFilter('', 1, '')
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

export default SpeciesContentFilter