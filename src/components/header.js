import React, { Component } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavLink,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow
} from 'mdbreact'
import { Link } from 'gatsby'
import src1 from '../images/logo.png'


const Header = () => {
    return (
      <div>

        <MDBNavbar color="orange" style={{height: "50px"}}>
          <div><a style={{textAlign: "center"}}>anuncie em nosso portal de franquias</a></div>
        </MDBNavbar>
        <MDBNavbar style={{backgroundColor: "#316DE8"}} expand="md">
          <img src={src1} type="image/png" style={{width: "200px", margin: "20px", padding: "20px"}}/>
          <div style={{paddingLeft: "100px"}}>
            <MDBBtn>asdf</MDBBtn>
            <MDBBtn>asdf</MDBBtn>
            <MDBBtn>asdf</MDBBtn>
            <MDBBtn>asdf</MDBBtn>
            <MDBBtn>asdf</MDBBtn>
          </div>
        
        </MDBNavbar>
      </div>
      
        
    )
}

export default Header
