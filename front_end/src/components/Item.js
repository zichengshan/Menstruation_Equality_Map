import React from 'react'
import {BsBuilding} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

function Item() {
    return (
        <div className='item'>
            <BsBuilding size='2em' />
            <div className='item--body'>
                <h3 className='item--header'>Name</h3>
                <div className='item--info'>
                    <p className='item--text'>3 restrooms available</p>
                    <MdLocationOn size='1.3em'  />
                    <p className='item--distance'>150 m</p>
                </div>
            </div>
            
        </div>

    )
}

export default Item