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
import styles from '../styles/section1.module.css'


const Section1 = () => {
    return (
      <MDBModalBody className={styles.section1} style={{backgroundColor: "#316DE8"}}>
          <div style={{textAlign: "center", color: "white"}}>
            <h2>Promova inovação e getão inteligente com</h2>
            <h2><b style={{fontWeight: 'bold'}}>O Melhor Sistema Para Franquias do Brasil</b></h2>
            <h6>Mantenha seus franqueados engajados e impulsione a expansão da sua<br/>franquia com a Central do Franqueado.</h6>
            </div>
          <img src={Banner1} style={{marginRight: "auto", marginLeft: "auto", display: "block"}}/>
      <div style={{color: "white", paddingBottom: '80px', fontSize: '20px', marginLeft: '130px'}}>
        <ul>
          <li className={styles.item1} style={{paddingRight: "70px", marginLeft: "50px", paddingLeft: '50px', float: 'left'}}><span>Comunicação efetiva</span></li>
          <li className={styles.item2} style={{paddingRight: "70px", marginLeft: "50px", paddingLeft: '50px', float: 'left'}}>Operação centralizada</li>
          <li className={styles.item3} style={{paddingRight: "70px", marginLeft: "50px", paddingLeft: '50px', float: 'left'}}>Padronização inteligente</li>
        </ul>
      </div>
      
      
      </MDBModalBody>
      
      
        
    )
}

export default Section1
