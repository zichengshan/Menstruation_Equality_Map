import React, {useState} from 'react'
import {BsBuilding} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import 'reactjs-popup/dist/index.css'
import ControlledPopup from './ControlledPopup'

function Item() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const data = {
      "distance": 270,
      "floors": [
        {
          "id": "1",
          "name": "Floor 1",
          "validRoomNum": 1
        },
        {
          "id": "2",
          "name": "Floor 2",
          "validRoomNum": 3
        },
        {
          "id": "3",
          "name": "Floor 4",
          "validRoomNum": 2
        }
      ],
      "id": "building_id",
      "latitude": 0,
      "longitude": 0,
      "name": "Langson Library",
      "walkingTime": 3
    }

    return (
        <div className='item' onClick={() => setOpen(o => !o)}>
            <BsBuilding size='2em' />
            <div className='item--body'>
                <h3 className='item--header'>Name</h3>
                <div className='item--info'>
                    <p className='item--text'>3 restrooms available</p>
                    <MdLocationOn size='1.3em'  />
                    <p className='item--distance'>150 m</p>
                </div>
            </div>

            <ControlledPopup 
              data={data}
              open={open}
              setOpen={setOpen}
              closeModal={closeModal}
            />
        </div>
    )
}

export default Item