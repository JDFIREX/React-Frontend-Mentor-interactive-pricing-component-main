import React, { useLayoutEffect, useState } from "react"
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
    }


    render() {
        return (
            <div class="views">
                <p>{this.props.views} PAGEVIEWS</p>
                <div className="prize">
                    <h1>${this.props.prize.toFixed(2)}</h1>
                    <p> /{this.props.time}</p>
                </div>
            </div>
        )
    }
}


class Per extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            justify : "flex-start",
            desktop : true
        }
        this.SwitchChange = this.SwitchChange.bind(this)
    }

    componentDidMount(){
        if(window.innerWidth <= 800){
            this.setState({
                desktop : false
            })
            this.props.onYearChange()
        }
        window.addEventListener("resize", () => {
            if(window.innerWidth <= 800 && this.state.desktop){
                this.setState({
                    desktop : false
                })
                this.props.onYearChange()
            }else if(window.innerWidth > 800 && !this.state.desktop){
                this.setState({
                    desktop : true
                })
                this.props.onYearChange()
            }
        })
    }


    SwitchChange(event){
        this.props.onMonthlyChange(!this.props.monthly)
        if(this.props.monthly){
            this.setState({
                justify : "flex-end"
            })
        }else {
            this.setState({
                justify : "flex-start"
            })
            
        }
    }

    render(){
        return(
            <div class="per">
                <p>Monthly Billing</p>
                <div className="switch" monthly={this.props.monthly} onClick={this.SwitchChange}  style={{justifyContent : this.state.justify}}>
                    <div className="switch_dot"></div>
                </div>
                <div className="year">
                    <p>Yearly Billing</p>
                    <p className="year_discount">{this.props.year}</p>
                </div>
            </div>
        )
    }
}


class Range extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value : 3
        }
        this.RangeChange = this.RangeChange.bind(this)
    }

    RangeChange(event){
        this.setState({
            value : event.target.value
        })
        this.props.onValueChange(event.target.value)
    }


    render() {
        return (
            <div className="range">
            <label for="range_input">
                <input 
                        type="range" 
                        id="range_input" 
                        className="range_input" 
                        name="range_input"
                        min="1"
                        max="5"
                        value={this.state.value}
                        onChange={this.RangeChange}
                        defaultValue="3"
                        step="1"
                    />
            </label>
            </div>
        )
    }
}


function ChangePrize(value,time,discount){
    switch(value){
        case 1 : 
            return [1,time ? 8 : ((8 * 12) * discount),"10K"];
        break;
        case 2 : 
            return [2,time ? 12 : ((12 * 12) * discount),"50K"];
        break;
        case 3 : 
            return [3,time ? 16 : ((16 * 12) * discount),"100K"];   
        break;
        case 4 : 
            return [4,time ? 24 : ((24 * 12) * discount),"500K"];
        break;
        case 5 : 
            return [5,time ? 36 : ((36 * 12) * discount),"1M"];
        break;
    }
}



class Billing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : 3,
            year : "25% discount",
            time : "month",
            prize : 16,
            views : "100K",
            discount : 0.75,
            monthly : true
        }

        this.ValueChange = this.ValueChange.bind(this)
        this.MonthlyChange = this.MonthlyChange.bind(this)
        this.onYearChange = this.onYearChange.bind(this)
    }

    ValueChange(value) {
        value = Number(value)
        let [v,prize,views] = ChangePrize(value,this.state.monthly,this.state.discount) 
        this.setState({
            value : v,
            prize : prize,
            views : views
        })
    }
    MonthlyChange(event) {
        this.setState(state => ({
            monthly : event,
            time : state.monthly ? "year" : "month",
            prize : state.monthly ? 
                ((state.prize * 12) * state.discount) : 
                ((state.prize / state.discount) / 12)
        }))
    }
    onYearChange(){
        if(this.state.year == "25% discount"){
            this.setState({
                year : "-25%"
            })
        }else {
            this.setState({
                year : "25% discount"
            })
        }
    }

    render(){
        return(
            <div className="Billing">
                <Views 
                    views={this.state.views} 
                    prize={this.state.prize}
                    time={this.state.time}
                    discount={this.state.discount}
                />
                <Range 
                    value={this.state.value}
                    onValueChange={this.ValueChange}
                />
                <Per 
                    data-monthly={this.state.monthly}
                    year={this.state.year}
                    monthly={this.state.monthly}
                    onMonthlyChange={this.MonthlyChange}
                    onYearChange={this.onYearChange}
                />
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