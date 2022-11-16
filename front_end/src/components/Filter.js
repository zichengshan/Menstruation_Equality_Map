import React from 'react'
// import {useDebounce} from "use-debounce"
import Select from 'react-select'

function Filter(props) {

    function handleChange(event) {
        props.SetDistance(event.target.value)
    }

    return (
        <div className='filter'>
            <select 
                id="distance"
                value={props.distance}
                onChange={handleChange}
                name="select-distance"
                className='filter--select'
            >
                <option value="">-- Distance Filter  --</option>
                <option value="0.1">0.1 mile</option>
                <option value="0.2">0.2 mile</option>
                <option value="0.3">0.3 mile</option>
                <option value="0.4">0.4 mile</option>
                <option value="0.5">0.5 mile</option>
                <option value="20">ALL</option>
        
            </select>
         </div>
    
    )

}

export default Filter