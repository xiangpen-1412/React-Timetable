import { Component } from 'react';
import React, {useEffect, useState} from 'react'
import './ContextMenu.css'

// Hooks cannot be used in React Class components
/*
  - useNavigate() - To navigate and send data to another page
  - useLocation() - to receive data sent from another page
  - useEffect() - To trigger functions on Global Events
*/
// Can only use hooks inside simple components

const PaletteCourseContextMenu = (props) => {
    
      const {showCoursePaletteContextMenu, xPosCoursePaletteContextMenu, yPosCoursePaletteContextMenu } = props;
      

      useEffect(() => {
        document.addEventListener("click", props.disappearContextMenu)

        return () => {
          document.removeEventListener("click", props.disappearContextMenu)
        }

      }, [])

      return (
        showCoursePaletteContextMenu && (<div
          style={{ top: `${yPosCoursePaletteContextMenu}px`, left: `${xPosCoursePaletteContextMenu}px` }}
          className="MenuContainer"
        >
{/* props.deleteCourseFromPalette() */}
            <div 
                  className="menuElement" 
                  onClick={(event) => {props.deleteCourseFromPalette(props.courseToBeDeleted)}}
            >
              Delete
            </div>

        </div>)
      );


  }

  export default PaletteCourseContextMenu