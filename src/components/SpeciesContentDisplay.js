import React from 'react'
import axios from 'axios'
import SpeciesContentItem from './SpeciesContentItem'
import LocationSpeciesContentFilter from './LocationSpeciesContentFilter'

class SpeciesContentDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queryset : [],
            nameFilter : '',
            pageFilter : 1,
            resultsCount : 0,
        }
        
        this.refreshList = this.refreshList.bind(this)
        this.filter = this.filter.bind(this)
    }
    
    refreshList() {
        let url = 'https://lwbjbirbblog.herokuapp.com/dataapis/species/?'
        url += "name=" + this.state.nameFilter + '&'
        url += "page=" + this.state.pageFilter
        
        axios.get(url)
        .then(
            res => this.setState({queryset: res.data.results, resultsCount : res.data.count })
        )
    }
    
    filter(nameFilter, pageFilter) {
        this.setState({nameFilter: nameFilter, pageFilter: pageFilter}, ()=>{this.refreshList()})
    }
    
    componentDidMount() {
        this.refreshList()
    }
    
    render() {
        let listItems
        if (this.state.queryset.length === 0) {
            listItems = <h2 className="p-5 my-2">Nothing here!</h2>
        } else {
            listItems = this.state.queryset.map(i => <SpeciesContentItem item={i} />)
        }
        
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg mt-2">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#SpeciesContentFilterNavbar" aria-controls="SpeciesContentFilterNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <button class="btn btn-secondary">Expand Filter</button>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="SpeciesContentFilterNavbar">
                    <div className="container-fluid">
                        <LocationSpeciesContentFilter onFilter={this.filter} resultsCount={this.state.resultsCount} />
                    </div>
                  </div>
                </nav>
                    
                <div className="row justify-content-between">
                    {listItems}
                </div>
                    
            </div>
        )        
    }
}

export default SpeciesContentDisplay