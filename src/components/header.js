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
import MegafoneImg from '../images/icontMegafone2.png'
import styles from '../styles/header.module.css'


const Header = () => {
    return (
      <div>

        <MDBNavbar style={{backgroundColor: '#FF7220', height: "50px", color: 'white'}}>
          <div style={{margin: 'auto'}}><img src={MegafoneImg} style={{marginRight: '10px'}}/><a>Anuncie em nosso <b style={{fontWeight: 'bold'}}>Portal de Franquias!</b></a></div>
        </MDBNavbar>
        <MDBNavbar style={{backgroundColor: "#316DE8"}} expand="md">
          <a><img src={src1} style={{width: "200px", margin: "20px", padding: "20px", marginLeft: '95px'}}/></a>
          <div style={{paddingLeft: "100px", color: 'white', fontSize: '20px'}}>
            <a className={styles.text} style={{marginLeft: '10px'}}>Soluções</a>
            <a className={styles.text} style={{marginLeft: '25px'}}>Preços</a>
            <a className={styles.text} style={{marginLeft: '25px'}}>Saiba mais</a>
            <MDBBtn className={styles.btn1} style={{marginLeft: '40px', borderRadius: '30px', width: '300px', fontSize: '15px', fontWeight: 'bold', textTransform: 'unset'}}>Quero falar com um consultor</MDBBtn>
            <MDBBtn className={styles.btn2} style={{}}>Acessar conta</MDBBtn>
          </div>
        
        </MDBNavbar>
      </div>
      
        
    )
}

export default Header
