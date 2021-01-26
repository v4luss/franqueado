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
import LogoImg from '../images/logo.png'
import LogoFace from '../images/logo-face.png'
import LogoInsta from '../images/icon-insta.png'
import LogoLink from '../images/logo-link.png'
import LogoWhats from '../images/logo-whats.png'
import LogoYou from '../images/logo-you.png'

const Section5 = () => {
    return (
        <MDBModalBody style={{backgroundColor: 'blue', color: 'white'}}>
            <div style={{paddingTop: '50px', paddingLeft: '100px'}}>
                <figure style={{}}>
                    <img src={LogoImg} style={{width: '200px'}}/>
                </figure>
                <p style={{paddingTop: '20px'}}>(51)98126-1653</p>
                <p>(51)3391-6340</p>
                <figure style={{position: 'relative', left: '-20px'}}>
                    <img src={LogoFace} style={{width: '50px'}}/>
                    <img src={LogoInsta} style={{width: '50px'}}/>
                    <img src={LogoLink} style={{width: '70px'}}/>
                    <img src={LogoWhats} style={{width: '30px'}}/>
                    <img src={LogoYou} style={{width: '60px', paddingLeft: '20px'}}/>
                </figure>
            </div>
            
            
        </MDBModalBody>


    )
}

export default Section5