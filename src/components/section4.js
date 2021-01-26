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
import styles from '../styles/section.module.css'
import BalanceadoImg from '../images/balanceado.png'

const Section4 = () => {
    return (
        <MDBModalBody style={{paddingTop: '60px'}}>
            <div style={{float: 'left', paddingLeft: '100px', paddingTop: '50px'}}>
                <div className={styles.bubble}>
                    <img src={BalanceadoImg} style={{width: '230px'}}/>
                    <div style={{paddingTop: '50px', paddingRight: '20px', textAlign: 'justify'}}>
                        <p style={{textIndent: '40px'}}>Utilizamos a Central do Franqueado há bastante tempo e cada vez mais vem se tornando imprecindível para o nosso negócio.</p>
                        <p>Giuseppe Frizzo <br/>Coordenador de Operação da Rede Balanceado</p>
                    </div>
                </div>
                <div className={styles.triangle}>
                </div>
            </div>
            
        </MDBModalBody>
        
    )
}

export default Section4