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

const PaletteSeminarContextMenu = (props) => {
    
      const {showSeminarPaletteContextMenu, xPosSeminarPaletteContextMenu, yPosSeminarPaletteContextMenu } = props;
      

      useEffect(() => {
        document.addEventListener("click", props.disappearContextMenu)

        return () => {
          document.removeEventListener("click", props.disappearContextMenu)
        }

      }, [])

      return (showSeminarPaletteContextMenu && (
          <div
          style={{ top: `${yPosSeminarPaletteContextMenu}px`, left: `${xPosSeminarPaletteContextMenu}px` }}
          className="MenuContainer"
        >

            <div 
                  className="menuElement" 
                  onClick={(event) => {props.deleteSemFromPalette(props.courseToBeDeleted)}}
            >
              Delete
            </div>

        </div>)
      );


}


  export default PaletteSeminarContextMenu