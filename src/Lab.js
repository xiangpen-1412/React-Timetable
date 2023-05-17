import { Component } from 'react';
import './index.css';
 
/*
For each course
- Named
- color
- Professor name
- sections
    - Lecture times and lecture dates
    - Highlight color
 
*/
 
 
 
 
class Lab extends Component{
 
    render() {
        const {paletteLab} = this.props
 
        const labs = paletteLab.map((lab, index) => {
            return (
                <div
                    key={index}
                    onClick={""}
                   
                    onDragStart = {(event) => this.props.onDragStart(event, lab)}
                    onDragEnd = {(event) => this.props.onDragStop(event)}
                    onContextMenu={(event) => this.props.handlepaletteLabContextMenu(event, lab)}
                    style={{ backgroundColor: "lightgray"}}
 
                    className="draggable"
                    courseInfo={lab}
                    draggable
                >
                    <b> {lab.name} </b>
                </div>
            )
        })
 
        return (
            <p>
                <div className="lab-container">
                    <h4> Labs </h4>
                    {labs}
                </div>
            </p>
        )
    }       
}
 
export default Lab