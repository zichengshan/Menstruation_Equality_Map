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
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        })
    useEffect(() => {
        getBuildingList()

    }, []);
    const getBuildingList = () => {
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
    }
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
