import React from "react"
import ReactDOM from "react-dom"
import "./Index.css"
import design from "./../design/desktop-design.jpg"
import bgpattern from "./../images/bg-pattern.svg"

import Header from "./components/Header"
import Main from "./components/Card"

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <img src={design} className="design"/>
                <img src={bgpattern} className="bg-pattern" />
                <Header />
                <Main />
            </>
        )
    }
}

ReactDOM.render(<Index />, document.querySelector('.root'))