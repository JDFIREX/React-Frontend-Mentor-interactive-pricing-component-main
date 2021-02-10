import React, { useLayoutEffect, useState } from "react"
import ReactDOM from "react-dom"
import "./Index.css"
import design from "./../design/mobile-design.jpg"
import bgpattern from "./../images/bg-pattern.svg"

import Header from "./components/Header"
import Main from "./components/Card"


function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


function Bgpattern() {
    let width = useWindowSize()
    let pattern = width <= 800 ? <div className="bg-pattern"></div> : <img src={bgpattern} className="bg-pattern" />;

    window.addEventListener("resize", (e) => {
        if(width <= 800){
            pattern = <div className="bg-pattern"></div>
        }else{
            pattern = <img src={bgpattern} className="bg-pattern" />
        }
    })

    return pattern
}

class Index extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <img src={design} className="design"/>
                <Bgpattern />
                <Header />
                <Main />
            </>
        )
    }
}

ReactDOM.render(<Index />, document.querySelector('.root'))