import { Component } from 'react';
import './index.css';
 
class OptionDashBoard extends Component{
 
 
    render() {
        const {sectionDashboard} = this.props
 
        var optionDivCollector = sectionDashboard.map((item,itemIndex) => {
            return(
                <div classname = "optionDiv">
                    <b>{"Section: "}{item.Section} </b>
                    <ul>
                        <li>Times: {item.Times}</li>
                        <li>Room: {item.Room}</li>
                        <li>Professor: {item.Professor}</li>
                    </ul>
                </div>
            )
        })
 
        if(sectionDashboard.length!== 0) {
            return(
                <div className="optionWrapper">
                    <h4>Currently Selected: {sectionDashboard[0].name}</h4>
                    {optionDivCollector}
                </div>
            )
        }
        else{
            <div className="emptyOptionWrapper">
 
            </div>
        }
    }
}
export default OptionDashBoard