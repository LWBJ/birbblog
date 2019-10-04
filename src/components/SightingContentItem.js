import React from 'react'

function SightingContentItem(props) {
    
    let picture
    if (props.item.picture) {
        picture = <img src={props.item.picture} alt="bird sighting" className='img-fluid'/>
    }
    
    return (
        <div id={props.item.pk} className="col-md-6 my-2"><div className="border border-secondary rounded p-5 h-100 content-item">
            <h2>{props.item.species_text}</h2>
            {picture}
            <br />
            <p><strong>Rarity:</strong> {props.item.rarity}</p>
            <p><strong>Location:</strong> {props.item.location_text}</p>
            <p><strong>Date:</strong> {props.item.date}</p>
            <p><strong>Comments:</strong> {props.item.comments}</p>
        </div></div>
    )
}

export default SightingContentItem