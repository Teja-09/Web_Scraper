import React from "react";
import "./lab.css"

class Lab extends React.Component
{    
    constructor(props)
    {
        super(props)
        this.handle = this.handle.bind(this);
    }

    handle(e)
    {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({[name]: val})
    }

    render(){
        return(
            <div className="whole">
                <div className="heading"><h3>Indian Elections 2019</h3></div>
                <form  action="http://localhost:8000" className = "Form"  method="POST" >
                    <label>Google Search</label>
                    <input type="text"></input><br></br>
                    <input className="subbutton" type = "submit"  value="Submit"/>
                </form>
            </div>

        )   
    }
}
export default Lab;