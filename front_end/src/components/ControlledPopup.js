import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {BsBuilding} from 'react-icons/bs'

const ControlledPopup = ({id, open, closeModal}) => {
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
            <br/>
            <h2 className='pop--floorName'>{floor.name}</h2>
            <p className='pop--available'><b>{floor.validRoomNum}</b> restrooms menstruation products available</p>
        </div>
    })

    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="pop">
                <div className="pop--title">
                    <BsBuilding size='2.5em'/>
                    <div className='pop--detail'>
                        <h3 className='pop--buildingName'>{data.name}</h3>
                        <p className="pop--distance">{data.distance}m | {data.walkingTime} mins walking</p>
                    </div>
                    <a className="pop--close" onClick={closeModal}> (X) </a>
                </div>
                {floorList}
            </div>
        </Popup>
    )
}

export default ControlledPopup