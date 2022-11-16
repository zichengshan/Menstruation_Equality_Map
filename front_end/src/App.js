import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
import Map from './components/Map'
import Footer from './components/Footer'
import { searchBuilding } from './request/api';
import React, {useState, useEffect} from 'react';
import {useGeolocated} from "react-geolocated"



function App() {
    const [buildingList, setBuildingList] = useState([]) 
    const {coords, isGeolocationAvailable, isGeolocationEnabled} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        })
    useEffect(() => {
        getBuildingList()
    }, [coords]);
    const getBuildingList = () => {
        !isGeolocationAvailable ? (
            console.log("Your browser does not support Geolocation")
        ) : !isGeolocationEnabled ? (
           console.log("Geolocation is not enabled")
        ) : coords ? (
            // console.log(coords.latitude)
            searchBuilding({
                "latitude" : coords.latitude,
                "longitude" : coords.longitude,
                "radius" : 0.5
            }).then(
                res=>{
                    let newArr = JSON.parse(JSON.stringify(res))
                    setBuildingList(newArr)
                }
            )
            
        ) : (
            console.log("Getting the location data&hellip")
        )
    }

    // const buildingList = [
    //     {
    //         "id": 43,
    //         "name": "Interdisciplinary Science and Engineering Building",
    //         "latitude": 33.64329624,
    //         "longitude": -117.843932,
    //         "distance": 20.0,
    //         "walkingTime": 1.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 2,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 71,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     },
    //                     {
    //                         "restroomId": 72,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 66,
    //         "name": "Physical Sciences Lecture Hall  PSLH  ",
    //         "latitude": 33.64360441,
    //         "longitude": -117.843939,
    //         "distance": 40.0,
    //         "walkingTime": 1.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 102,
    //                         "floorName": "1",
    //                         "roomNum": "L009"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 64,
    //         "name": "Physical Sciences Classroom Building  PSCB",
    //         "latitude": 33.64364051,
    //         "longitude": -117.843365,
    //         "distance": 50.0,
    //         "walkingTime": 1.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 100,
    //                         "floorName": "1",
    //                         "roomNum": "C105"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 70,
    //         "name": "Reines Hall  RH",
    //         "latitude": 33.64415959,
    //         "longitude": -117.8435014,
    //         "distance": 100.0,
    //         "walkingTime": 1.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 108,
    //                         "floorName": "1",
    //                         "roomNum": "B011"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 20,
    //         "name": "Croul Hall    CRH",
    //         "latitude": 33.64390931,
    //         "longitude": -117.84467,
    //         "distance": 120.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 31,
    //                         "floorName": "1",
    //                         "roomNum": "1303"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 65,
    //         "name": "Physical Sciences High Bay ",
    //         "latitude": 33.643639,
    //         "longitude": -117.845238,
    //         "distance": 150.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 101,
    //                         "floorName": "1",
    //                         "roomNum": "1920"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 73,
    //         "name": "Rowland Hall   RH",
    //         "latitude": 33.64455564,
    //         "longitude": -117.8442223,
    //         "distance": 150.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 113,
    //                         "floorName": "1",
    //                         "roomNum": "141"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 13,
    //         "name": "Bren Hall  DBH",
    //         "latitude": 33.64328216,
    //         "longitude": -117.8420153,
    //         "distance": 160.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 18,
    //                         "floorName": "1",
    //                         "roomNum": "1414"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 62,
    //         "name": "Natural Sciences II  NS2",
    //         "latitude": 33.64414168,
    //         "longitude": -117.8452844,
    //         "distance": 180.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 98,
    //                         "floorName": "1",
    //                         "roomNum": "1004"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 40,
    //         "name": "Information & Computer Science  ICS",
    //         "latitude": 33.64397383,
    //         "longitude": -117.8416794,
    //         "distance": 200.0,
    //         "walkingTime": 2.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 59,
    //                         "floorName": "1",
    //                         "roomNum": "166"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 60,
    //                         "floorName": "2",
    //                         "roomNum": "239"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 41,
    //         "name": "Information & Computer Science 2   ICS2",
    //         "latitude": 33.64442542,
    //         "longitude": -117.8417685,
    //         "distance": 220.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 61,
    //                         "floorName": "1",
    //                         "roomNum": "118"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 2,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 62,
    //                         "floorName": "2",
    //                         "roomNum": "230"
    //                     },
    //                     {
    //                         "restroomId": 63,
    //                         "floorName": "2",
    //                         "roomNum": "222"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 61,
    //         "name": "Natural Sciences I   NS1",
    //         "latitude": 33.64451982,
    //         "longitude": -117.8457092,
    //         "distance": 230.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 96,
    //                         "floorName": "1",
    //                         "roomNum": "1102"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 97,
    //                         "floorName": "2",
    //                         "roomNum": "2102"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 15,
    //         "name": "Calif.Inst. For Telecom & Info. Tech.  Calit 2",
    //         "latitude": 33.64284688,
    //         "longitude": -117.8412045,
    //         "distance": 240.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 2,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 20,
    //                         "floorName": "1",
    //                         "roomNum": "1201"
    //                     },
    //                     {
    //                         "restroomId": 21,
    //                         "floorName": "1",
    //                         "roomNum": "1004"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 26,
    //         "name": "Engineering Hall",
    //         "latitude": 33.64388762,
    //         "longitude": -117.8411948,
    //         "distance": 240.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 38,
    //                         "floorName": "1",
    //                         "roomNum": "1101"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 49,
    //         "name": "McGaugh Hall   MH",
    //         "latitude": 33.64536204,
    //         "longitude": -117.8447686,
    //         "distance": 250.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 78,
    //                         "floorName": "1",
    //                         "roomNum": "1225"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 72,
    //         "name": "Rockwell Engineering Center  REC",
    //         "latitude": 33.64392365,
    //         "longitude": -117.8405678,
    //         "distance": 300.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 112,
    //                         "floorName": "1",
    //                         "roomNum": "104"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 10,
    //         "name": "Biological Sciences Admin.  BSA",
    //         "latitude": 33.64590314,
    //         "longitude": -117.8428991,
    //         "distance": 300.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 13,
    //                         "floorName": "1",
    //                         "roomNum": "112"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 29,
    //         "name": "Engineering Tower   ET",
    //         "latitude": 33.64485066,
    //         "longitude": -117.8410327,
    //         "distance": 300.0,
    //         "walkingTime": 3.0,
    //         "floors": [
    //             {
    //                 "name": "4",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 41,
    //                         "floorName": "4",
    //                         "roomNum": "430"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 28,
    //         "name": "Engineering Lecture Hall ELH",
    //         "latitude": 33.64464722,
    //         "longitude": -117.8406624,
    //         "distance": 320.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 40,
    //                         "floorName": "1",
    //                         "roomNum": "102"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 24,
    //         "name": "Engineering  & Computing Trailer  ECT",
    //         "latitude": 33.64406551,
    //         "longitude": -117.8401368,
    //         "distance": 340.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 36,
    //                         "floorName": "1",
    //                         "roomNum": "125"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 11,
    //         "name": "Biological Sciences III",
    //         "latitude": 33.64550388,
    //         "longitude": -117.8462589,
    //         "distance": 340.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 3,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 14,
    //                         "floorName": "1",
    //                         "roomNum": "1604"
    //                     },
    //                     {
    //                         "restroomId": 15,
    //                         "floorName": "1",
    //                         "roomNum": "1002"
    //                     },
    //                     {
    //                         "restroomId": 16,
    //                         "floorName": "1",
    //                         "roomNum": "1206"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 86,
    //         "name": "Steinhaus Hall  SH",
    //         "latitude": 33.64638185,
    //         "longitude": -117.8447991,
    //         "distance": 360.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 2,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 130,
    //                         "floorName": "1",
    //                         "roomNum": "181"
    //                     },
    //                     {
    //                         "restroomId": 131,
    //                         "floorName": "1",
    //                         "roomNum": "118"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 25,
    //         "name": "Engineering Gateway  EG",
    //         "latitude": 33.64295206,
    //         "longitude": -117.8396326,
    //         "distance": 380.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 37,
    //                         "floorName": "1",
    //                         "roomNum": "E1126"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 27,
    //         "name": "Engineering Laboratory Facility   ELF",
    //         "latitude": 33.64379143,
    //         "longitude": -117.8396508,
    //         "distance": 380.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 39,
    //                         "floorName": "1",
    //                         "roomNum": "128"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 76,
    //         "name": "Science Library  SLIB",
    //         "latitude": 33.64592023,
    //         "longitude": -117.8465633,
    //         "distance": 400.0,
    //         "walkingTime": 4.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 4,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 116,
    //                         "floorName": "1",
    //                         "roomNum": "106"
    //                     },
    //                     {
    //                         "restroomId": 117,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     },
    //                     {
    //                         "restroomId": 118,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     },
    //                     {
    //                         "restroomId": 119,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 69,
    //         "name": "Qureshey Research Laboratory  QRL",
    //         "latitude": 33.64679572,
    //         "longitude": -117.8457079,
    //         "distance": 440.0,
    //         "walkingTime": 5.0,
    //         "floors": [
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 107,
    //                         "floorName": "2",
    //                         "roomNum": "210C"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 12,
    //         "name": "Bonney Research Laboratory   BRL",
    //         "latitude": 33.64676308,
    //         "longitude": -117.8461875,
    //         "distance": 450.0,
    //         "walkingTime": 5.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 17,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 4,
    //         "name": "Anteater Learning Pavillion",
    //         "latitude": 33.64737769,
    //         "longitude": -117.8443778,
    //         "distance": 460.0,
    //         "walkingTime": 5.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 5,
    //                         "floorName": "1",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 6,
    //                         "floorName": "2",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "3",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 7,
    //                         "floorName": "3",
    //                         "roomNum": "N/A"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 38,
    //         "name": "Humanities Hall  HH",
    //         "latitude": 33.64746391,
    //         "longitude": -117.8440012,
    //         "distance": 470.0,
    //         "walkingTime": 5.0,
    //         "floors": [
    //             {
    //                 "name": "1",
    //                 "validRoomNum": 2,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 54,
    //                         "floorName": "1",
    //                         "roomNum": "123"
    //                     },
    //                     {
    //                         "restroomId": 55,
    //                         "floorName": "1",
    //                         "roomNum": "122"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "2",
    //                 "validRoomNum": 1,
    //                 "restrooms": [
    //                     {
    //                         "restroomId": 56,
    //                         "floorName": "2",
    //                         "roomNum": "272"
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]

    return (
        <div className="App">
            <Navbar/>
            <div className='section'>
                <Map searchResult={buildingList}/>
                <List searchResult={buildingList}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
