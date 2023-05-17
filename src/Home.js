import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import RESTController from "./controller/RESTController";
 
//programList is in state variable so now make a div for each program
const Program = (props) => {
      const cells0 = props.programList0.map((program,index)=> {
        return(
          <div
            key={index}
            programInfo={program}
            className = "indvProgram0"
            onClick={(event) => props.onClickProgram(event, program)}
          > 
          {program}
          </div>
        )})
 
      const cells1 = props.programList1.map((program,index)=> {
        return(
          <div
            key={index}
            programInfo={program}
            className = "indvProgram1"
            onClick={(event) => props.onClickProgram(event, program)}
          > 
          {program}
          </div>
        )})
 
      const cells2 = props.programList2.map((program,index)=> {
        return(
          <div
            key={index}
            programInfo={program}
            className = "indvProgram2"
            onClick={(event) => props.onClickProgram(event, program)}
          > 
          {program}
          </div>
        )})
 
      const cells3 = props.programList3.map((program,index)=> {
        return(
          <div
            key={index}
            programInfo={program}
            className = "indvProgram3"
            onClick={(event) => props.onClickProgram(event, program)}
          > 
          {program}
          </div>
        )})
 
      return(
 
        <div className = "programPalette">
          <div className = "programPalette0">{cells0}</div>
          <div className = "programPalette1">{cells1}</div>
          <div className = "programPalette2">{cells2}</div>
          <div className = "programPalette3">{cells3}</div>
        </div>
 
      )
}
 
const Plan = (props) => {
 
  const navigate= useNavigate()
       
  const cells = props.planList.map((plan,index)=> {
    return(
      <div
        key={index}
        planInfo={plan}
        className = "indvPlan"
        onClick={(event) => {
          // Send plan and program name onCLick
          // Navigate to TimeTable page
              navigate("/timetable",
                  {
                    state: {
                              selectedProgram: props.selectedProgram,
                              selectedPlan: plan,
                              replace: false
                            }
                  }
              )
          }
        }
      > 
      {plan}
      </div>
    )
  })
 
  return(
    <div className = "planPalette">
      {cells}
    </div>
  )
 
}
 
class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          selectedProgram: "",
 
          planList: [],
 
          programList0: [
              "Chemical Engineering",        
              "Materials Engineering",
          ],
 
          programList1: [
              "Civil Engineering",
              "Mining Engineering",
              "Petroleum Engineering",
          ],
 
          programList2: [
              "Computer Engineering",
              "Electrical Engineering",
              "Engineering Physics",
          ],
 
          programList3: [
            "Mechanical Engineering",
          ],
      }

        this.restController = new RESTController();
    }

    onClickProgram = (event, programName) => {
        const data = {
            programName : programName
        }

        this.restController.getPlans(data).then((plans) => {
            this.setState({planList: plans})
        })

        this.setState({selectedProgram: programName})
    }
 
    render() {
        const {programList0} = this.state;
        const {programList1} = this.state;
        const {programList2} = this.state;
        const {programList3} = this.state;
 
     
        const {termList} = this.state;
 
        return (
            <div className="frontPageWrapper">
 
              <div className="logoWrapper">
 
                <img src="engineering.png"  className="logo" width="450" height="100"/>
 
              </div>
 
              <div className="frontPageTextWrapper">
 
                  <h1>Time-Table Visualizer </h1>
 
              </div>
 
 
 
              <div className="frontPageTextWrapper">
 
                  <h2>2022 - 2023 </h2>
 
              </div>
            
              <div className='wrapperTermProgram'>
                <Program programList1={programList1} programList0={programList0} programList2={programList2} programList3={programList3} onClickProgram={this.onClickProgram}/>
                <Plan planList={this.state.planList} selectedProgram={this.state.selectedProgram}/>
              </div>
            </div>
          )
       
    }
}
 
export default Home