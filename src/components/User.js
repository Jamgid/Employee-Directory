import Reacr from "react"

const user = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={props.image}></img>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p src={props.name}></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.phone}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href={props.email}>{props.email}</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.dob}</p>
                </div>
            </div>
        </div>
    )
}

export default user;