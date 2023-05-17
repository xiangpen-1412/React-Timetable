import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import './Dropdown.css';

 

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

 
const ITSDropdown = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  // Get ITS elective list names from Xiangpeng
  // Can get term name from props.selecedTerm
  const tempList = ["SUST 201", "HIST 115",]


  const [electiveList, setElectiveList] = useState(tempList)


  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click",handler);
    };
  });

 

  // Event handler for select button click
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

 

  // Event handler for individual eletives click
  const handleMenuItemClick = (electiveName) => {
    // Get course using electiveName
    // Get the actual course map from Xiangpeng
    var tempElective = {}

    if (electiveName === "SUST 201"){
        tempElective = {
            name: "SUST 201",
            color: "blue",
            extendedName: "Technology and History",
      
            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",
      
            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",
      
            options: [
              {
                section: "EB1",
                color: "orange",
                times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00"],
              },
      
              {
                section: "EB2",
                color: "green",
                times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00"],
              },
            ]
          }
    }
    else if (electiveName === "HIST 115"){
        tempElective = {
            name: "HIST 115",
            color: "blue",
            extendedName: "Technology and History",
      
            description: "★ 3.8 (fi 6) (either term, 3-0-3/2) Software engineering \
            principles of object-oriented design: basic data structures, classes and \
            objects, creation tactics, inheritance, composition, polymorphism, \
            interfaces, compilation and execution. Programming Objectives: \
            introduction to advanced data structures, inner classes, and reflection. \
            Exception handling and unit testing. Prerequisite: CMPUT 275.",
      
            accreditionUnits: "Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units\n\
            Engineering Science: 23.6 Units",
      
            options: [
              {
                section: "EB1",
                color: "orange",
                times: ["MON_09:00-10:00", "WED_09:00-10:00", "FRI_09:00-10:00"],
              },
      
              {
                section: "EB2",
                color: "green",
                times: ["MON_15:00-16:00", "WED_15:00-16:00", "FRI_15:00-16:00"],
              },
            ]
          }
    }

    console.log("item clicked")
    props.addCourseSemLabToPalette(tempElective);
    setShowMenu(!showMenu);
  }

 

  const optionName = electiveList.map((electiveName, index) => {
    return(
      <div  key={index}
            className="dropdown-item"
            onClick={() => handleMenuItemClick(electiveName)}
      >
        {electiveName}
      </div>
    )
  })

 

 

  return (
    <div className="dropdown-container">
    
      <div onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{props.placeHolder}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>


      {showMenu && (
        <div className="dropdown-menu">
          {optionName}
        </div>
      )}
    </div>
  );
};


export default ITSDropdown;