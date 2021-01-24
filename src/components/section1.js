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
import Banner1 from '../images/banner.png'

const testPage = () => {
    return (
      <MDBModalBody style={{backgroundColor:"blue"}}>
          <div style={{textAlign: "center", color: "white"}}>
            <h2>Promova inovação e getão inteligente com</h2>
            <h2><b>O Melhor Sistema Para Franquias do Brasil</b></h2>
            <h6>Mantenha seus franqueados engajados e impulsione a expansão da sua<br/>franquia com a Central do Franqueado.</h6>
            </div>
          <img src={Banner1} style={{marginRight: "auto", marginLeft: "auto", display: "block"}}/>
      <div style={{color: "white", textAlign: "center"}}>
          <span style={{paddingRight: "70px", paddingLeft: "70px"}}>Comunicação efetiva</span>
          <span style={{paddingRight: "70px", paddingLeft: "70px"}}>Operação centralizada</span>
          <span style={{paddingRight: "70px", paddingLeft: "70px"}}>Padronização inteligente</span>
      </div>
      
      
      </MDBModalBody>
      
      
        
    )
}

export default testPage
