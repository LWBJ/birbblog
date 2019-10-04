import React from 'react'

function LocationContentItem(props) {
    
    let species_set_text = (props.item.species_set_text + '').split(',').map(i => <li>{i}</li>)
    let birbSighting = (props.item.birbsighting_set_text + '').split(',').map(i => <li>{i}</li>)
    
    return (
        <div id={props.item.pk} className="col-lg-6 my-2"><div className="border border-secondary rounded p-3 p-lg-5 h-100 content-item">
          <h2>{props.item.name}</h2>
          <br />
          <p><strong>Species:</strong></p> <ul>{species_set_text}</ul>
          <p><strong>Sightings:</strong></p> <ul>{birbSighting}</ul>
        </div></div>
    )
}

export default LocationContentItem