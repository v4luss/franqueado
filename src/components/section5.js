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
import styles from '../styles/section5.module.css'

const Section5 = () => {
    return (
        <MDBModalBody style={{clear: 'both', padding: '100px', backgroundColor: '#FF7220', height: '330px', color: 'white'}}>
            <div className={styles.div1} style={{float: 'left', width: '500px', paddingLeft: '50px'}}>
                <h5 style={{fontWeight: 'bold'}}>Transformar a gestão da sua rede é fácil.</h5>
                <p>O franchising é um mercado inovador e que está evoluindo constantemente por meio da transformação digital.</p>
            </div>
            <div className={styles.div2} style={{float: 'right', textAlign: 'center', marginRight: '100px'}}>
                <h5 style={{fontWeight: 'bold'}}>Deixe-nos ajudá-lo a crescer!</h5>
                <p>Acesse o formulario abaixo e dê um passo em direção ao <br/>futuro da sua rede.</p>
                <MDBBtn className={styles.btn} style={{borderRadius: '30px', width: '400px', fontSize: '18px', fontWeight: 'bold'}}>Fale Conosco</MDBBtn>
            </div>
            
        </MDBModalBody>


    )
}

export default Section5