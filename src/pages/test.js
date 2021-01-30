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
import Header from '../components/header'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section5 from '../components/section5'
import Footer from '../components/footer'
import '../styles/global.css'

const testPage = () => {
    return (
      

      <div style={{fontFamily: 'Oxygen'}}>
        
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
      </div>
      
      
        
    )
}

export default testPage

