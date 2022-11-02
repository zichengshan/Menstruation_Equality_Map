import React, {useState} from 'react'
import {BsBuilding} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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

      const floorList = data.floors.map(floor => {
        return <div className='pop--floor'>
            <br />
            <h2 className='pop--floorName'>{floor.name}</h2>
            <p className='pop--available'><b>{floor.validRoomNum}</b> restrooms menstruation products available</p>
        </div>
      })

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
            
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="pop">
                <div className="pop--title">
                    <BsBuilding size='2.5em' />
                    <div className='pop--detail'>
                        <h3 className='pop--buildingName'>{data.name}</h3>
                        <p className="pop--distance">{data.distance}m | {data.walkingTime} mins walking</p>
                    </div>
                    <a className="pop--close" onClick={closeModal}> (X) </a>
                </div>
                {floorList}

                </div>
            </Popup>
        </div>

    )
}

export default Item