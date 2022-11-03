import React from "react"
import Item from "./Item"

function List() {
    const data = [
        {
            building_id: 1,
            building_name: "Langson library",
            building_lat: 3,
            building_lng: 4,
            distance: 150,
            walking_time: 15

        },
        {
            building_id: 2,
            building_name: "Jack Langson",
            building_lat: 35,
            building_lng: 4,
            distance: 160,
            walking_time: 16
        },
        {
            building_id: 3,
            building_name: "Student Services II",
            building_lat: 3,
            building_lng: 4,
            distance: 170,
            walking_time: 16
        },
        {
            building_id: 4,
            building_name: "IEEE Student Branch",
            building_lat: 3,
            building_lng: 4,
            distance: 190,
            walking_time: 18

        },
        {
            building_id: 5,
            building_name: "UCI School of Social Ecology",
            building_lat: 35,
            building_lng: 4,
            distance: 200,
            walking_time: 19
        },
        {
            building_id: 6,
            building_name: "Humanities Hall (HH)",
            building_lat: 3,
            building_lng: 4,
            distance: 210,
            walking_time: 19
        },
        {
            building_id: 7,
            building_name: "Science Library SLIB",
            building_lat: 3,
            building_lng: 4,
            distance: 220,
            walking_time: 20

        },
        {
            building_id: 8,
            building_name: "Department of Molecular Biology and Biochemistry",
            building_lat: 35,
            building_lng: 4,
            distance: 225,
            walking_time: 20
        },
        {
            building_id: 9,
            building_name: "Rowland Hall",
            building_lat: 3,
            building_lng: 4,
            distance: 228,
            walking_time: 20
        },
        {
            building_id: 10,
            building_name: "School of Biological Sciences",
            building_lat: 3,
            building_lng: 4,
            distance: 240,
            walking_time: 21

        },
        {
            building_id: 11,
            building_name: "Interdisciplinary Science and Engineering Building (ISEB)",
            building_lat: 35,
            building_lng: 4,
            distance: 255,
            walking_time: 22
        },
        {
            building_id: 12,
            building_name: "University Club by Wedgewood Weddings",
            building_lat: 3,
            building_lng: 4,
            distance: 260,
            walking_time: 23
        },
        {
            building_id: 13,
            building_name: "Natural Sciences II",
            building_lat: 3,
            building_lng: 4,
            distance: 270,
            walking_time: 24

        },
        {
            building_id: 14,
            building_name: "Physical Sciences Lecture Hall (PSLH)",
            building_lat: 35,
            building_lng: 4,
            distance: 290,
            walking_time: 25
        },
        {
            building_id: 15,
            building_name: "Multipurpose Science and Technology Building (MSTB)",
            building_lat: 3,
            building_lng: 4,
            distance: 320,
            walking_time: 29
        }
    ]
    const buildings = data.map(d => <Item
        building_id={d.building_id}
        building_name={d.building_name}
        building_lat={d.building_lat}
        building_lng={d.building_lng}
        distance={d.distance}
        walking_time={d.walking_time}
    />);
    return (
        <div className="list">
            {buildings}
        </div>
    )
}

export default List