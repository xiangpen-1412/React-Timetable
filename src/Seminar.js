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
 
 
 
 
class Seminar extends Component{
 
    render() {
        const {paletteSeminars} = this.props
 
        const seminars = this.props.paletteSeminars.map((seminar, index) => {
            return (
                <div
                    key={index}
                    onClick={""}
                   
                    onContextMenu = {(event) => this.props.handlepaletteSeminarContextMenu(event, seminar)}
                    onDragStart = {(event) => this.props.onDragStart(event, seminar)}
                    onDragEnd = {(event) => this.props.onDragStop(event)}
                    style={{ backgroundColor: "lightgray"}}
 
                    className="draggable"
                    courseInfo={seminar}
                    draggable
                >
                    <b>{seminar.name}</b>
                </div>
            )
        })
 
        return (
            <p>
                <div className="seminar-container">
                    <h4> Seminars </h4>
                    {seminars}
                </div>
            </p>
        )
    }       
}
 
export default Seminar