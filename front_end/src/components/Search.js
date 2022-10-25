import React, { useState } from 'react'
// import {useDebounce} from "use-debounce"
import Select from 'react-select'

function Search() {
    const [product, SetProduct] = useState(null)
    // const [debounceValue] = useDebounce(product, 300)

    const options = [
        { value: 'Pad', label: 'Pad' },
        { value: 'Tampon', label: 'Tampon' },
      ];

    return (
        <Select 
            defaultValue={product}
            onChange={SetProduct}
            options={options}
            placeholder = "Select Product..."
            className="nav--select"
        />
    )    
}

export default Search