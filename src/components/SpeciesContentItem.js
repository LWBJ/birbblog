import React from 'react'

function SpeciesContentItem(props) {
    let picture
    if (props.item.picture) {
        picture = <img src={props.item.picture} alt="birb" className="img-fluid"/>
    }
    
    let location_text = (props.item.location_text + '').split(',').map(i => <li>{i}</li>)
    let birbSighting = (props.item.birbsighting_set_text + '').split(',').map(i => <li>{i}</li>)
    
    return (
        <div id={props.item.pk} className="col-md-6 my-2"><div className="border border-secondary rounded p-5 h-100 content-item">
          <h2>{props.item.name}</h2>
          {picture}
          <br />
          <p><strong>Rarity:</strong> {props.item.rarity_text}</p>
          <p><strong>Locations:</strong></p>  <ul>{location_text}</ul>
          <p><strong>Sightings:</strong></p>  <ul>{birbSighting}</ul>
        </div></div>
    )
}

export default SpeciesContentItem