import React from "react"

const user = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p><u>{props.first_name}  {props.last_name}</u></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.gender}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Email: <a href={props.email}>{props.email}</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>IP address: {props.ip_address}</p>
                </div>
            </div>
        </div>
    )
}

export default user;