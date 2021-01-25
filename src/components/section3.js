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
import Banner3 from '../images/banner3.png'

const Section3 = () => {
    return (
        <MDBModalBody style={{clear: 'both', backgroundColor: "#2546CC"}}>
            <div style={{float: 'left', color: 'white', padding: '50px'}}>
                <h3 style={{padding: '10px'}}>Otimize a gestão da sua Franquia com um <br/>Software sofisticado e inovador</h3>
                <p style={{padding: '10px'}}>Centralize a comunicação da sua franquia, integre diversas soluções <br/>em uma única plataforma e acelere a expansão da sua marca com a <br/>Central do Franqueado. É fácil!</p>
                <MDBBtn>Ver planos</MDBBtn>
            </div>
            <figure style={{floar: 'right', padding: '30px'}}>
                <img src={Banner3} style={{width: '500px'}}/>

            </figure>
            <h2 style={{textAlign: 'center', color: 'white'}}>E mais...</h2>
        </MDBModalBody>
    )
}

export default Section3