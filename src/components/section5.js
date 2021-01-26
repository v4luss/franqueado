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

const Section5 = () => {
    return (
        <MDBModalBody style={{clear: 'both', padding: '100px', backgroundColor: '#FF7220', height: '300px'}}>
            <div style={{float: 'left', width: '600px', paddingLeft: '50px', paddingRight: '100px'}}>
                <h5>Transformar a gestão da sua rede é fácil.</h5>
                <p>O franchising é um mercado inovador e que está evoluindo constantemente por meio da transformação digital.</p>
            </div>
            <div style={{float: 'right', textAlign: 'center', marginRight: '100px'}}>
                <h5>Deixe-nos ajudá-lo a crescer!</h5>
                <p>Acesse o formulario abaixo e dê um passo em direção ao <br/>futuro da sua rede.</p>
                <MDBBtn style={{borderRadius: '30px'}}>Fale Conosco</MDBBtn>
            </div>
        </MDBModalBody>


    )
}

export default Section5