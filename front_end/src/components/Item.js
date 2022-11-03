import React, {useState} from 'react'
import {BsBuilding} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import 'reactjs-popup/dist/index.css'
import ControlledPopup from './ControlledPopup'

function Item() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div className='item' onClick={() => setOpen(o => !o)}>
            <BsBuilding size='2em'/>
            <div className='item--body'>
                <h3 className='item--header'>Name</h3>
                <div className='item--info'>
                    <p className='item--text'>3 restrooms available</p>
                    <MdLocationOn size='1.3em'/>
                    <p className='item--distance'>150 m</p>
                </div>
            </div>

            <ControlledPopup
                id="id"
                open={open}
                // setOpen={setOpen}
                closeModal={closeModal}
            />
        </div>
    )
}

export default Item