import React from "react"
import "./Card.css"

import checkIcon from "./../../images/icon-check.svg"
// Start

class CheckItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="check_item">
                <img src={checkIcon} alt="check icon" />
                <p>{this.props.mess}</p>
            </div>
        )
    }
}


class Start extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="Start">
                <div className="check_list">
                    <CheckItem  mess="Unlimited websites"/>
                    <CheckItem  mess="100% data ownership"/>
                    <CheckItem  mess="Email reports"/>
                </div>
                <button type="submit" >Start my trial</button>
            </div>
        )
    }
}

// Billing
class Views extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            dolar : 16,
            views : 100,
            discount : 0.75,
            per : "month"
        }
    }

    render() {
        return (
            <div class="views">
                <p>{this.state.views}K PAGEVIEWS</p>
                <div className="prize">
                    <h1>${this.state.dolar.toFixed(2)}</h1>
                    <p>/{this.state.per}</p>
                </div>
            </div>
        )
    }
}
class Per extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            per : "25% discount"
        }
    }

    render(){
        return(
            <div class="per">
                <p>Monthly Billing</p>
                <div className="switch">
                    <div className="switch_dot"></div>
                </div>
                <div className="year">
                    <p>Yearly Billing</p>
                    <span>{this.state.per}</span>
                </div>
            </div>
        )
    }
}
class Range extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="range">
                <input 
                    type="range" 
                    id="range_input" 
                    className="range_input" 
                    name="range_input"
                    min="1"
                    max="5"
                    defaultValue="3"
                    step="1"
                />
            </div>
        )
    }
}


class Billing extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Billing">
                <Views />
                <Range />
                <Per />
            </div>
        )
    }
}


//  Main
export default class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Main">
                <div className="Card">
                    <Billing />
                    <Start />
                </div>
            </div>
        )
    }
}