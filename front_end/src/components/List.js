import React from "react"
import Item from "./Item"

function List({searchResult}) {
   
    const buildings = searchResult.map(d => <Item
        key = {d.id}
        building_id={d.id}
        building_name={d.name}
        building_lat={d.latitude}
        building_lng={d.longitude}
        distance={d.distance}
        walking_time={d.walkingTime}
        floors = {d.floors}
    />);
    return (
        <div className="list">
            {buildings}
        </div>
    )
}

export default List