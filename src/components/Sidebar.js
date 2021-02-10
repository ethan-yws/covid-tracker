import React from 'react'
import "./styles/Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="data">
                <h4>Covid Cases in Australia</h4>
                <p>Total confirmed</p>
                <p>300,0000</p>
            </div>
            <div className="user-input">
                <h4>Change City</h4>
                <p>Sydney</p>
                <p>Melbourne</p>
                <p>Brisbane</p>
                <p>Gold Coast</p>
            </div>
        </div>
    )
}

export default Sidebar
