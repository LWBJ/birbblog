import React from 'react'
import SightingContentDisplay from './SightingContentDisplay'
import SpeciesContentDisplay from './SpeciesContentDisplay'
import LocationContentDisplay from './LocationContentDisplay'

function MainDisplay(props) {
    return(    
      <div className="container"><div className="row"><div className="col">
      
        <ul class="nav nav-tabs px-2" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active tabbo" id="SightingContentDisplay-tab" data-toggle="tab" href="#SightingContentDisplay" role="tab" aria-controls="SightingContentDisplay" aria-selected="true">Sightings</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link tabbo" id="SpeciesContentDisplay-tab" data-toggle="tab" href="#SpeciesContentDisplay" role="tab" aria-controls="SpeciesContentDisplay" aria-selected="false">Species</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link tabbo" id="LocationContentDisplay-tab" data-toggle="tab" href="#LocationContentDisplay" role="tab" aria-controls="LocationContentDisplay" aria-selected="false">Locations</a>
          </li>
        </ul>
        
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="SightingContentDisplay" role="tabpanel" aria-labelledby="SightingContentDisplay-tab">
            <SightingContentDisplay />
          </div>
        
          <div class="tab-pane fade p-0" id="SpeciesContentDisplay" role="tabpanel" aria-labelledby="SpeciesContentDisplay-tab">
            <SpeciesContentDisplay />
          </div>
        
          <div class="tab-pane fade" id="LocationContentDisplay" role="tabpanel" aria-labelledby="LocationContentDisplay-tab">
            <LocationContentDisplay />
          </div>
        </div>

      </div></div></div>
    )
}

export default MainDisplay      