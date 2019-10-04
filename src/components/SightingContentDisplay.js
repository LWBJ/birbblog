import React from 'react'
import axios from 'axios'
import SightingContentFilter from './SightingContentFilter'
import SightingContentItem from './SightingContentItem'

class SightingContentDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            queryset: [],
            speciesFilter: '',
            locationFilter: '',
            dateFilter: '',
            pageFilter: 1,
            resultsCount: 0,
        }
        
        this.refreshList = this.refreshList.bind(this)
        this.filter = this.filter.bind(this)
    }
    
    refreshList() {
        
        let url = 'https://lwbjbirbblog.herokuapp.com/dataapis/birbsighting/?'
        url += 'species=' + this.state.speciesFilter + '&'
        url += 'location=' + this.state.locationFilter + '&'
        url += 'date=' + this.state.dateFilter + '&'
        url += 'page=' + this.state.pageFilter
        
        axios.get(url)
        .then(
            res=>this.setState({queryset: res.data.results, resultsCount: res.data.count})
        )
    }
    
    filter(speciesFilter, locationFilter, dateFilter, pageFilter) {
        
        this.setState({ 
            speciesFilter : speciesFilter,
            locationFilter : locationFilter,
            dateFilter : dateFilter,
            pageFilter : pageFilter,
        }, ()=>this.refreshList())
    }
    
    componentDidMount() {
        this.refreshList()
    }
    
    render(){
        
        let listItems
        if (this.state.queryset.length === 0 ) {
            listItems = <h3>Nothing here!</h3>
        } else {
            listItems = this.state.queryset.map(data => <SightingContentItem item={data}/>)
        }
        
        return (
            <div className="container-fluid">
              <nav class="navbar navbar-expand-lg mt-2">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#SightingContentFilterNavbar" aria-controls="SightingContentFilterNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <button class="btn btn-secondary">Expand Filter</button>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="SightingContentFilterNavbar">
                    <div className="container-fluid">
                        <SightingContentFilter onFilter={this.filter} resultsCount={this.state.resultsCount}/>
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

export default SightingContentDisplay