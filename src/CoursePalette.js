import { Component } from 'react';
 
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './index.css';
 
 
class CoursePalette extends Component{
   
 
    render() {
        const {paletteCourses} = this.props
 
        const courses = paletteCourses.map((course, index) => {
 
            return (
               
                <div
                    onDragStart = {(event) => this.props.onDragStart(event, course)}
                    // onMouseEnter = {(event) => this.props.showToolTip(event)}
                    onMouseDown ={(event) => this.props.hideToolTip(event)}
                    onMouseLeave = {(event) => this.props.hideToolTip(event)}

                    onContextMenu={(event) => this.props.handlepaletteCourseContextMenu(event, course)}
 
                    onDragEnd = {(event) => this.props.onDragStop(event)}
                    style={{ backgroundColor: "lightgray"}}
                    className="draggable" draggable
 
                    data-tooltip-content={course.description} data-tooltip-id='xtoolTip1'
                    extendedName={course.extendedName} accreditionUnits={course.accreditionUnits}
                >
                   <b> {course.name} </b>
                   
                   <ReactTooltip id="toolTip1"  isOpen={this.props.isToolTipOpen} render={({content, activeAnchor})=>  (
                            <div className='TOOLTIPPPP'>
                            <b>{activeAnchor?.getAttribute('extendedName')}</b>
                            <br/>
                            <b>________________________________________</b>
                            <div>
                                {content}
                                <br/>
                                <b>Accredation Unit:</b>
                                <br/>
                                {activeAnchor?.getAttribute('accreditionUnits')}
                               
                            </div>
                            </div>
                        )}
                    />
 
                </div>
                
            )
        })
 
        return (
            <p>
                <div className="drag-container">
                    <h4> Courses </h4>
                    {courses}
                </div>
            </p>
        )
    }       
}
 
export default CoursePalette