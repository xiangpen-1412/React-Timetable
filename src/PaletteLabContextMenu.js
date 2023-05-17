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

const PaletteLabContextMenu = (props) => {
    
      const {showLabPaletteContextMenu, xPosLabPaletteContextMenu, yPosLabPaletteContextMenu } = props;
      

      useEffect(() => {
        document.addEventListener("click", props.disappearContextMenu)

        return () => {
          document.removeEventListener("click", props.disappearContextMenu)
        }

      }, [])

      return (showLabPaletteContextMenu && (
          <div
          style={{ top: `${yPosLabPaletteContextMenu}px`, left: `${xPosLabPaletteContextMenu}px` }}
          className="MenuContainer"
        >

            <div 
                  className="menuElement" 
                  onClick={(event) => {props.deleteLabFromPalette(props.courseToBeDeleted)}}
            >
              Delete
            </div>

        </div>)
      );





}

      


  

  export default PaletteLabContextMenu