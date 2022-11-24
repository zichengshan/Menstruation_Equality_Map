import React from "react"
import {Bars} from 'react-loader-spinner'


function Loading() {
    return (
        <div className="loadingBar">
            <Bars  heigth="100" width="100" color="#0064a4" ariaLabel="loading-indicator" margin-left="auto"/>
        </div>
    )
}
export default Loading