import React from 'react'
import axios from 'axios'
import LocationContentItem from './LocationContentItem'
import LocationContentFilter from './LocationContentFilter'

class LocationContentDisplay extends React.Component {
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
        let url = 'https://lwbjbirbblog.herokuapp.com/dataapis/location/?'
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
            listItems = <p>Nothing here!</p>
        } else {
            listItems = this.state.queryset.map(i => <LocationContentItem item={i}/>)
        }
        
        return (
            <div className="container-fluid">
                <div className="row"><div className="col p-0">
                <nav class="navbar navbar-expand-lg mt-2 p-0">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#LocationContentFilterNavbar" aria-controls="LocationContentFilterNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <button class="btn btn-secondary">Expand Filter</button>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="LocationContentFilterNavbar">
                    <div className="container-fluid">
                      <LocationContentFilter onFilter={this.filter} resultsCount={this.state.resultsCount} />
                    </div>
                  </div>
                </nav>
                </div></div>
                
                <div className="row justify-content-between">
                  {listItems}
                </div>
            
            </div>
        )        
    }
}

export default LocationContentDisplay