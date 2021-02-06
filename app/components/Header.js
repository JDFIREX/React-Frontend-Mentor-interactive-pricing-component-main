import React from "react"
import "./Header.css"
import circles from "./../../images/pattern-circles.svg"

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Header">
                <img src={circles} alt="circles" />
                <h1>Simple, traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial. No cradit card required.</p>
            </div>
        )
    }
}